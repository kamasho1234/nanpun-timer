'use client';

import React from 'react';

interface FoodIconProps {
  foodId: string;
  size?: number;
  className?: string;
}

function getIconKey(foodId: string): string {
  const mapping: Record<string, string> = {
    // 卵系
    'egg-soft': 'egg',
    'egg-medium': 'egg',
    'egg-hard': 'egg',
    'quail-egg': 'egg',
    // パスタ系
    'spaghetti-thin': 'spaghetti',
    'spaghetti-standard': 'spaghetti',
    'spaghetti-thick': 'spaghetti',
    'macaroni': 'short-pasta',
    'penne': 'short-pasta',
    'fusilli': 'short-pasta',
    // 和麺系（個別アイコン）
    'udon-frozen': 'udon',
    'udon-dried': 'udon',
    'soba-dried': 'soba',
    'somen': 'somen',
    'hiyamugi': 'somen',
    'chinese-noodle-fresh': 'ramen',
    'instant-ramen': 'instant-ramen',
    'harusame': 'harusame',
    // 肉系
    'shabu-pork': 'sliced-meat',
    'shabu-beef': 'sliced-meat',
    'salad-chicken': 'chicken',
    'chicken-sasami': 'chicken',
    // 海鮮系
    'shrimp': 'shrimp',
    'octopus': 'octopus',
    'crab-shabu': 'crab',
    'squid-rings': 'squid',
    // 野菜系
    'broccoli': 'broccoli',
    'edamame': 'edamame',
    'spinach': 'leafy-green',
    'komatsuna': 'leafy-green',
    'corn': 'corn',
    'asparagus': 'asparagus',
    'moyashi': 'moyashi',
    'okra': 'okra',
    'potato-whole': 'potato',
    'sweet-potato-sliced': 'sweet-potato',
    'pumpkin': 'kabocha',
    'carrot': 'carrot',
    'daikon': 'daikon',
    'cabbage': 'cabbage',
    'snap-peas': 'edamame',
    'takenoko': 'takenoko',
    'renkon': 'renkon',
    'gobo': 'gobo',
    // 豆・乾物
    'daizu': 'beans',
    'azuki': 'beans',
    'kiriboshi-daikon': 'daikon',
    // その他
    'gyoza-frozen': 'gyoza',
    'konnyaku': 'konnyaku',
    'wonton': 'gyoza',
  };
  return mapping[foodId] ?? 'default';
}

// ─── SVG アイコン定義 ───

function EggIcon() {
  return (
    <>
      {/* 卵の影 */}
      <ellipse cx="32" cy="38" rx="18" ry="20" fill="#E8DDD0" />
      {/* 白身（卵の外形） */}
      <ellipse cx="32" cy="36" rx="17" ry="20" fill="#F5F0E8" />
      {/* 割れた断面の黄身 */}
      <ellipse cx="32" cy="34" rx="10" ry="10" fill="#FFD54F" />
      <ellipse cx="32" cy="32" rx="7" ry="7" fill="#FFB800" />
    </>
  );
}

function SpaghettiIcon() {
  return (
    <>
      {/* 皿 */}
      <ellipse cx="32" cy="48" rx="26" ry="8" fill="#E0E0E0" />
      <ellipse cx="32" cy="46" rx="26" ry="8" fill="#F5F5F5" />
      {/* 麺の山 */}
      <ellipse cx="32" cy="36" rx="18" ry="14" fill="#F5D990" />
      {/* 麺の巻き */}
      <path d="M24 30 Q28 20 32 30 Q36 40 40 30" stroke="#E8C860" strokeWidth="2.5" fill="none" />
      <path d="M20 34 Q26 24 32 34 Q38 44 44 34" stroke="#E8C860" strokeWidth="2" fill="none" />
      {/* ソースの点 */}
      <circle cx="30" cy="32" r="3" fill="#D32F2F" opacity="0.7" />
      <circle cx="36" cy="36" r="2" fill="#D32F2F" opacity="0.5" />
    </>
  );
}

function ShortPastaIcon() {
  return (
    <>
      {/* 皿 */}
      <ellipse cx="32" cy="48" rx="24" ry="7" fill="#E0E0E0" />
      <ellipse cx="32" cy="46" rx="24" ry="7" fill="#F5F5F5" />
      {/* ペンネ/マカロニ風の筒状パスタ */}
      <rect x="20" y="30" width="8" height="14" rx="3" fill="#F5D990" transform="rotate(-15 24 37)" />
      <rect x="30" y="28" width="8" height="14" rx="3" fill="#EDCC78" transform="rotate(10 34 35)" />
      <rect x="38" y="32" width="8" height="14" rx="3" fill="#F5D990" transform="rotate(-5 42 39)" />
      <rect x="24" y="36" width="7" height="12" rx="3" fill="#EDCC78" transform="rotate(20 28 42)" />
    </>
  );
}

