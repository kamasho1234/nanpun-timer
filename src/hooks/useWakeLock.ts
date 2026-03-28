'use client';

import { useEffect, useRef } from 'react';
import { useTimerStore } from '@/stores/timerStore';

export function useWakeLock() {
  const timers = useTimerStore((s) => s.timers);
  const wakeLockRef = useRef<WakeLockSentinel | null>(null);

  const hasRunning = timers.some((t) => t.status === 'running');

  useEffect(() => {
    if (!('wakeLock' in navigator)) return;

    const requestWakeLock = async () => {
      try {
        if (hasRunning && wakeLockRef.current === null) {
          wakeLockRef.current = await navigator.wakeLock.request('screen');
          wakeLockRef.current.addEventListener('release', () => {
            wakeLockRef.current = null;
          });
        } else if (!hasRunning && wakeLockRef.current !== null) {
          await wakeLockRef.current.release();
          wakeLockRef.current = null;
        }
      } catch {
        // Wake Lock 取得失敗（バッテリーセーバー等）は無視
      }
    };

    requestWakeLock();

    // タブ復帰時に Wake Lock を再取得（ブラウザが自動解放するため）
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && hasRunning) {
        requestWakeLock();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (wakeLockRef.current !== null) {
        wakeLockRef.current.release().catch(() => {});
        wakeLockRef.current = null;
      }
    };
  }, [hasRunning]);
}
