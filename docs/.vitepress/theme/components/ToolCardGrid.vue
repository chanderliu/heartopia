<template>
  <div class="tool-cards-grid">
    <a v-for="tool in tools" :key="tool.name" :href="tool.link" class="tool-card">
      <div class="tool-icon">{{ tool.icon }}</div>
      <div class="tool-name">{{ tool.name }}</div>
      <div class="tool-desc">{{ tool.desc }}</div>
      <div class="tool-status available">{{ t('tools.available') }}</div>
    </a>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n'
const { t, locale } = useI18n()

const data = {
  en: [
    { icon: '💰', name: 'Profit Calculator', desc: 'Calculate profit margins for every crop, fish, and crafted item.', link: '/heartopia/tools/calculator/' },
    { icon: '🐟', name: 'Fish Tracker', desc: 'Track which fish you have caught and see what is missing.', link: '/heartopia/tools/calculator/' },
    { icon: '🌾', name: 'Crop Planner', desc: 'Plan your farm layout by season for maximum profit.', link: '/heartopia/tools/crop-planner/' },
    { icon: '💝', name: 'Friendship Tracker', desc: 'Track NPC friendship levels and find the best daily gifts.', link: '/heartopia/tools/calculator/' },
    { icon: '📋', name: 'Recipe Finder', desc: 'Find recipes by ingredient, energy value, or sell price.', link: '/heartopia/tools/calculator/' },
    { icon: '✅', name: 'Daily Checklist', desc: 'Never miss a daily task, delegation, or collectible again.', link: '/heartopia/tools/crop-planner/' },
    { icon: '⏰', name: 'Reset Timer', desc: 'Track daily, weekly, and event reset timers for your timezone.', link: '/heartopia/tools/crop-planner/' },
  ],
  zh: [
    { icon: '💰', name: '利润计算器', desc: '计算每种作物、鱼类和制作物品的利润空间。', link: '/heartopia/tools/calculator/' },
    { icon: '🐟', name: '鱼类追踪器', desc: '追踪你已钓到的鱼，查看还缺哪些。', link: '/heartopia/tools/calculator/' },
    { icon: '🌾', name: '作物规划器', desc: '按季节规划农场布局，实现最大收益。', link: '/heartopia/tools/crop-planner/' },
    { icon: '💝', name: '好感度追踪', desc: '追踪NPC好感度，找到最佳每日礼物。', link: '/heartopia/tools/calculator/' },
    { icon: '📋', name: '食谱查询器', desc: '按食材、能量值或售价查找食谱。', link: '/heartopia/tools/calculator/' },
    { icon: '✅', name: '每日清单', desc: '不再错过每日任务、委托或收藏品。', link: '/heartopia/tools/crop-planner/' },
    { icon: '⏰', name: '重置计时器', desc: '追踪每日、每周和活动重置时间。', link: '/heartopia/tools/crop-planner/' },
  ],
}

const tools = computed(() => data[locale.value])
</script>
