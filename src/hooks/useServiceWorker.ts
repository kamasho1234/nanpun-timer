'use client';

import { useEffect, useRef } from 'react';
import { useTimerStore } from '@/stores/timerStore';
import {
  registerServiceWorker,
  registerTimerWithSW,
  removeTimerFromSW,
} from '@/lib/serviceWorker';

export function useServiceWorker() {
  const timers = useTimerStore((state) => state.timers);
  const tick = useTimerStore((state) => state.tick);
  const prevTimerIdsRef = useRef<Set<string>>(new Set());

  // Register Service Worker on mount
  useEffect(() => {
    registerServiceWorker();
  }, []);

  // Listen for TIMER_COMPLETED messages from SW
  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    const handler = (event: MessageEvent) => {
      if (event.data?.type === 'TIMER_COMPLETED') {
        const { id } = event.data.payload;
        tick(id);
      }
    };

    navigator.serviceWorker.addEventListener('message', handler);
    return () => {
      navigator.serviceWorker.removeEventListener('message', handler);
    };
  }, [tick]);

  // Sync timer state to Service Worker
  useEffect(() => {
    const currentIds = new Set<string>();

    timers.forEach((timer) => {
      currentIds.add(timer.id);

      if (timer.status === 'running' && timer.startedAt !== null) {
        const completesAt = timer.startedAt + timer.totalSeconds * 1000;
        registerTimerWithSW(timer.id, timer.label, completesAt);
      } else {
        removeTimerFromSW(timer.id);
      }
    });

    // Remove timers that were deleted from the store
    prevTimerIdsRef.current.forEach((id) => {
      if (!currentIds.has(id)) {
        removeTimerFromSW(id);
      }
    });

    prevTimerIdsRef.current = currentIds;
  }, [timers]);
}
