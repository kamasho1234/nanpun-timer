export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-amber-100 to-amber-50">
      <div className="relative z-10 flex items-center justify-center gap-3 px-4 pt-4 pb-6">
        {/* 鍋SVG（小さめ） */}
        <svg
          viewBox="0 0 200 130"
          className="w-16 h-auto flex-shrink-0"
          aria-hidden="true"
        >
          {/* 湯気 */}
          <path d="M70 48 Q65 35 70 22 Q75 10 70 0" fill="none" stroke="#d4a574" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" className="steam steam-1" />
          <path d="M100 44 Q95 30 100 18 Q105 6 100 -4" fill="none" stroke="#d4a574" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" className="steam steam-2" />
          <path d="M130 48 Q125 35 130 22 Q135 10 130 0" fill="none" stroke="#d4a574" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" className="steam steam-3" />

          {/* 蓋ハンドル */}
          <ellipse cx="100" cy="48" rx="8" ry="4" fill="#b45309" />
          <rect x="97" y="48" width="6" height="6" rx="1" fill="#b45309" />

          {/* 蓋 */}
          <ellipse cx="100" cy="56" rx="52" ry="8" fill="#d97706" />
          <ellipse cx="100" cy="55" rx="48" ry="6" fill="#f59e0b" />

          {/* 鍋本体 */}
          <path d="M48 58 L48 90 Q48 108 100 108 Q152 108 152 90 L152 58 Z" fill="url(#potGradient)" />
          <path d="M54 62 L54 88 Q54 100 72 104" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3" strokeLinecap="round" />

          {/* 取っ手 */}
          <rect x="30" y="70" width="20" height="6" rx="3" fill="url(#handleGradient)" />
          <rect x="150" y="70" width="20" height="6" rx="3" fill="url(#handleGradient)" />

          {/* 泡 */}
          <circle cx="80" cy="57" r="3" fill="#fef3c7" opacity="0.7" className="bubble bubble-1" />
          <circle cx="110" cy="56" r="2.5" fill="#fef3c7" opacity="0.6" className="bubble bubble-2" />
          <circle cx="95" cy="58" r="2" fill="#fef3c7" opacity="0.5" className="bubble bubble-3" />

          <defs>
            <linearGradient id="potGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
            <linearGradient id="handleGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
          </defs>
        </svg>

        {/* タイトル（鍋の横） */}
        <div>
          <h1
            className="text-2xl font-extrabold tracking-tight leading-tight"
            style={{
              background: "linear-gradient(135deg, #ea580c, #f97316, #d97706)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            何分茹でる？
          </h1>
          <p className="text-xs text-stone-400 mt-0.5">
            食材を選んで、茹で時間をおまかせ
          </p>
        </div>
      </div>

      {/* 波形ボーダー */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="block w-full h-3">
          <path d="M0 20 Q150 0 300 20 Q450 40 600 20 Q750 0 900 20 Q1050 40 1200 20 L1200 40 L0 40 Z" fill="var(--color-bg)" />
        </svg>
      </div>
    </header>
  );
}
