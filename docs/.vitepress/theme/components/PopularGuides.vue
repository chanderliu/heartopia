<template>
  <div class="popular-guides">
    <ol class="guide-list">
      <li v-for="g in guides" :key="g.title"><a :href="g.link">{{ g.title }}</a><span class="guide-note">{{ g.note }}</span></li>
    </ol>
    <div class="view-all"><a href="/heartopia/guides/">{{ t('guides.browseAll') }} →</a></div>
  </div>
</template>

<script setup>
import { useI18n } from '../i18n'
const { t } = useI18n()

const guides = [
  { title: 'Home Plots Guide', note: 'How to unlock, upgrade, and decorate your home plot', link: '/heartopia/guides/beginner/' },
  { title: 'Money Making Guide', note: 'Best ways to earn gold daily', link: '/heartopia/guides/money/' },
  { title: 'Multiplayer Guide', note: 'Add friends, visit homes, trade, and party up', link: '/heartopia/guides/social/' },
  { title: 'Fishing Guide', note: 'All 98 fish, locations, bait, and rod upgrades', link: '/heartopia/guides/fishing/' },
  { title: 'House Design Ideas', note: 'Top themes and building techniques', link: '/heartopia/house-designs/' },
  { title: 'Sheet Music Guide', note: 'Play songs with the in-game music system', link: '/heartopia/guides/beginner/' },
]
</script>
