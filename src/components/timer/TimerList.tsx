'use client';

import { useTimerStore } from '@/stores/timerStore';
import TimerCard from './TimerCard';

export default function TimerList() {
  const timers = useTimerStore((s) => s.timers);
  const clearCompleted = useTimerStore((s) => s.clearCompleted);

  const hasCompleted = timers.some((t) => t.status === 'completed');

  if (timers.length === 0) {
    return (
      <p className="text-center text-gray-400 py-12">
        タイマーを追加してください
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {hasCompleted && (
        <button
          onClick={clearCompleted}
          className="self-end rounded-full bg-red-100 hover:bg-red-200 active:bg-red-300 text-red-600 px-4 py-2 text-sm font-medium transition-colors"
        >
          完了をすべてクリア
        </button>
      )}

      {timers.map((timer) => (
        <TimerCard key={timer.id} timer={timer} />
      ))}
    </div>
  );
}
