<template>
  <div class="database-grid">
    <a v-for="item in items" :key="item.title" :href="item.link" class="database-card">
      <div class="db-icon">{{ item.icon }}</div>
      <div class="db-title">{{ item.title }}</div>
      <div class="db-count">{{ item.count }} {{ t('common.entries') }}</div>
      <div class="db-desc">{{ item.desc }}</div>
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n'
const { t, locale } = useI18n()

const data = {
  en: [
    { icon: '🐟', title: 'Fish', count: 98, desc: 'All fish species with locations, seasons, times, and sell prices.', link: '/heartopia/wiki/fish/' },
    { icon: '🍽️', title: 'Recipes', count: '200+', desc: 'Complete cooking recipes with ingredients, energy values, and sell prices.', link: '/heartopia/wiki/recipes/' },
    { icon: '🧱', title: 'Materials', count: 150, desc: 'Wood, stone, ores, gems, and crafting materials with spawn locations.', link: '/heartopia/wiki/items/' },
    { icon: '🦗', title: 'Insects', count: 65, desc: 'Butterflies, beetles, moths, and rare bugs with catch conditions.', link: '/heartopia/wiki/items/' },
    { icon: '🐦', title: 'Birds', count: 45, desc: 'All bird species with habitats, active hours, and photo tips.', link: '/heartopia/wiki/items/' },
    { icon: '🔨', title: 'Crafting', count: '120+', desc: 'DIY recipes, furniture, tools, and decorations you can craft.', link: '/heartopia/wiki/recipes/' },
  ],
  zh: [
    { icon: '🐟', title: '鱼类', count: 98, desc: '所有鱼类及其位置、季节、时间和售价。', link: '/heartopia/wiki/fish/' },
    { icon: '🍽️', title: '食谱', count: '200+', desc: '完整烹饪食谱，含食材、体力值和售价。', link: '/heartopia/wiki/recipes/' },
    { icon: '🧱', title: '材料', count: 150, desc: '木材、石料、矿石、宝石和制作材料及产出地点。', link: '/heartopia/wiki/items/' },
    { icon: '🦗', title: '昆虫', count: 65, desc: '蝴蝶、甲虫、飞蛾和稀有昆虫及捕获条件。', link: '/heartopia/wiki/items/' },
    { icon: '🐦', title: '鸟类', count: 45, desc: '所有鸟类及其栖息地、活跃时间和拍摄技巧。', link: '/heartopia/wiki/items/' },
    { icon: '🔨', title: '制作', count: '120+', desc: '可制作的DIY配方、家具、工具和装饰品。', link: '/heartopia/wiki/recipes/' },
  ],
}

const items = computed(() => data[locale.value])
</script>
