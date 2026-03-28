'use client';

import { useEffect, useRef } from 'react';
import { useTimerStore } from '@/stores/timerStore';
import { playAlarm } from '@/lib/alarm';
import { sendNotification } from '@/lib/notification';

export function useAlarm(): void {
  const timers = useTimerStore((state) => state.timers);
  const setAlarmPlaying = useTimerStore((state) => state.setAlarmPlaying);
  const notifiedIds = useRef<Set<string>>(new Set());

  useEffect(() => {
    const completedTimers: { id: string; label: string }[] = [];

    for (const timer of timers) {
      if (timer.status === 'completed' && !notifiedIds.current.has(timer.id)) {
        notifiedIds.current.add(timer.id);
        completedTimers.push({ id: timer.id, label: timer.label });
      }

      // running/idle/pausedに戻ったら通知済みリストから外す（延長時の再通知用）
      if (timer.status !== 'completed' && notifiedIds.current.has(timer.id)) {
        notifiedIds.current.delete(timer.id);
      }
    }

    if (completedTimers.length > 0) {
      playAlarm().then(() => {
        setAlarmPlaying(true);
      });

      for (const t of completedTimers) {
        sendNotification('タイマー完了', `${t.label} のタイマーが終了しました`);
      }
    }

    // 削除されたタイマーの ID をクリーンアップ
    const currentIds = new Set(timers.map((t) => t.id));
    for (const id of notifiedIds.current) {
      if (!currentIds.has(id)) {
        notifiedIds.current.delete(id);
      }
    }
  }, [timers, setAlarmPlaying]);
}
