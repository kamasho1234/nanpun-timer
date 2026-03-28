'use client';

import { useState } from 'react';
import { useTimerStore } from '@/stores/timerStore';
import { initAudio } from '@/lib/alarm';
import { requestNotificationPermission } from '@/lib/notification';

export default function CustomTimerForm() {
  const [label, setLabel] = useState('');
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const addTimer = useTimerStore((s) => s.addTimer);

  const totalSeconds = minutes * 60 + seconds;

  const handleStart = async () => {
    if (totalSeconds === 0) return;
    setError(null);
    try {
      await initAudio();
      await requestNotificationPermission();
      addTimer(label || 'カスタムタイマー', '⏱', totalSeconds, 'custom');
      setLabel('');
      setMinutes(0);
      setSeconds(0);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'タイマーの追加に失敗しました';
      setError(message);
    }
  };

  const adjustMinutes = (delta: number) => {
    setMinutes((m) => Math.min(99, Math.max(0, m + delta)));
  };

  const adjustSeconds = (delta: number) => {
    setSeconds((s) => Math.min(59, Math.max(0, s + delta)));
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="カスタムタイマー"
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-orange-400 transition-colors bg-white"
      />

      <div className="flex gap-2 items-center justify-center">
        {/* 分 */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-gray-500">分</span>
          <div className="flex items-center gap-0.5">
            <button
              type="button"
              onClick={() => adjustMinutes(-1)}
              className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 text-xl font-bold flex items-center justify-center transition-colors"
            >
              −
            </button>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              max={99}
              value={minutes}
              onChange={(e) => setMinutes(Math.min(99, Math.max(0, Number(e.target.value))))}
              className="w-12 h-11 border border-gray-200 rounded-xl text-center text-xl font-bold text-gray-900 focus:outline-none focus:border-orange-400 bg-white"
            />
            <button
              type="button"
              onClick={() => adjustMinutes(1)}
              className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 text-xl font-bold flex items-center justify-center transition-colors"
            >
              +
            </button>
          </div>
        </div>

        <span className="text-2xl text-gray-400 font-bold mt-5">:</span>

        {/* 秒 */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-xs text-gray-500">秒</span>
          <div className="flex items-center gap-0.5">
            <button
              type="button"
              onClick={() => adjustSeconds(-1)}
              className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 text-xl font-bold flex items-center justify-center transition-colors"
            >
              −
            </button>
            <input
              type="number"
              inputMode="numeric"
              min={0}
              max={59}
              value={seconds}
              onChange={(e) => setSeconds(Math.min(59, Math.max(0, Number(e.target.value))))}
              className="w-12 h-11 border border-gray-200 rounded-xl text-center text-xl font-bold text-gray-900 focus:outline-none focus:border-orange-400 bg-white"
            />
            <button
              type="button"
              onClick={() => adjustSeconds(1)}
              className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-700 text-xl font-bold flex items-center justify-center transition-colors"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={handleStart}
        disabled={totalSeconds === 0}
        className="w-full bg-orange-500 text-white rounded-xl py-4 text-base font-bold transition-colors hover:bg-orange-600 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
      >
        タイマー開始
      </button>
    </div>
  );
}
