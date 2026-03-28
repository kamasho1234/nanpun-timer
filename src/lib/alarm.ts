// Web Audio API でアラーム音を生成・再生するモジュール

let audioCtx: AudioContext | null = null;
let activeOscillators: OscillatorNode[] = [];
let alarmTimeouts: ReturnType<typeof setTimeout>[] = [];
let alarmIntervalId: ReturnType<typeof setInterval> | null = null;
let playing = false;
let onStopCallback: (() => void) | null = null;

export function setOnStopCallback(cb: (() => void) | null): void {
  onStopCallback = cb;
}

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  return audioCtx;
}

/**
 * ユーザー操作時に呼ぶ。AudioContext を生成 / resume する。
 */
export async function initAudio(): Promise<void> {
  const ctx = getAudioContext();
  if (ctx.state === 'suspended') {
    await ctx.resume();
  }
}

/**
 * ビープ1セット（ピピピ×3回）を再生する内部関数。
 */
async function playBeepSet(): Promise<void> {
  const ctx = getAudioContext();

  // モバイルではタイマー完了時にsuspendされていることがあるので必ずresumeを待つ
  if (ctx.state === 'suspended') {
    try {
      await ctx.resume();
    } catch {
      // resume失敗は無視
    }
  }

  // resumeしても再生不可な場合はスキップ
  if (ctx.state !== 'running') return;

  const FREQ = 880;
  const BEEP_ON = 0.15;
  const BEEP_OFF = 0.1;
  const BEEPS_PER_SET = 3;

  const beepCycle = BEEP_ON + BEEP_OFF;
  const now = ctx.currentTime;

  for (let b = 0; b < BEEPS_PER_SET; b++) {
    const beepStart = now + b * beepCycle;

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.value = FREQ;

    gain.gain.setValueAtTime(0, beepStart);
    gain.gain.linearRampToValueAtTime(0.5, beepStart + 0.01);
    gain.gain.setValueAtTime(0.5, beepStart + BEEP_ON - 0.01);
    gain.gain.linearRampToValueAtTime(0, beepStart + BEEP_ON);

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.start(beepStart);
    oscillator.stop(beepStart + BEEP_ON);

    activeOscillators.push(oscillator);
  }
}

/**
 * アラームを再生する。
 * ピピピ×3回を1セットとし、2秒間隔で繰り返し再生。
 * stopAlarm() が呼ばれるまで鳴り続ける。
 * 最大60秒で自動停止（止め忘れ防止）。
 */
export async function playAlarm(): Promise<void> {
  if (playing) return;
  playing = true;

  // 即座に1セット再生（awaitでresume完了を待つ）
  await playBeepSet();

  // 2秒間隔で繰り返し
  alarmIntervalId = setInterval(() => {
    playBeepSet();
  }, 2000);

  // 最大60秒で自動停止
  const autoStopTimeout = setTimeout(() => {
    stopAlarm();
  }, 60000);

  alarmTimeouts.push(autoStopTimeout);
}

/**
 * 再生中のアラームをすべて停止する。
 */
export function stopAlarm(): void {
  if (alarmIntervalId !== null) {
    clearInterval(alarmIntervalId);
    alarmIntervalId = null;
  }

  for (const osc of activeOscillators) {
    try {
      osc.stop();
    } catch {
      // already stopped
    }
  }
  for (const t of alarmTimeouts) {
    clearTimeout(t);
  }
  activeOscillators = [];
  alarmTimeouts = [];
  playing = false;
  if (onStopCallback) {
    onStopCallback();
  }
}

/**
 * アラームが再生中かどうかを返す。
 */
export function isPlaying(): boolean {
  return playing;
}
