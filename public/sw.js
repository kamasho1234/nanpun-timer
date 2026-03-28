// Service Worker for background timer notifications
let timers = [];
let checkInterval = null;

self.addEventListener('message', (event) => {
  const { type, payload } = event.data;

  switch (type) {
    case 'REGISTER_TIMER':
      // payload: { id, label, completesAt }
      // Remove existing timer with same id to avoid duplicates
      timers = timers.filter((t) => t.id !== payload.id);
      timers.push({
        id: payload.id,
        label: payload.label,
        completesAt: payload.completesAt,
      });
      startChecking();
      break;

    case 'REMOVE_TIMER':
      timers = timers.filter((t) => t.id !== payload.id);
      if (timers.length === 0 && checkInterval) {
        clearInterval(checkInterval);
        checkInterval = null;
      }
      break;

    case 'CLEAR_ALL':
      timers = [];
      if (checkInterval) {
        clearInterval(checkInterval);
        checkInterval = null;
      }
      break;
  }
});

function startChecking() {
  if (checkInterval) return;
  checkInterval = setInterval(() => {
    const now = Date.now();
    const completed = timers.filter((t) => t.completesAt <= now);

    completed.forEach((t) => {
      self.registration.showNotification('タイマー完了', {
        body: t.label + ' のタイマーが終了しました',
        icon: '/icons/icon-192.png',
        badge: '/icons/icon-192.png',
        tag: 'timer-' + t.id,
        requireInteraction: true,
        vibrate: [200, 100, 200, 100, 200],
      });

      self.clients.matchAll().then((clients) => {
        clients.forEach((client) => {
          client.postMessage({
            type: 'TIMER_COMPLETED',
            payload: { id: t.id },
          });
        });
      });
    });

    timers = timers.filter((t) => t.completesAt > now);

    if (timers.length === 0) {
      clearInterval(checkInterval);
      checkInterval = null;
    }
  }, 1000);
}

// Open app on notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then((clients) => {
      if (clients.length > 0) {
        clients[0].focus();
      } else {
        self.clients.openWindow('/');
      }
    })
  );
});

// Install & activate
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