function UdonIcon() {
  return (
    <>
      {/* 丼 */}
      <path d="M8 32 Q8 54 32 54 Q56 54 56 32 Z" fill="#5D4037" />
      <path d="M10 32 Q10 52 32 52 Q54 52 54 32 Z" fill="#6D4C41" />
      {/* 太い白い麺 */}
      <path d="M16 28 Q22 20 28 28 Q34 36 40 28 Q46 20 50 28" stroke="#F5F5DC" strokeWidth="4.5" fill="none" strokeLinecap="round" />
      <path d="M14 36 Q20 28 26 36 Q32 44 38 36 Q44 28 48 36" stroke="#F5F5DC" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* つゆの色 */}
      <ellipse cx="32" cy="44" rx="18" ry="6" fill="#8D6E63" opacity="0.3" />
    </>
  );
}

function SobaIcon() {
  return (
    <>
      {/* ざる */}
      <ellipse cx="32" cy="46" rx="26" ry="8" fill="#A1887F" />
      <ellipse cx="32" cy="44" rx="26" ry="8" fill="#BCAAA4" />
      {/* ざるの網目 */}
      <line x1="12" y1="44" x2="52" y2="44" stroke="#8D6E63" strokeWidth="0.5" />
      <line x1="14" y1="40" x2="50" y2="40" stroke="#8D6E63" strokeWidth="0.5" />
      {/* 茶色い細麺（そば） */}
      <path d="M20 26 Q24 18 28 26 Q32 34 36 26 Q40 18 44 26" stroke="#795548" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M18 32 Q22 24 26 32 Q30 40 34 32 Q38 24 42 32" stroke="#6D4C41" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M22 38 Q26 30 30 38 Q34 46 38 38 Q42 30 46 38" stroke="#795548" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  );
}

function SomenIcon() {
  return (
    <>
      {/* ガラスの器 */}
      <path d="M10 30 Q10 52 32 52 Q54 52 54 30 Z" fill="#B3E5FC" opacity="0.5" />
      <path d="M12 30 Q12 50 32 50 Q52 50 52 30 Z" fill="#E1F5FE" opacity="0.6" />
      {/* 極細の白い麺 */}
      <path d="M18 24 Q22 18 26 24 Q30 30 34 24 Q38 18 42 24 Q46 30 48 24" stroke="#FAFAFA" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M16 28 Q20 22 24 28 Q28 34 32 28 Q36 22 40 28 Q44 34 46 28" stroke="#F5F5F5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M18 32 Q22 26 26 32 Q30 38 34 32 Q38 26 42 32 Q46 38 48 32" stroke="#FAFAFA" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M16 36 Q20 30 24 36 Q28 42 32 36 Q36 30 40 36 Q44 42 46 36" stroke="#F5F5F5" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* 氷 */}
      <rect x="38" y="34" width="8" height="8" rx="2" fill="#E3F2FD" opacity="0.7" transform="rotate(10 42 38)" />
    </>
  );
}

function RamenIcon() {
  return (
    <>
      {/* 丼（大きめ） */}
      <path d="M6 30 Q6 54 32 54 Q58 54 58 30 Z" fill="#D32F2F" />
      <path d="M8 30 Q8 52 32 52 Q56 52 56 30 Z" fill="#E53935" />
      {/* 黄色い中華麺 */}
      <path d="M14 28 Q20 20 26 28 Q32 36 38 28 Q44 20 50 28" stroke="#FFE082" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M12 34 Q18 26 24 34 Q30 42 36 34 Q42 26 48 34" stroke="#FFD54F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* スープ */}
      <ellipse cx="32" cy="44" rx="20" ry="6" fill="#A1887F" opacity="0.4" />
      {/* チャーシュー */}
      <circle cx="40" cy="26" r="6" fill="#FFCCBC" />
      <circle cx="40" cy="26" r="4" fill="#FFAB91" />
      {/* ネギ */}
      <circle cx="24" cy="24" r="2" fill="#66BB6A" />
      <circle cx="28" cy="22" r="1.5" fill="#4CAF50" />
    </>
  );
}

function InstantRamenIcon() {
  return (
    <>
      {/* カップ */}
      <path d="M14 22 L18 54 Q18 56 20 56 L44 56 Q46 56 46 54 L50 22 Z" fill="#FF7043" />
      <path d="M16 24 L20 52 L44 52 L48 24 Z" fill="#FF8A65" />
      {/* フタ */}
      <ellipse cx="32" cy="22" rx="20" ry="5" fill="#FFAB91" />
      <ellipse cx="32" cy="20" rx="18" ry="4" fill="#FFCCBC" />
      {/* ロゴ帯 */}
      <rect x="18" y="32" width="28" height="10" rx="1" fill="#FFEE58" opacity="0.8" />
      {/* 湯気 */}
      <path d="M26 14 Q24 10 26 6" stroke="#BDBDBD" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M32 12 Q30 8 32 4" stroke="#BDBDBD" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M38 14 Q36 10 38 6" stroke="#BDBDBD" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </>
  );
}

function HarusameIcon() {
  return (
    <>
      {/* ボウル */}
      <path d="M10 32 Q10 52 32 52 Q54 52 54 32 Z" fill="#ECEFF1" />
      <path d="M12 32 Q12 50 32 50 Q52 50 52 32 Z" fill="#F5F5F5" />
      {/* 透明感のある極細麺 */}
      <path d="M18 24 Q24 18 30 26 Q36 34 42 24 Q46 18 48 22" stroke="#E0E0E0" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M16 28 Q22 22 28 30 Q34 38 40 28 Q44 22 48 26" stroke="#EEEEEE" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M18 32 Q24 26 30 34 Q36 42 42 32 Q46 26 48 30" stroke="#E0E0E0" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M16 36 Q22 30 28 38 Q34 46 40 36 Q44 30 48 34" stroke="#EEEEEE" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M20 40 Q26 34 32 42 Q38 50 44 40" stroke="#E0E0E0" strokeWidth="1" fill="none" strokeLinecap="round" />
    </>
  );
}

function SlicedMeatIcon() {
  return (
    <>
      {/* 薄切り肉のスライス */}
      <path d="M12 28 Q16 20 40 22 Q52 24 52 32 Q50 38 28 40 Q12 38 12 28 Z" fill="#F8BBD0" />
      <path d="M14 30 Q18 24 38 26 Q48 28 48 34 Q46 38 28 38 Q14 36 14 30 Z" fill="#E91E63" opacity="0.3" />
      {/* 脂身のマーブル */}
      <path d="M20 28 Q26 26 32 28 Q36 30 30 32" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M28 32 Q34 30 40 32 Q44 34 38 36" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.6" />
      {/* 2枚目（少し下に） */}
      <path d="M16 36 Q20 30 42 32 Q52 34 52 40 Q48 46 30 46 Q14 44 16 36 Z" fill="#EF9A9A" />
    </>
  );
}

function ChickenIcon() {
  return (
    <>
      {/* 鶏肉の形 */}
      <path d="M14 24 Q12 20 20 16 Q32 12 44 18 Q52 24 50 36 Q48 48 36 50 Q24 52 16 44 Q12 36 14 24 Z" fill="#FFCCBC" />
      {/* 肉の質感ライン */}
      <path d="M20 24 Q30 20 40 26" stroke="#FFAB91" strokeWidth="1.5" fill="none" />
      <path d="M18 32 Q28 28 42 34" stroke="#FFAB91" strokeWidth="1.5" fill="none" />
      <path d="M22 40 Q32 36 40 42" stroke="#FFAB91" strokeWidth="1" fill="none" />
    </>
  );
}

function ShrimpIcon() {
  return (
    <>
      {/* エビの体（曲がった形） */}
      <path d="M44 16 Q50 20 48 28 Q46 36 40 42 Q34 46 28 44 Q24 42 24 38 Q24 34 28 30 Q32 26 36 24 Q40 22 44 16 Z" fill="#FF6D3A" />
      {/* 体の節 */}
      <path d="M42 22 Q36 26 32 30" stroke="#E65100" strokeWidth="1" fill="none" />
      <path d="M46 28 Q40 32 36 36" stroke="#E65100" strokeWidth="1" fill="none" />
      <path d="M44 34 Q38 38 34 42" stroke="#E65100" strokeWidth="1" fill="none" />
      {/* 尻尾 */}
      <path d="M26 44 Q20 48 16 50 Q14 48 18 44 Q22 40 26 44 Z" fill="#FFB088" />
      <path d="M26 44 Q22 52 18 54 Q16 52 20 48 Q24 44 26 44 Z" fill="#FFB088" />
    </>
  );
}

function OctopusIcon() {
  return (
    <>
      {/* 頭 */}
      <ellipse cx="32" cy="22" rx="14" ry="12" fill="#9C27B0" />
      <ellipse cx="32" cy="20" rx="12" ry="10" fill="#AB47BC" />
      {/* 目 */}
      <circle cx="27" cy="22" r="2.5" fill="#FFFFFF" />
      <circle cx="37" cy="22" r="2.5" fill="#FFFFFF" />
      <circle cx="27" cy="22" r="1.2" fill="#333" />
      <circle cx="37" cy="22" r="1.2" fill="#333" />
      {/* 足 */}
      <path d="M20 32 Q16 40 14 50 Q16 52 18 48 Q20 42 24 34" fill="#AB47BC" />
      <path d="M26 34 Q24 44 22 52 Q24 54 26 48 Q28 42 28 36" fill="#9C27B0" />
      <path d="M36 36 Q36 42 38 52 Q40 54 40 48 Q40 44 38 34" fill="#9C27B0" />
      <path d="M40 34 Q44 42 46 48 Q48 52 48 50 Q46 40 44 32" fill="#AB47BC" />
    </>
  );
}

function CrabIcon() {
  return (
    <>
      {/* カニ足 */}
      <path d="M10 30 Q6 24 4 18" stroke="#D32F2F" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M54 30 Q58 24 60 18" stroke="#D32F2F" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M14 36 Q8 34 4 30" stroke="#E53935" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <path d="M50 36 Q56 34 60 30" stroke="#E53935" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {/* 体 */}
      <ellipse cx="32" cy="36" rx="20" ry="14" fill="#D32F2F" />
      <ellipse cx="32" cy="34" rx="18" ry="12" fill="#E53935" />
      {/* 目 */}
      <circle cx="26" cy="28" r="3" fill="#FFFFFF" />
      <circle cx="38" cy="28" r="3" fill="#FFFFFF" />
      <circle cx="26" cy="28" r="1.5" fill="#333" />
      <circle cx="38" cy="28" r="1.5" fill="#333" />
      {/* ハサミ */}
      <ellipse cx="10" cy="16" rx="4" ry="3" fill="#D32F2F" transform="rotate(-20 10 16)" />
      <ellipse cx="54" cy="16" rx="4" ry="3" fill="#D32F2F" transform="rotate(20 54 16)" />
    </>
  );
}

function SquidIcon() {
  return (
    <>
      {/* 体（三角形） */}
      <path d="M32 8 Q44 16 44 36 Q44 40 40 42 L24 42 Q20 40 20 36 Q20 16 32 8 Z" fill="#F5F0E8" />
      <path d="M32 12 Q42 18 42 34 Q42 38 38 40 L26 40 Q22 38 22 34 Q22 18 32 12 Z" fill="#EDE7D9" />
      {/* ヒレ */}
      <path d="M20 20 Q14 24 16 32 Q18 28 20 24" fill="#F5F0E8" />
      <path d="M44 20 Q50 24 48 32 Q46 28 44 24" fill="#F5F0E8" />
      {/* 足 */}
      <path d="M24 42 Q22 50 20 54" stroke="#EDE7D9" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M28 42 Q28 50 26 54" stroke="#EDE7D9" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M36 42 Q36 50 38 54" stroke="#EDE7D9" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M40 42 Q42 50 44 54" stroke="#EDE7D9" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  );
}

function BroccoliIcon() {
  return (
    <>
      {/* 茎 */}
      <rect x="28" y="40" width="8" height="14" rx="3" fill="#8B6D3F" />
      {/* 花蕾（モコモコの円） */}
      <circle cx="24" cy="32" r="10" fill="#388E3C" />
      <circle cx="40" cy="32" r="10" fill="#388E3C" />
      <circle cx="32" cy="24" r="11" fill="#4CAF50" />
      <circle cx="24" cy="28" r="8" fill="#4CAF50" />
      <circle cx="40" cy="28" r="8" fill="#4CAF50" />
      <circle cx="32" cy="20" r="7" fill="#66BB6A" />
    </>
  );
}

function EdamameIcon() {
  return (
    <>
      {/* さや1 */}
      <path d="M12 38 Q16 28 24 26 Q32 28 28 38 Q24 44 16 42 Z" fill="#66BB6A" />
      <path d="M14 36 Q18 30 24 28 Q28 30 26 36 Q24 40 18 40 Z" fill="#4CAF50" />
      {/* さや2 */}
      <path d="M30 34 Q36 22 44 22 Q52 26 48 36 Q42 42 34 40 Z" fill="#66BB6A" />
      <path d="M32 32 Q38 24 44 24 Q50 28 46 34 Q42 40 36 38 Z" fill="#4CAF50" />
      {/* 豆の膨らみ */}
      <circle cx="20" cy="34" r="4" fill="#81C784" opacity="0.6" />
      <circle cx="38" cy="28" r="4" fill="#81C784" opacity="0.6" />
      <circle cx="44" cy="30" r="3.5" fill="#81C784" opacity="0.6" />
    </>
  );
}

function LeafyGreenIcon() {
  return (
    <>
      {/* 茎 */}
      <path d="M32 56 Q30 44 28 36" stroke="#7CB342" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M32 56 Q34 44 36 36" stroke="#7CB342" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* 葉っぱ */}
      <path d="M28 36 Q16 28 14 16 Q20 12 28 18 Q32 22 28 36 Z" fill="#4CAF50" />
      <path d="M36 36 Q48 28 50 16 Q44 12 36 18 Q32 22 36 36 Z" fill="#66BB6A" />
      <path d="M30 30 Q26 18 32 10 Q38 18 34 30 Z" fill="#81C784" />
    </>
  );
}

function CornIcon() {
  return (
    <>
      {/* 皮 */}
      <path d="M18 50 Q14 42 16 30 Q18 24 20 22" stroke="#8BC34A" strokeWidth="3" fill="none" />
      <path d="M46 50 Q50 42 48 30 Q46 24 44 22" stroke="#8BC34A" strokeWidth="3" fill="none" />
      {/* とうもろこしの実 */}
      <path d="M22 14 Q20 14 20 20 L20 46 Q20 50 24 52 L40 52 Q44 50 44 46 L44 20 Q44 14 42 14 Z" fill="#FDD835" rx="4" />
      {/* 粒々の模様 */}
      <circle cx="26" cy="22" r="2.5" fill="#FFB300" />
      <circle cx="32" cy="22" r="2.5" fill="#FFB300" />
      <circle cx="38" cy="22" r="2.5" fill="#FFB300" />
      <circle cx="26" cy="30" r="2.5" fill="#FFC107" />
      <circle cx="32" cy="30" r="2.5" fill="#FFC107" />
      <circle cx="38" cy="30" r="2.5" fill="#FFC107" />
      <circle cx="26" cy="38" r="2.5" fill="#FFB300" />
      <circle cx="32" cy="38" r="2.5" fill="#FFB300" />
      <circle cx="38" cy="38" r="2.5" fill="#FFB300" />
      <circle cx="26" cy="46" r="2.5" fill="#FFC107" />
      <circle cx="32" cy="46" r="2.5" fill="#FFC107" />
      <circle cx="38" cy="46" r="2.5" fill="#FFC107" />
      {/* ひげ */}
      <path d="M30 14 Q28 8 24 6" stroke="#8D6E63" strokeWidth="1" fill="none" />
      <path d="M34 14 Q36 8 40 6" stroke="#8D6E63" strokeWidth="1" fill="none" />
    </>
  );
}

function AsparagusIcon() {
  return (
    <>
      {/* 茎 */}
      <rect x="29" y="20" width="6" height="36" rx="3" fill="#7CB342" />
      {/* 穂先 */}
      <path d="M32 8 Q36 14 36 20 L28 20 Q28 14 32 8 Z" fill="#558B2F" />
      <path d="M32 10 Q34 14 34 18 L30 18 Q30 14 32 10 Z" fill="#689F38" />
      {/* はかま */}
      <path d="M29 30 Q24 28 22 26" stroke="#8BC34A" strokeWidth="2" fill="none" />
      <path d="M35 38 Q40 36 42 34" stroke="#8BC34A" strokeWidth="2" fill="none" />
      <path d="M29 46 Q24 44 22 42" stroke="#8BC34A" strokeWidth="2" fill="none" />
    </>
  );
}

function MoyashiIcon() {
  return (
    <>
      {/* もやしの線 */}
      <path d="M20 16 Q22 28 24 44 Q24 48 26 50" stroke="#F5F0E0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M28 12 Q30 26 28 40 Q28 46 30 50" stroke="#EEEAD8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M36 14 Q34 28 36 42 Q36 48 34 52" stroke="#F5F0E0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M44 18 Q42 30 40 44 Q40 48 38 50" stroke="#EEEAD8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* 豆の部分（上） */}
      <ellipse cx="20" cy="14" rx="3" ry="2" fill="#C8E6C9" />
      <ellipse cx="28" cy="10" rx="3" ry="2" fill="#C8E6C9" />
      <ellipse cx="36" cy="12" rx="3" ry="2" fill="#C8E6C9" />
      <ellipse cx="44" cy="16" rx="3" ry="2" fill="#C8E6C9" />
    </>
  );
}

function OkraIcon() {
  return (
    <>
      {/* 本体 */}
      <path d="M32 10 Q36 12 38 18 L40 44 Q40 52 32 54 Q24 52 24 44 L26 18 Q28 12 32 10 Z" fill="#689F38" />
      <path d="M32 12 Q34 14 36 18 L38 44 Q38 50 32 52 Q26 50 26 44 L28 18 Q30 14 32 12 Z" fill="#7CB342" />
      {/* ヘタ */}
      <rect x="30" y="6" width="4" height="6" rx="1" fill="#558B2F" />
      {/* 星型断面のライン */}
      <line x1="32" y1="20" x2="32" y2="48" stroke="#8BC34A" strokeWidth="0.8" />
      <line x1="28" y1="22" x2="28" y2="46" stroke="#8BC34A" strokeWidth="0.5" />
      <line x1="36" y1="22" x2="36" y2="46" stroke="#8BC34A" strokeWidth="0.5" />
    </>
  );
}

function PotatoIcon() {
  return (
    <>
      {/* じゃがいもの形 */}
      <ellipse cx="32" cy="36" rx="20" ry="16" fill="#D7A86E" />
      <ellipse cx="32" cy="34" rx="18" ry="14" fill="#DEB887" />
      {/* 芽の窪み */}
      <circle cx="24" cy="30" r="1.5" fill="#C49A5C" />
      <circle cx="38" cy="32" r="1.5" fill="#C49A5C" />
      <circle cx="30" cy="38" r="1.2" fill="#C49A5C" />
    </>
  );
}

function SweetPotatoIcon() {
  return (
    <>
      {/* さつまいもの形 */}
      <path d="M14 34 Q12 26 20 22 Q32 18 46 24 Q54 30 52 38 Q48 46 36 48 Q20 48 14 34 Z" fill="#7B1FA2" />
      <path d="M16 34 Q14 28 22 24 Q32 20 44 26 Q52 30 50 36 Q46 44 36 46 Q22 46 16 34 Z" fill="#9C27B0" />
      {/* 断面の黄色 */}
      <ellipse cx="32" cy="34" rx="10" ry="8" fill="#FFE082" />
      <ellipse cx="32" cy="34" rx="7" ry="5.5" fill="#FFCA28" />
    </>
  );
}

function KabochaIcon() {
  return (
    <>
      {/* かぼちゃの体 */}
      <ellipse cx="32" cy="38" rx="22" ry="18" fill="#E65100" />
      {/* 溝 */}
      <path d="M32 20 Q32 38 32 56" stroke="#BF360C" strokeWidth="1.5" fill="none" />
      <path d="M18 24 Q18 38 22 52" stroke="#BF360C" strokeWidth="1" fill="none" />
      <path d="M46 24 Q46 38 42 52" stroke="#BF360C" strokeWidth="1" fill="none" />
      {/* 上面のハイライト */}
      <ellipse cx="32" cy="34" rx="20" ry="16" fill="#EF6C00" />
      {/* ヘタ */}
      <rect x="30" y="16" width="4" height="6" rx="2" fill="#558B2F" />
    </>
  );
}

function CarrotIcon() {
  return (
    <>
      {/* 本体（丸みを帯びた三角） */}
      <path d="M32 56 Q28 56 24 44 L20 30 Q22 14 32 12 Q42 14 44 30 L40 44 Q36 56 32 56 Z" fill="#FF8A00" />
      <path d="M32 54 Q30 54 26 44 L22 30 Q24 16 32 14 Q40 16 42 30 L38 44 Q34 54 32 54 Z" fill="#FFA040" />
      {/* 横線 */}
      <path d="M26 28 Q32 26 38 28" stroke="#FF7000" strokeWidth="1" fill="none" />
      <path d="M24 36 Q32 34 40 36" stroke="#FF7000" strokeWidth="1" fill="none" />
      <path d="M26 44 Q32 42 38 44" stroke="#FF7000" strokeWidth="1" fill="none" />
      {/* 葉っぱ */}
      <path d="M32 12 Q28 6 24 4 Q28 2 32 6 Z" fill="#4CAF50" />
      <path d="M32 12 Q32 4 32 2 Q34 2 34 6 Z" fill="#66BB6A" />
      <path d="M32 12 Q36 6 40 4 Q36 2 32 6 Z" fill="#4CAF50" />
    </>
  );
}

function DaikonIcon() {
  return (
    <>
      {/* 大根の体 */}
      <path d="M26 52 Q24 52 24 44 L24 22 Q24 14 32 12 Q40 14 40 22 L40 44 Q40 52 38 52 Z" fill="#F5F5F5" />
      <path d="M28 50 Q26 50 26 44 L26 22 Q26 16 32 14 Q38 16 38 22 L38 44 Q38 50 36 50 Z" fill="#FAFAFA" />
      {/* 葉っぱ */}
      <path d="M32 12 Q26 4 22 2" stroke="#4CAF50" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M32 12 Q32 2 34 0" stroke="#66BB6A" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M32 12 Q38 4 42 2" stroke="#4CAF50" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* 根っこのライン */}
      <path d="M30 48 Q32 54 32 56" stroke="#E0E0E0" strokeWidth="1" fill="none" />
    </>
  );
}

function CabbageIcon() {
  return (
    <>
      {/* 外葉 */}
      <circle cx="32" cy="34" r="22" fill="#66BB6A" />
      <circle cx="32" cy="32" r="20" fill="#81C784" />
      {/* 葉脈 */}
      <path d="M32 16 Q32 28 32 48" stroke="#A5D6A7" strokeWidth="1.5" fill="none" />
      <path d="M20 22 Q28 32 24 44" stroke="#A5D6A7" strokeWidth="1" fill="none" />
      <path d="M44 22 Q36 32 40 44" stroke="#A5D6A7" strokeWidth="1" fill="none" />
      {/* 芯 */}
      <circle cx="32" cy="30" r="6" fill="#C8E6C9" />
      <circle cx="32" cy="30" r="3" fill="#E8F5E9" />
    </>
  );
}

function TakenokoIcon() {
  return (
    <>
      {/* たけのこの皮付き本体 */}
      <path d="M32 8 Q38 16 42 28 Q44 40 42 52 L22 52 Q20 40 22 28 Q26 16 32 8 Z" fill="#A1887F" />
      <path d="M32 10 Q36 18 40 28 Q42 40 40 50 L24 50 Q22 40 24 28 Q28 18 32 10 Z" fill="#BCAAA4" />
      {/* 皮の横線 */}
      <path d="M26 22 Q32 20 38 22" stroke="#8D6E63" strokeWidth="1.5" fill="none" />
      <path d="M24 30 Q32 28 40 30" stroke="#8D6E63" strokeWidth="1.5" fill="none" />
      <path d="M23 38 Q32 36 41 38" stroke="#8D6E63" strokeWidth="1.5" fill="none" />
      <path d="M22 46 Q32 44 42 46" stroke="#8D6E63" strokeWidth="1.5" fill="none" />
      {/* 先端 */}
      <path d="M32 8 Q30 4 28 6" stroke="#8BC34A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M32 8 Q34 4 36 6" stroke="#8BC34A" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  );
}

function RenkonIcon() {
  return (
    <>
      {/* 輪切りの外周 */}
      <circle cx="32" cy="32" r="22" fill="#E0D6C8" />
      <circle cx="32" cy="32" r="20" fill="#F5F0E8" />
      {/* 穴 */}
      <circle cx="32" cy="22" r="4" fill="#E0D6C8" />
      <circle cx="40" cy="27" r="4" fill="#E0D6C8" />
      <circle cx="40" cy="37" r="4" fill="#E0D6C8" />
      <circle cx="32" cy="42" r="4" fill="#E0D6C8" />
      <circle cx="24" cy="37" r="4" fill="#E0D6C8" />
      <circle cx="24" cy="27" r="4" fill="#E0D6C8" />
      {/* 中心の穴 */}
      <circle cx="32" cy="32" r="3" fill="#E0D6C8" />
    </>
  );
}

function GoboIcon() {
  return (
    <>
      {/* ごぼう1本目 */}
      <rect x="18" y="8" width="7" height="50" rx="3.5" fill="#795548" transform="rotate(-8 22 32)" />
      <rect x="20" y="10" width="5" height="46" rx="2.5" fill="#8D6E63" transform="rotate(-8 22 32)" />
      {/* ごぼう2本目 */}
      <rect x="34" y="10" width="7" height="48" rx="3.5" fill="#6D4C41" transform="rotate(5 38 34)" />
      <rect x="36" y="12" width="5" height="44" rx="2.5" fill="#795548" transform="rotate(5 38 34)" />
      {/* 根のヒゲ */}
      <path d="M20 54 Q18 58 16 60" stroke="#8D6E63" strokeWidth="1" fill="none" />
      <path d="M40 56 Q42 58 44 60" stroke="#795548" strokeWidth="1" fill="none" />
    </>
  );
}

function BeansIcon() {
  return (
    <>
      {/* 豆粒1 */}
      <ellipse cx="22" cy="28" rx="8" ry="7" fill="#FDD835" />
      <ellipse cx="22" cy="27" rx="7" ry="6" fill="#FFEE58" />
      {/* 豆粒2 */}
      <ellipse cx="42" cy="26" rx="8" ry="7" fill="#FFB74D" />
      <ellipse cx="42" cy="25" rx="7" ry="6" fill="#FFCC80" />
      {/* 豆粒3 */}
      <ellipse cx="30" cy="42" rx="8" ry="7" fill="#FDD835" />
      <ellipse cx="30" cy="41" rx="7" ry="6" fill="#FFEE58" />
      {/* 豆の線 */}
      <path d="M18 28 Q22 24 26 28" stroke="#F9A825" strokeWidth="0.8" fill="none" />
      <path d="M38 26 Q42 22 46 26" stroke="#EF6C00" strokeWidth="0.8" fill="none" />
      <path d="M26 42 Q30 38 34 42" stroke="#F9A825" strokeWidth="0.8" fill="none" />
    </>
  );
}

function GyozaIcon() {
  return (
    <>
      {/* 餃子の皮（三日月形） */}
      <path d="M10 36 Q32 8 54 36 Q32 48 10 36 Z" fill="#FFECB3" />
      <path d="M12 36 Q32 12 52 36 Q32 46 12 36 Z" fill="#FFE082" />
      {/* ひだ */}
      <path d="M18 28 Q20 24 22 28" stroke="#FFB74D" strokeWidth="1.5" fill="none" />
      <path d="M26 22 Q28 18 30 22" stroke="#FFB74D" strokeWidth="1.5" fill="none" />
      <path d="M34 22 Q36 18 38 22" stroke="#FFB74D" strokeWidth="1.5" fill="none" />
      <path d="M42 28 Q44 24 46 28" stroke="#FFB74D" strokeWidth="1.5" fill="none" />
      {/* 焼き色 */}
      <path d="M14 36 Q32 44 50 36" stroke="#E8A735" strokeWidth="2" fill="none" />
    </>
  );
}

function KonnyakuIcon() {
  return (
    <>
      {/* こんにゃくブロック */}
      <rect x="12" y="18" width="40" height="32" rx="4" fill="#9E9E9E" />
      <rect x="14" y="20" width="36" height="28" rx="3" fill="#BDBDBD" />
      {/* 粒々の模様 */}
      <circle cx="22" cy="28" r="1" fill="#9E9E9E" />
      <circle cx="30" cy="32" r="1" fill="#9E9E9E" />
      <circle cx="38" cy="26" r="1" fill="#9E9E9E" />
      <circle cx="26" cy="38" r="1" fill="#9E9E9E" />
      <circle cx="42" cy="36" r="1" fill="#9E9E9E" />
      <circle cx="34" cy="42" r="1" fill="#9E9E9E" />
      <circle cx="20" cy="34" r="0.8" fill="#9E9E9E" />
    </>
  );
}

function DefaultIcon() {
  return (
    <>
      {/* お皿 */}
      <ellipse cx="32" cy="46" rx="26" ry="8" fill="#E0E0E0" />
      <ellipse cx="32" cy="44" rx="26" ry="8" fill="#EEEEEE" />
      <ellipse cx="32" cy="44" rx="20" ry="5" fill="#F5F5F5" />
      {/* 湯気 */}
      <path d="M24 28 Q22 22 24 16" stroke="#BDBDBD" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M32 26 Q30 20 32 14" stroke="#BDBDBD" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M40 28 Q38 22 40 16" stroke="#BDBDBD" strokeWidth="2" fill="none" strokeLinecap="round" />
    </>
  );
}

const ICON_MAP: Record<string, () => React.JSX.Element> = {
  'egg': EggIcon,
  'spaghetti': SpaghettiIcon,
  'short-pasta': ShortPastaIcon,
  'udon': UdonIcon,
  'soba': SobaIcon,
  'somen': SomenIcon,
  'ramen': RamenIcon,
  'instant-ramen': InstantRamenIcon,
  'harusame': HarusameIcon,
  'sliced-meat': SlicedMeatIcon,
  'chicken': ChickenIcon,
  'shrimp': ShrimpIcon,
  'octopus': OctopusIcon,
  'crab': CrabIcon,
  'squid': SquidIcon,
  'broccoli': BroccoliIcon,
  'edamame': EdamameIcon,
  'leafy-green': LeafyGreenIcon,
  'corn': CornIcon,
  'asparagus': AsparagusIcon,
  'moyashi': MoyashiIcon,
  'okra': OkraIcon,
  'potato': PotatoIcon,
  'sweet-potato': SweetPotatoIcon,
  'kabocha': KabochaIcon,
  'carrot': CarrotIcon,
  'daikon': DaikonIcon,
  'cabbage': CabbageIcon,
  'takenoko': TakenokoIcon,
  'renkon': RenkonIcon,
  'gobo': GoboIcon,
  'beans': BeansIcon,
  'gyoza': GyozaIcon,
  'konnyaku': KonnyakuIcon,
  'default': DefaultIcon,
};

export function FoodIcon({ foodId, size = 48, className }: FoodIconProps) {
  const iconKey = getIconKey(foodId);
  const IconComponent = ICON_MAP[iconKey] ?? ICON_MAP['default'];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label={foodId}
    >
      <IconComponent />
    </svg>
  );
}

export default FoodIcon;
