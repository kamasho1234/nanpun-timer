import { create } from 'zustand';
import { Timer } from '@/types/timer';

const MAX_TIMERS = 5;

interface TimerStore {
  timers: Timer[];
  alarmPlaying: boolean;
  setAlarmPlaying: (playing: boolean) => void;
  addTimer: (label: string, icon: string, seconds: number, presetId: string) => string;
  removeTimer: (id: string) => void;
  startTimer: (id: string) => void;
  pauseTimer: (id: string) => void;
  resetTimer: (id: string) => void;
  tick: (id: string) => void;
  extendTimer: (id: string, seconds: number) => void;
  clearCompleted: () => void;
}

export const useTimerStore = create<TimerStore>((set, get) => ({
  timers: [],
  alarmPlaying: false,
  setAlarmPlaying: (playing) => set({ alarmPlaying: playing }),

  addTimer: (label, icon, seconds, presetId) => {
    const { timers, startTimer } = get();
    if (timers.length >= MAX_TIMERS) {
      throw new Error(`最大${MAX_TIMERS}個までしか同時に設定できません`);
    }

    const id = crypto.randomUUID();
    const newTimer: Timer = {
      id,
      label,
      icon,
      presetId,
      totalSeconds: seconds,
      remainingSeconds: seconds,
      status: 'idle',
      startedAt: null,
      pausedRemaining: null,
    };

    set((state) => ({ timers: [...state.timers, newTimer] }));
    startTimer(id);
    return id;
  },

  removeTimer: (id) => {
    set((state) => ({
      timers: state.timers.filter((t) => t.id !== id),
    }));
  },

  startTimer: (id) => {
    set((state) => ({
      timers: state.timers.map((t) => {
        if (t.id !== id) return t;

        // pause からの復帰: pausedRemaining を基準に startedAt を逆算
        const remaining = t.pausedRemaining ?? t.remainingSeconds;
        return {
          ...t,
          status: 'running' as const,
          startedAt: Date.now() - (t.totalSeconds - remaining) * 1000,
          pausedRemaining: null,
        };
      }),
    }));
  },

  pauseTimer: (id) => {
    set((state) => ({
      timers: state.timers.map((t) => {
        if (t.id !== id || t.status !== 'running') return t;
        return {
          ...t,
          status: 'paused' as const,
          pausedRemaining: t.remainingSeconds,
          startedAt: null,
        };
      }),
    }));
  },

  resetTimer: (id) => {
    set((state) => ({
      timers: state.timers.map((t) => {
        if (t.id !== id) return t;
        return {
          ...t,
          status: 'idle' as const,
          remainingSeconds: t.totalSeconds,
          startedAt: null,
          pausedRemaining: null,
        };
      }),
    }));
  },

  tick: (id) => {
    set((state) => ({
      timers: state.timers.map((t) => {
        if (t.id !== id || t.status !== 'running' || t.startedAt === null) return t;

        const elapsed = (Date.now() - t.startedAt) / 1000;
        const remaining = Math.max(0, t.totalSeconds - elapsed);

        if (remaining <= 0) {
          return {
            ...t,
            remainingSeconds: 0,
            status: 'completed' as const,
            startedAt: null,
          };
        }

        return { ...t, remainingSeconds: remaining };
      }),
    }));
  },

  extendTimer: (id, seconds) => {
    const { startTimer } = get();
    set((state) => ({
      timers: state.timers.map((t) => {
        if (t.id !== id) return t;
        return {
          ...t,
          status: 'idle' as const,
          totalSeconds: seconds,
          remainingSeconds: seconds,
          startedAt: null,
          pausedRemaining: null,
        };
      }),
    }));
    startTimer(id);
  },

  clearCompleted: () => {
    set((state) => ({
      timers: state.timers.filter((t) => t.status !== 'completed'),
    }));
  },
}));
