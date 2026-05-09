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
import { useI18n } from '../i18n'
const { t } = useI18n()

const tools = [
  { icon: '💰', name: 'Profit Calculator', desc: 'Calculate profit margins for every crop, fish, and crafted item.', link: '/heartopia/tools/calculator/' },
  { icon: '🐟', name: 'Fish Tracker', desc: 'Track which fish you have caught and see what is missing.', link: '/heartopia/tools/calculator/' },
  { icon: '🌾', name: 'Crop Planner', desc: 'Plan your farm layout by season for maximum profit.', link: '/heartopia/tools/crop-planner/' },
  { icon: '💝', name: 'Friendship Tracker', desc: 'Track NPC friendship levels and find the best daily gifts.', link: '/heartopia/tools/calculator/' },
  { icon: '📋', name: 'Recipe Finder', desc: 'Find recipes by ingredient, energy value, or sell price.', link: '/heartopia/tools/calculator/' },
  { icon: '✅', name: 'Daily Checklist', desc: 'Never miss a daily task, delegation, or collectible again.', link: '/heartopia/tools/crop-planner/' },
  { icon: '⏰', name: 'Reset Timer', desc: 'Track daily, weekly, and event reset timers for your timezone.', link: '/heartopia/tools/crop-planner/' },
]
</script>
