'use client';

import { TimerStatus } from '@/types/timer';
import { useTimerStore } from '@/stores/timerStore';
import { initAudio, stopAlarm } from '@/lib/alarm';

interface TimerControlsProps {
  id: string;
  status: TimerStatus;
}

export default function TimerControls({ id, status }: TimerControlsProps) {
  const startTimer = useTimerStore((s) => s.startTimer);
  const pauseTimer = useTimerStore((s) => s.pauseTimer);
  const resetTimer = useTimerStore((s) => s.resetTimer);
  const removeTimer = useTimerStore((s) => s.removeTimer);
  const extendTimer = useTimerStore((s) => s.extendTimer);

  const setAlarmPlaying = useTimerStore((s) => s.setAlarmPlaying);

  const handleExtend = async (seconds: number) => {
    stopAlarm();
    setAlarmPlaying(false);
    await initAudio();
    extendTimer(id, seconds);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {/* running: 一時停止 + 削除 */}
        {status === 'running' && (
          <>
            <button
              onClick={() => pauseTimer(id)}
              className="w-12 h-12 rounded-full bg-orange-100 hover:bg-orange-200 active:bg-orange-300 text-orange-600 flex items-center justify-center text-xl transition-colors"
              aria-label="一時停止"
            >
              ⏸
            </button>
            <button
              onClick={() => removeTimer(id)}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-500 flex items-center justify-center text-xl transition-colors"
              aria-label="削除"
            >
              🗑
            </button>
          </>
        )}

        {/* paused: 再開 + リセット + 削除 */}
        {status === 'paused' && (
          <>
            <button
              onClick={() => startTimer(id)}
              className="w-12 h-12 rounded-full bg-orange-100 hover:bg-orange-200 active:bg-orange-300 text-orange-600 flex items-center justify-center text-xl transition-colors"
              aria-label="再開"
            >
              ▶
            </button>
            <button
              onClick={() => resetTimer(id)}
              className="w-12 h-12 rounded-full bg-orange-100 hover:bg-orange-200 active:bg-orange-300 text-orange-600 flex items-center justify-center text-xl transition-colors"
              aria-label="リセット"
            >
              ↺
            </button>
            <button
              onClick={() => removeTimer(id)}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-500 flex items-center justify-center text-xl transition-colors"
              aria-label="削除"
            >
              🗑
            </button>
          </>
        )}

        {/* completed: リセット + 削除 */}
        {status === 'completed' && (
          <>
            <button
              onClick={() => resetTimer(id)}
              className="w-12 h-12 rounded-full bg-orange-100 hover:bg-orange-200 active:bg-orange-300 text-orange-600 flex items-center justify-center text-xl transition-colors"
              aria-label="リセット"
            >
              ↺
            </button>
            <button
              onClick={() => removeTimer(id)}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-500 flex items-center justify-center text-xl transition-colors"
              aria-label="削除"
            >
              🗑
            </button>
          </>
        )}

        {/* idle: 開始 + 削除 */}
        {status === 'idle' && (
          <>
            <button
              onClick={() => startTimer(id)}
              className="w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white flex items-center justify-center text-xl transition-colors"
              aria-label="開始"
            >
              ▶
            </button>
            <button
              onClick={() => removeTimer(id)}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-500 flex items-center justify-center text-xl transition-colors"
              aria-label="削除"
            >
              🗑
            </button>
          </>
        )}
      </div>

      {/* completed: 追加時間ボタン */}
      {status === 'completed' && (
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => handleExtend(30)}
            className="flex-1 h-10 rounded-lg bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-sm font-bold transition-colors active:scale-95"
          >
            +30秒
          </button>
          <button
            onClick={() => handleExtend(60)}
            className="flex-1 h-10 rounded-lg bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-sm font-bold transition-colors active:scale-95"
          >
            +1分
          </button>
          <button
            onClick={() => handleExtend(120)}
            className="flex-1 h-10 rounded-lg bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-sm font-bold transition-colors active:scale-95"
          >
            +2分
          </button>
          <button
            onClick={() => handleExtend(300)}
            className="flex-1 h-10 rounded-lg bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white text-sm font-bold transition-colors active:scale-95"
          >
            +5分
          </button>
        </div>
      )}
    </div>
  );
}
