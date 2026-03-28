export type TimerStatus = 'idle' | 'running' | 'paused' | 'completed';

export interface Timer {
  id: string;
  label: string;
  icon: string;
  presetId: string;
  totalSeconds: number;
  remainingSeconds: number;
  status: TimerStatus;
  startedAt: number | null;
  pausedRemaining: number | null;
}

export interface Preset {
  id: string;
  category: 'pasta' | 'egg' | 'vegetable' | 'noodle' | 'seafood' | 'meat' | 'bean' | 'other';
  label: string;
  seconds: number;
  icon: string;
  tip?: string;
}

export type PresetCategory = Preset['category'];
