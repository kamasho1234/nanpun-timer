let swRegistration: ServiceWorkerRegistration | null = null;

export async function registerServiceWorker(): Promise<boolean> {
  if (!('serviceWorker' in navigator)) return false;
  try {
    swRegistration = await navigator.serviceWorker.register('/sw.js');
    return true;
  } catch {
    return false;
  }
}

export function registerTimerWithSW(
  id: string,
  label: string,
  completesAt: number
): void {
  navigator.serviceWorker?.controller?.postMessage({
    type: 'REGISTER_TIMER',
    payload: { id, label, completesAt },
  });
}

export function removeTimerFromSW(id: string): void {
  navigator.serviceWorker?.controller?.postMessage({
    type: 'REMOVE_TIMER',
    payload: { id },
  });
}

export function clearAllTimersInSW(): void {
  navigator.serviceWorker?.controller?.postMessage({
    type: 'CLEAR_ALL',
  });
}

export function isServiceWorkerSupported(): boolean {
  return typeof window !== 'undefined' && 'serviceWorker' in navigator;
}
