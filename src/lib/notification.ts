/**
 * Notification API ラッパー
 */

/**
 * ブラウザが Notification API に対応しているかどうかを返す。
 */
export function isNotificationSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window;
}

/**
 * 通知パーミッションを要求する。
 * 許可された場合 true、それ以外は false を返す。
 */
export async function requestNotificationPermission(): Promise<boolean> {
  if (!isNotificationSupported()) return false;

  // 既に許可済み
  if (Notification.permission === 'granted') return true;

  // 既に拒否済み
  if (Notification.permission === 'denied') return false;

  const result = await Notification.requestPermission();
  return result === 'granted';
}

/**
 * 通知を送信する。
 * パーミッションが許可されていない場合やブラウザ非対応の場合は何もしない。
 */
export function sendNotification(title: string, body: string): void {
  if (!isNotificationSupported()) return;
  if (Notification.permission !== 'granted') return;

  new Notification(title, {
    body,
    icon: '/icon-192x192.png',
  });
}
