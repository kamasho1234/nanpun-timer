'use client';

import type { Preset } from '@/types/timer';
import FoodIcon from '@/components/ui/FoodIcon';

interface PresetModalProps {
  preset: Preset | null;
  onStart: (preset: Preset) => void;
  onClose: () => void;
}

function formatTimeJa(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}秒`;
  return `${m}分${s.toString().padStart(2, '0')}秒`;
}

export default function PresetModal({ preset, onStart, onClose }: PresetModalProps) {
  if (!preset) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-2xl sm:rounded-2xl p-6 w-full mx-4 max-w-[calc(100vw-2rem)] sm:max-w-sm relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 閉じるボタン */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center text-gray-400 hover:text-gray-600 text-xl leading-none rounded-full hover:bg-gray-100"
        >
          ✕
        </button>

        {/* アイコン */}
        <div className="text-center">
          <FoodIcon foodId={preset.id} size={72} />
        </div>

        {/* 食材名 */}
        <p className="text-xl font-bold mt-3 text-center text-gray-800">
          {preset.label}
        </p>

        {/* 茹で時間 */}
        <p className="text-2xl font-mono font-bold text-orange-500 mt-2 text-center">
          {formatTimeJa(preset.seconds)}
        </p>

        {/* tip */}
        {preset.tip && (
          <p className="text-sm text-gray-600 mt-3 bg-amber-50 rounded-lg p-3">
            💡 {preset.tip}
          </p>
        )}

        {/* タイマー開始ボタン */}
        <button
          type="button"
          onClick={() => onStart(preset)}
          className="w-full bg-orange-500 text-white py-4 rounded-xl text-lg font-bold mt-4 hover:bg-orange-600 active:scale-95 transition-all"
        >
          タイマー開始
        </button>
      </div>
    </div>
  );
}
