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
  { icon: '📥', title: 'Download Guide', desc: 'iOS, Android, PC & Steam install steps', link: '/heartopia/download/' },
  { icon: '🗺️', title: 'Interactive Map', desc: 'All resources, NPCs & foraging spots', link: '/heartopia/map/' },
  { icon: '📊', title: 'Progress Hub', desc: 'D.G. Guild levels & unlocks', link: '/heartopia/guides/beginner/' },
  { icon: '🧺', title: 'Ingredients Hub', desc: 'Every crop, fish & forage mapped', link: '/heartopia/wiki/items/' },
  { icon: '🏆', title: 'Collectibles Hub', desc: 'Outfits, bubbles & event items', link: '/heartopia/wiki/items/' },
  { icon: '🐾', title: 'Pets Guide', desc: 'Cat, dog & Oak-Oak care', link: '/heartopia/house-designs/' },
  { icon: '🏠', title: 'House Designs', desc: 'Themes, layouts & room ideas', link: '/heartopia/house-designs/' },
  { icon: '🔨', title: 'Building Guide', desc: 'Materials, blueprints & upgrades', link: '/heartopia/guides/crafting/' },
]
</script>
