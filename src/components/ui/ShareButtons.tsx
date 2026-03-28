'use client';

import { useState } from 'react';

const SITE_URL = 'https://yudejikan.com';
const SHARE_TITLE = '何分茹でる？タイマー';
const SHARE_TEXT =
  'パスタ・卵・野菜など50種類以上の茹で時間がワンタップでわかる無料タイマー！';

export default function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: SHARE_TITLE,
          text: SHARE_TEXT,
          url: SITE_URL,
        });
      } catch {
        // ユーザーがキャンセルした場合
      }
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(SITE_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // フォールバック
    }
  };

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    SHARE_TEXT
  )}&url=${encodeURIComponent(SITE_URL)}`;

  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
    SITE_URL
  )}`;

  const hasNativeShare = typeof navigator !== 'undefined' && 'share' in navigator;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <p className="text-sm font-bold text-stone-700 mb-3 text-center">
        友だちにシェアする
      </p>

      <div className="flex items-center justify-center gap-3">
        {/* X (Twitter) */}
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-black flex items-center justify-center hover:opacity-80 active:scale-95 transition-all"
          aria-label="Xでシェア"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>

        {/* LINE */}
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#06C755] flex items-center justify-center hover:opacity-80 active:scale-95 transition-all"
          aria-label="LINEでシェア"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
          </svg>
        </a>

        {/* スマホのネイティブ共有 or リンクコピー */}
        {hasNativeShare ? (
          <button
            type="button"
            onClick={handleNativeShare}
            className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center hover:opacity-80 active:scale-95 transition-all"
            aria-label="その他の方法でシェア"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" fill="none" strokeWidth="2" strokeLinecap="round" />
              <polyline points="16 6 12 2 8 6" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <line x1="12" y1="2" x2="12" y2="15" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleCopyLink}
            className={`w-12 h-12 rounded-full flex items-center justify-center active:scale-95 transition-all ${
              copied
                ? 'bg-green-500'
                : 'bg-gray-500 hover:opacity-80'
            }`}
            aria-label="リンクをコピー"
          >
            {copied ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
