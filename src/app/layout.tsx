import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://yudejikan.net";
const SITE_TITLE = "茹で時間タイマー｜何分茹でる？パスタ・卵・野菜の茹で時間がすぐわかる";
const SITE_DESCRIPTION =
  "パスタ・ゆで卵・ブロッコリー・そうめんなど50種類以上の食材の茹で時間がワンタップでわかる無料Webタイマー。半熟卵7分30秒、パスタ標準7分など最適な茹で加減をプリセットから選ぶだけ。スマホ対応・通知機能付き。";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  manifest: "/manifest.json",
  verification: {
    google: "foZEamqMV21x3Q_PI1kCMPyRg7cMjoHLreJbP6QW5Yk",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/icons/icon-192.png",
  },
  keywords: [
    "茹で時間",
    "何分茹でる",
    "茹でタイマー",
    "料理タイマー",
    "パスタ 茹で時間",
    "ゆで卵 何分",
    "ブロッコリー 茹で時間",
    "そうめん 茹で時間",
    "枝豆 茹で時間",
    "うどん 茹で時間",
    "そば 茹で時間",
    "とうもろこし 茹で時間",
    "アスパラガス 茹で時間",
    "ほうれん草 茹で時間",
    "茹で加減",
    "半熟卵",
    "固ゆで卵",
    "アルデンテ",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "何分茹でる？タイマー",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#f97316",
  viewportFit: "cover",
};

/* ---------- 構造化データ (JSON-LD) ---------- */

const jsonLdWebApp = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "何分茹でる？タイマー",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  browserRequirements: "Requires JavaScript",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
  },
  inLanguage: "ja",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "パスタ（スパゲッティ）の茹で時間は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "細麺（1.4mm）は5分、標準（1.6〜1.7mm）は7分、太麺（1.9mm以上）は9分が目安です。アルデンテにしたい場合は表示時間の30秒〜1分前にあげましょう。塩はお湯の約1%が目安です。",
      },
    },
    {
      "@type": "Question",
      name: "ゆで卵は何分茹でればいい？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "沸騰したお湯からスタートして、トロトロ半熟は6分30秒、半熟は7分30秒、固ゆでは12分が目安です。茹で上がったらすぐ氷水に入れると殻がむきやすくなります。",
      },
    },
    {
      "@type": "Question",
      name: "ブロッコリーの茹で時間は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "小房に分けて塩少々を入れたお湯で約2分です。歯ごたえを残したい場合は1分半がおすすめ。茹ですぎると栄養素が流出するので注意しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "そうめんの茹で時間は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "約1分30秒が目安です。吹きこぼれに注意し、差し水で温度調整しましょう。茹で上がったら冷水でしっかりしめるとコシが出ます。",
      },
    },
    {
      "@type": "Question",
      name: "枝豆の茹で時間は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "約4分が目安です。塩もみしてから茹でると色鮮やかに仕上がります。茹ですぎると食感が悪くなるので注意しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "うどん（乾麺）の茹で時間は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "乾麺うどんは約10分、冷凍うどんは凍ったまま沸騰したお湯に入れて約1分が目安です。差し水はせず火加減で調整しましょう。",
      },
    },
    {
      "@type": "Question",
      name: "とうもろこしの茹で時間は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "約4分が目安です。皮付きのまま茹でると甘みが逃げにくく、より美味しく仕上がります。",
      },
    },
    {
      "@type": "Question",
      name: "ほうれん草の茹で時間は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "約45秒が目安です。根元から先にお湯に入れて10秒後に葉を投入するのがコツ。茹でたらすぐ冷水にとってアク抜きしましょう。",
      },
    },
    {
      "@type": "Question",
      name: "じゃがいもの茹で時間は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "丸ごと茹でる場合は水から入れて約20分が目安です。竹串がスッと通ったら茹で上がりのサインです。",
      },
    },
    {
      "@type": "Question",
      name: "マカロニ・ペンネの茹で時間は？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "マカロニは約10分、ペンネは約11分が目安です。グラタンに使う場合は1分短めに茹でましょう。アルデンテにするなら表示時間の1分前にあげるのがおすすめです。",
      },
    },
  ],
};

const jsonLdHowTo = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "茹で時間タイマーの使い方",
  description: "食材を選んでタイマーをセットするだけ",
  step: [
    { "@type": "HowToStep", text: "食材カテゴリ（卵・パスタ・野菜など）を選ぶ" },
    { "@type": "HowToStep", text: "茹でたい食材をタップする" },
    { "@type": "HowToStep", text: "茹で時間とコツを確認して「タイマー開始」を押す" },
    { "@type": "HowToStep", text: "タイマー完了で音と通知でお知らせ" },
  ],
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "茹で時間タイマー",
      item: SITE_URL,
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebApp) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdHowTo) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
        />
      </head>
      <body className="min-h-screen">
        {children}

        {/* noscript: 検索エンジンクローラー・JS無効環境向けフォールバック */}
        <noscript>
          <div style={{ padding: "2rem", fontFamily: "sans-serif", lineHeight: 1.8 }}>
            <h1>何分茹でる？タイマー - 食材別の茹で時間ガイド</h1>
            <p>このWebアプリは食材ごとの最適な茹で時間をタイマー付きで案内します。JavaScriptを有効にしてご利用ください。</p>

            <h2>パスタの茹で時間</h2>
            <ul>
              <li>スパゲッティ（細麺 1.4mm）：5分</li>
              <li>スパゲッティ（標準 1.6〜1.7mm）：7分</li>
              <li>スパゲッティ（太麺 1.9mm以上）：9分</li>
              <li>マカロニ：10分</li>
              <li>ペンネ：11分</li>
              <li>フジッリ：10分</li>
            </ul>

            <h2>ゆで卵の茹で時間</h2>
            <ul>
              <li>トロトロ半熟：6分30秒</li>
              <li>半熟：7分30秒</li>
              <li>固ゆで：12分</li>
              <li>うずらの卵：2分30秒</li>
            </ul>

            <h2>野菜の茹で時間</h2>
            <ul>
              <li>ブロッコリー：2分</li>
              <li>枝豆：4分</li>
              <li>ほうれん草：45秒</li>
              <li>とうもろこし：4分</li>
              <li>アスパラガス：1分30秒</li>
              <li>もやし：45秒</li>
              <li>じゃがいも（丸ごと）：20分</li>
              <li>にんじん（乱切り）：8分</li>
              <li>大根（輪切り）：15分</li>
              <li>小松菜：1分</li>
            </ul>

            <h2>和麺・中華麺の茹で時間</h2>
            <ul>
              <li>うどん（冷凍）：1分</li>
              <li>うどん（乾麺）：10分</li>
              <li>そば（乾麺）：5分</li>
              <li>そうめん：1分30秒</li>
              <li>ひやむぎ：3分30秒</li>
              <li>中華麺（生）：2分30秒</li>
              <li>インスタントラーメン：3分</li>
            </ul>

            <h2>肉・海鮮の茹で時間</h2>
            <ul>
              <li>しゃぶしゃぶ肉（豚）：20秒</li>
              <li>しゃぶしゃぶ肉（牛）：10秒</li>
              <li>鶏むね肉（サラダチキン・余熱調理）：60分</li>
              <li>エビ：2分</li>
              <li>タコ：3分</li>
            </ul>
          </div>
        </noscript>
      </body>
    </html>
  );
}
