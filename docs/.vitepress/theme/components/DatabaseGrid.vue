<template>
  <div class="database-grid">
    <a v-for="item in items" :key="item.title" :href="item.link" class="database-card">
      <div class="db-icon">{{ item.icon }}</div>
      <div class="db-title">{{ item.title }}</div>
      <div class="db-count">{{ item.count }} entries</div>
      <div class="db-desc">{{ item.desc }}</div>
    </a>
  </div>
</template>

<script setup>
const items = [
  { icon: '🐟', title: 'Fish', count: 98, desc: 'All fish species with locations, seasons, times, and sell prices.', link: '/heartopia/wiki/fish/' },
  { icon: '🍽️', title: 'Recipes', count: '200+', desc: 'Complete cooking recipes with ingredients, energy values, and sell prices.', link: '/heartopia/wiki/recipes/' },
  { icon: '🧱', title: 'Materials', count: 150, desc: 'Wood, stone, ores, gems, and crafting materials with spawn locations.', link: '/heartopia/wiki/items/' },
  { icon: '🦗', title: 'Insects', count: 65, desc: 'Butterflies, beetles, moths, and rare bugs with catch conditions.', link: '/heartopia/wiki/items/' },
  { icon: '🐦', title: 'Birds', count: 45, desc: 'All bird species with habitats, active hours, and photo tips.', link: '/heartopia/wiki/items/' },
  { icon: '🔨', title: 'Crafting', count: '120+', desc: 'DIY recipes, furniture, tools, and decorations you can craft.', link: '/heartopia/wiki/recipes/' },
]
</script>
