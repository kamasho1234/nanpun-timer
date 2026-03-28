'use client';

import type { Preset } from '@/types/timer';
import FoodIcon from '@/components/ui/FoodIcon';

interface PresetCardProps {
  preset: Preset;
  onSelect: (preset: Preset) => void;
}

function formatTimeJa(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s}秒`;
  return `${m}分${s.toString().padStart(2, '0')}秒`;
}

export default function PresetCard({ preset, onSelect }: PresetCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(preset)}
      className="bg-white border border-gray-200 rounded-xl p-3 hover:border-orange-400 hover:shadow transition-all cursor-pointer active:scale-95 text-left w-full min-h-[88px]"
    >
      <div className="flex items-start gap-2">
        <FoodIcon foodId={preset.id} size={36} className="flex-shrink-0" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-800 leading-snug">
            {preset.label}
          </p>
          <p className="text-sm text-orange-500 font-bold mt-0.5">
            {formatTimeJa(preset.seconds)}
          </p>
        </div>
      </div>
      {preset.tip && (
        <p className="mt-1.5 text-xs text-gray-500 leading-tight line-clamp-2">
          {preset.tip}
        </p>
      )}
    </button>
  );
}
