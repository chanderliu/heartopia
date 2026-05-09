<template>
  <div class="popular-guides">
    <ol class="guide-list">
      <li v-for="g in guides" :key="g.title"><a :href="g.link">{{ g.title }}</a><span class="guide-note">{{ g.note }}</span></li>
    </ol>
    <div class="view-all"><a href="/heartopia/guides/">{{ t('guides.browseAll') }} →</a></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n'
const { t, locale } = useI18n()

const data = {
  en: [
    { title: 'Home Plots Guide', note: 'How to unlock, upgrade, and decorate your home plot', link: '/heartopia/guides/beginner/' },
    { title: 'Money Making Guide', note: 'Best ways to earn gold daily', link: '/heartopia/guides/money/' },
    { title: 'Multiplayer Guide', note: 'Add friends, visit homes, trade, and party up', link: '/heartopia/guides/social/' },
    { title: 'Fishing Guide', note: 'All 98 fish, locations, bait, and rod upgrades', link: '/heartopia/guides/fishing/' },
    { title: 'House Design Ideas', note: 'Top themes and building techniques', link: '/heartopia/house-designs/' },
    { title: 'Sheet Music Guide', note: 'Play songs with the in-game music system', link: '/heartopia/guides/beginner/' },
  ],
  zh: [
    { title: '家园地块指南', note: '如何解锁、升级和装饰你的家园地块', link: '/heartopia/guides/beginner/' },
    { title: '赚钱攻略', note: '每天赚取金币的最佳方法', link: '/heartopia/guides/money/' },
    { title: '多人联机指南', note: '添加好友、拜访家园、交易和组队', link: '/heartopia/guides/social/' },
    { title: '钓鱼指南', note: '全部98种鱼类、位置、鱼饵和鱼竿升级', link: '/heartopia/guides/fishing/' },
    { title: '家装设计灵感', note: '热门主题和建造技巧', link: '/heartopia/house-designs/' },
    { title: '乐谱指南', note: '用游戏内音乐系统演奏歌曲', link: '/heartopia/guides/beginner/' },
  ],
}

const guides = computed(() => data[locale.value])
</script>
