<template>
  <div class="quick-start-grid">
    <a v-for="card in cards" :key="card.title" :href="card.link" class="quick-start-card">
      <div class="card-icon">{{ card.icon }}</div>
      <div class="card-title">{{ card.title }}</div>
      <div class="card-desc">{{ card.desc }}</div>
    </a>
  </div>
</template>

<script setup>
const cards = [
  { icon: '🎣', title: '钓鱼入门', desc: '快速掌握钓鱼技巧', link: '/heartopia/guides/fishing/' },
  { icon: '🌾', title: '种植指南', desc: '作物季节与利润表', link: '/heartopia/guides/farming/' },
  { icon: '🍳', title: '烹饪食谱', desc: '解锁全部食谱', link: '/heartopia/guides/cooking/' },
  { icon: '🔨', title: '手工艺制作', desc: 'DIY 物品大全', link: '/heartopia/guides/crafting/' },
  { icon: '💰', title: '赚钱攻略', desc: '日入过万不是梦', link: '/heartopia/guides/money/' },
  { icon: '🎁', title: '每日兑换码', desc: '免费领取奖励', link: '/heartopia/codes/' },
  { icon: '🗺️', title: '互动地图', desc: '探索全地图资源', link: '/heartopia/map/' },
  { icon: '🏠', title: '家装设计', desc: '最美房屋装修方案', link: '/heartopia/house-designs/' },
]
</script>
