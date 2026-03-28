'use client';

import { useState } from 'react';

export default function NotificationGuide() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <span className="text-sm font-bold text-stone-700">
          🔔 通知について
        </span>
        <svg
          className={`w-4 h-4 text-stone-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 space-y-4">
          {/* アプリを開いている間 */}
          <div>
            <h3 className="text-sm font-bold text-stone-700 mb-1">
              📱 アプリを開いている間
            </h3>
            <ul className="text-sm text-stone-600 space-y-0.5 pl-4 list-disc">
              <li>タイマー完了時に音と画面表示でお知らせします</li>
              <li>音はタップで止められます</li>
            </ul>
          </div>

          {/* アプリを閉じている間 */}
          <div>
            <h3 className="text-sm font-bold text-stone-700 mb-1">
              🔕 アプリを閉じている間・画面ロック中
            </h3>
            <ul className="text-sm text-stone-600 space-y-0.5 pl-4 list-disc">
              <li>プッシュ通知でお知らせします</li>
              <li>通知の「許可」が必要です</li>
            </ul>
          </div>

          {/* iPhoneユーザー向け */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <h3 className="text-sm font-bold text-blue-800 mb-1">
              🍎 iPhoneをお使いの方へ
            </h3>
            <div className="text-sm text-stone-600 space-y-1">
              <p>
                Safari単体では画面ロック中の通知に対応していません。
              </p>
              <p className="font-bold text-blue-700">
                「ホーム画面に追加」すると通知が届くようになります
              </p>
              <div className="mt-2 bg-white/60 rounded-md px-3 py-2 text-xs text-stone-500">
                <p className="font-semibold text-stone-600 mb-1">追加手順:</p>
                <p>
                  Safari下部の共有ボタン（
                  <span className="inline-block align-middle">□↑</span>
                  ）→「ホーム画面に追加」
                </p>
              </div>
            </div>
          </div>

          {/* Androidユーザー向け */}
          <div>
            <h3 className="text-sm font-bold text-stone-700 mb-1">
              🤖 Androidをお使いの方へ
            </h3>
            <ul className="text-sm text-stone-600 space-y-0.5 pl-4 list-disc">
              <li>Chrome/Edgeでそのままお使いいただけます</li>
              <li>通知を許可してください</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
