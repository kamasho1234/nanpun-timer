'use client';

import { TimerStatus } from '@/types/timer';

interface TimerProgressProps {
  progress: number;
  status: TimerStatus;
  size?: number;
}

const STATUS_COLORS: Record<TimerStatus, string> = {
  running: '#f97316',
  paused: '#eab308',
  completed: '#ef4444',
  idle: '#d1d5db',
};

export default function TimerProgress({ progress, status, size = 80 }: TimerProgressProps) {
  const radius = 45;
  const strokeWidth = 6;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - progress);
  const color = STATUS_COLORS[status];

  return (
    <div
      className={`flex-shrink-0 ${status === 'completed' ? 'timer-completed' : ''}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
          className="transition-[stroke-dashoffset] duration-300 ease-linear"
        />
      </svg>
    </div>
  );
}
