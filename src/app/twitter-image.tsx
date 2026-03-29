import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '何分茹でる？タイマー - 50種類以上の食材の茹で時間がわかる';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)',
          position: 'relative',
        }}
      >
        {/* 鍋アイコン */}
        <div
          style={{
            fontSize: 100,
            marginBottom: 20,
            display: 'flex',
          }}
        >
          🍲
        </div>

        {/* タイトル */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 900,
            color: 'white',
            textShadow: '0 4px 12px rgba(0,0,0,0.2)',
            marginBottom: 16,
            display: 'flex',
          }}
        >
          何分茹でる？
        </div>

        {/* サブタイトル */}
        <div
          style={{
            fontSize: 36,
            color: 'rgba(255,255,255,0.9)',
            marginBottom: 32,
            display: 'flex',
          }}
        >
          パスタ・卵・野菜など50種類以上の茹で時間タイマー
        </div>

        {/* 食材アイコン */}
        <div
          style={{
            fontSize: 48,
            display: 'flex',
            gap: 24,
            marginBottom: 40,
          }}
        >
          <span>🍝</span>
          <span>🥚</span>
          <span>🥦</span>
          <span>🍜</span>
          <span>🦐</span>
          <span>🥩</span>
          <span>🌽</span>
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 32,
            right: 48,
            fontSize: 28,
            color: 'rgba(255,255,255,0.7)',
            display: 'flex',
          }}
        >
          yudejikan.net
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
