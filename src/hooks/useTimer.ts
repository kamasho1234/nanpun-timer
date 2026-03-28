'use client';

import { useEffect, useRef } from 'react';
import { useTimerStore } from '@/stores/timerStore';

const TICK_INTERVAL_MS = 100;

export function useTimer() {
  const hasRunning = useTimerStore((s) => s.timers.some((t) => t.status === 'running'));
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!hasRunning) {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      const { timers, tick } = useTimerStore.getState();
      timers.forEach((t) => {
        if (t.status === 'running') {
          tick(t.id);
        }
      });
    }, TICK_INTERVAL_MS);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [hasRunning]);

  // バックグラウンドタブ復帰時に即座に tick を実行
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        const { timers, tick } = useTimerStore.getState();
        timers.forEach((t) => {
          if (t.status === 'running') {
            tick(t.id);
          }
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
}
