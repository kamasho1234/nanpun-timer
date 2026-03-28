'use client';

import { Timer } from '@/types/timer';
import TimerProgress from './TimerProgress';
import TimerControls from './TimerControls';
import FoodIcon from '@/components/ui/FoodIcon';

interface TimerCardProps {
  timer: Timer;
}

function formatTimeJa(remainingSeconds: number): string {
  const total = Math.ceil(remainingSeconds);
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  if (minutes === 0) return `${seconds}秒`;
  return `${minutes}分${String(seconds).padStart(2, '0')}秒`;
}

export default function TimerCard({ timer }: TimerCardProps) {
  const progress =
    timer.totalSeconds > 0
      ? timer.remainingSeconds / timer.totalSeconds
      : 0;

  return (
    <div
      className={`rounded-2xl shadow-md p-4 ${
        timer.status === 'completed' ? 'bg-red-50' : 'bg-white'
      }`}
    >
      {/* 上部: アイコン + ラベル */}
      <div className="flex items-center gap-2 mb-3">
        <FoodIcon foodId={timer.presetId} size={28} />
        <span className="text-base font-medium text-gray-700 truncate">
          {timer.label}
        </span>
      </div>

      {/* 中央: プログレス + 時間 */}
      <div className="flex items-center justify-center gap-4">
        <TimerProgress progress={progress} status={timer.status} size={80} />
        <span className="text-4xl font-bold text-gray-900 min-w-[120px] text-center">
          {formatTimeJa(timer.remainingSeconds)}
        </span>
      </div>

      {/* 下部: コントロールボタン */}
      <div className="mt-3 flex justify-center">
        <TimerControls id={timer.id} status={timer.status} />
      </div>
    </div>
  );
}
