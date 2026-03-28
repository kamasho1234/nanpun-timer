'use client';

import { useState } from 'react';
import type { Preset, PresetCategory } from '@/types/timer';
import { CATEGORY_LABELS, CATEGORY_ORDER, PRESETS } from '@/data/presets';
import { useTimerStore } from '@/stores/timerStore';
import { initAudio } from '@/lib/alarm';
import { requestNotificationPermission } from '@/lib/notification';
import PresetCard from './PresetCard';
import PresetModal from './PresetModal';

export default function PresetSelector() {
  const [activeCategory, setActiveCategory] = useState<PresetCategory>(CATEGORY_ORDER[0]);
  const [error, setError] = useState<string | null>(null);
  const [selectedPreset, setSelectedPreset] = useState<Preset | null>(null);
  const addTimer = useTimerStore((s) => s.addTimer);

  const filteredPresets = PRESETS.filter((p) => p.category === activeCategory);

  const handleSelect = (preset: Preset) => {
    setError(null);
    setSelectedPreset(preset);
  };

  const handleStart = async (preset: Preset) => {
    setError(null);
    setSelectedPreset(null);
    try {
      await initAudio();
      await requestNotificationPermission();
      addTimer(preset.label, preset.icon, preset.seconds, preset.id);
    } catch (e) {
      const message = e instanceof Error ? e.message : 'タイマーの追加に失敗しました';
      setError(message);
    }
  };

  const handleCloseModal = () => {
    setSelectedPreset(null);
  };

  return (
    <div>
      {/* カテゴリタブ */}
      <div className="relative">
        <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none scroll-smooth-touch">
          {CATEGORY_ORDER.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setError(null);
              }}
              className={`shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-colors min-h-[44px] ${
                activeCategory === cat
                  ? 'bg-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
        {/* 右端フェード: スクロールできることを示すヒント */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-amber-50 to-transparent sm:hidden" />
      </div>

      {/* エラー表示 */}
      {error && (
        <p className="mt-2 text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      {/* プリセットグリッド */}
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
        {filteredPresets.map((preset) => (
          <PresetCard key={preset.id} preset={preset} onSelect={handleSelect} />
        ))}
      </div>

      {/* 確認モーダル */}
      <PresetModal
        preset={selectedPreset}
        onStart={handleStart}
        onClose={handleCloseModal}
      />
    </div>
  );
}
