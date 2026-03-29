'use client';

import { useState, useRef, useCallback } from 'react';
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
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const addTimer = useTimerStore((s) => s.addTimer);

  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isSwiping = useRef(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  const filteredPresets = PRESETS.filter((p) => p.category === activeCategory);

  const activeIndex = CATEGORY_ORDER.indexOf(activeCategory);

  const switchCategory = useCallback((direction: 'next' | 'prev') => {
    const newIndex = direction === 'next' ? activeIndex + 1 : activeIndex - 1;
    if (newIndex < 0 || newIndex >= CATEGORY_ORDER.length) {
      // 端に達したらバウンスバック
      setSwipeOffset(0);
      return;
    }
    setIsTransitioning(true);
    setSwipeOffset(direction === 'next' ? -60 : 60);

    setTimeout(() => {
      setActiveCategory(CATEGORY_ORDER[newIndex]);
      setSwipeOffset(0);
      setIsTransitioning(false);
      setError(null);

      // タブを自動スクロール
      if (tabsRef.current) {
        const tab = tabsRef.current.children[newIndex] as HTMLElement;
        tab?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }, 150);
  }, [activeIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;

    // 縦スクロールの方が大きければスワイプしない
    if (!isSwiping.current && Math.abs(dy) > Math.abs(dx)) return;
    isSwiping.current = true;

    // 端の場合は抵抗感を出す
    const atStart = activeIndex === 0 && dx > 0;
    const atEnd = activeIndex === CATEGORY_ORDER.length - 1 && dx < 0;
    const resistance = (atStart || atEnd) ? 0.2 : 0.5;

    setSwipeOffset(dx * resistance);
  };

  const handleTouchEnd = () => {
    if (!isSwiping.current) {
      setSwipeOffset(0);
      return;
    }

    const threshold = 50;
    if (swipeOffset < -threshold) {
      switchCategory('next');
    } else if (swipeOffset > threshold) {
      switchCategory('prev');
    } else {
      setSwipeOffset(0);
    }
    isSwiping.current = false;
  };

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
        <div ref={tabsRef} className="flex overflow-x-auto gap-2 pb-2 scrollbar-none scroll-smooth-touch">
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
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-amber-50 to-transparent sm:hidden" />
      </div>

      {/* エラー表示 */}
      {error && (
        <p className="mt-2 text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      {/* プリセットグリッド（スワイプ対応） */}
      <div
        className="mt-3 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-2"
          style={{
            transform: `translateX(${swipeOffset}px)`,
            opacity: isTransitioning ? 0.5 : 1,
            transition: isSwiping.current ? 'none' : 'transform 0.15s ease-out, opacity 0.15s ease-out',
          }}
        >
          {filteredPresets.map((preset) => (
            <PresetCard key={preset.id} preset={preset} onSelect={handleSelect} />
          ))}
        </div>
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
