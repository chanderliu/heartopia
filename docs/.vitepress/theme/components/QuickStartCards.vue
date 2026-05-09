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
import { computed } from 'vue'
import { useI18n } from '../i18n'
const { locale } = useI18n()

const data = {
  en: [
    { icon: '📥', title: 'Download Guide', desc: 'iOS, Android, PC & Steam install steps', link: '/heartopia/download/' },
    { icon: '🗺️', title: 'Interactive Map', desc: 'All resources, NPCs & foraging spots', link: '/heartopia/map/' },
    { icon: '📊', title: 'Progress Hub', desc: 'D.G. Guild levels & unlocks', link: '/heartopia/guides/beginner/' },
    { icon: '🧺', title: 'Ingredients Hub', desc: 'Every crop, fish & forage mapped', link: '/heartopia/wiki/items/' },
    { icon: '🏆', title: 'Collectibles Hub', desc: 'Outfits, bubbles & event items', link: '/heartopia/wiki/items/' },
    { icon: '🐾', title: 'Pets Guide', desc: 'Cat, dog & Oak-Oak care', link: '/heartopia/house-designs/' },
    { icon: '🏠', title: 'House Designs', desc: 'Themes, layouts & room ideas', link: '/heartopia/house-designs/' },
    { icon: '🔨', title: 'Building Guide', desc: 'Materials, blueprints & upgrades', link: '/heartopia/guides/crafting/' },
  ],
  zh: [
    { icon: '📥', title: '下载指南', desc: 'iOS、Android、PC 和 Steam 安装教程', link: '/heartopia/download/' },
    { icon: '🗺️', title: '互动地图', desc: '所有资源、NPC 和采集点', link: '/heartopia/map/' },
    { icon: '📊', title: '进度中心', desc: 'D.G. 公会等级和解锁内容', link: '/heartopia/guides/beginner/' },
    { icon: '🧺', title: '食材大全', desc: '所有作物、鱼类和采集物对照表', link: '/heartopia/wiki/items/' },
    { icon: '🏆', title: '收藏品大全', desc: '服装、气泡和活动物品', link: '/heartopia/wiki/items/' },
    { icon: '🐾', title: '宠物指南', desc: '猫、狗和橡橡伙伴养护', link: '/heartopia/house-designs/' },
    { icon: '🏠', title: '家装设计', desc: '主题、布局和房间灵感', link: '/heartopia/house-designs/' },
    { icon: '🔨', title: '建造指南', desc: '材料、蓝图和升级攻略', link: '/heartopia/guides/crafting/' },
  ],
}

const cards = computed(() => data[locale.value])
</script>
