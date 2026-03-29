'use client';

import Header from '@/components/ui/Header';
import PresetSelector from '@/components/preset/PresetSelector';
import CustomTimerForm from '@/components/custom/CustomTimerForm';
import NotificationGuide from '@/components/ui/NotificationGuide';
import ShareButtons from '@/components/ui/ShareButtons';
import TimerList from '@/components/timer/TimerList';
import { useTimer } from '@/hooks/useTimer';
import { useAlarm } from '@/hooks/useAlarm';
import { useWakeLock } from '@/hooks/useWakeLock';
import { useServiceWorker } from '@/hooks/useServiceWorker';
import { useTimerStore } from '@/stores/timerStore';
import { useEffect } from 'react';
import { stopAlarm, setOnStopCallback } from '@/lib/alarm';

export default function Home() {
  useTimer();
  useAlarm();
  useWakeLock();
  useServiceWorker();

  const timers = useTimerStore((state) => state.timers);
  const alarmPlaying = useTimerStore((state) => state.alarmPlaying);
  const setAlarmPlaying = useTimerStore((state) => state.setAlarmPlaying);

  // 60秒自動停止時にもストアを更新
  useEffect(() => {
    setOnStopCallback(() => setAlarmPlaying(false));
    return () => setOnStopCallback(null);
  }, [setAlarmPlaying]);

  const handleStopAlarm = () => {
    stopAlarm();
    setAlarmPlaying(false);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <main className="max-w-lg mx-auto px-4 pb-20">
        <Header />

        <div className="space-y-6">
          {timers.length > 0 && (
            <section aria-label="実行中のタイマー">
              <TimerList />
            </section>
          )}

          <section>
            <h2 className="text-lg font-bold text-stone-700 mb-3">
              食材の茹で時間プリセット
            </h2>
            <p className="text-sm text-stone-500 mb-3">
              パスタ・卵・野菜など50種類以上の食材から選ぶだけで最適な茹で時間をセットできます
            </p>
            <PresetSelector />
          </section>

          <section>
            <h2 className="text-lg font-bold text-stone-700 mb-3">
              カスタムタイマーを設定する
            </h2>
            <CustomTimerForm />
          </section>

          <section>
            <ShareButtons />
          </section>

          <section>
            <NotificationGuide />
          </section>
        </div>

        <footer className="mt-8 pt-6 border-t border-amber-200">
          <h2 className="text-sm font-bold text-stone-600 mb-2">茹で時間ガイド</h2>
          <p className="text-xs text-stone-400 leading-relaxed">
            「何分茹でる？タイマー」は、パスタ・ゆで卵・ブロッコリー・そうめん・うどんなど
            50種類以上の食材の最適な茹で時間をプリセットから選ぶだけで計れる無料Webタイマーです。
            半熟卵は7分30秒、固ゆで卵は12分、スパゲッティ標準は7分など、食材ごとの茹で加減を
            調理のコツと一緒にご案内します。スマートフォン対応・通知機能付きで、キッチンでの
            料理をサポートします。
          </p>
          <p className="text-xs text-stone-400 mt-2">
            &copy; 2026 yudejikan.net
          </p>
        </footer>
      </main>

      {/* グローバルアラーム停止ボタン（画面下部固定） */}
      {alarmPlaying && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-red-500 to-red-400" style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom))' }}>
          <button
            type="button"
            onClick={handleStopAlarm}
            className="w-full max-w-lg mx-auto block bg-white text-red-600 py-4 rounded-2xl text-xl font-bold shadow-lg animate-pulse active:scale-95 transition-transform"
          >
            🔔 アラームを止める
          </button>
        </div>
      )}
    </div>
  );
}
