<template>
  <div class="hobby-grid">
    <div class="hobby-card" v-for="h in hobbies" :key="h.name">
      <div class="hobby-icon">{{ h.icon }}</div>
      <div class="hobby-name">{{ h.name }}</div>
      <div class="hobby-unlock">{{ t('common.unlock') }}: {{ h.unlock }}</div>
      <div class="hobby-desc">{{ h.desc }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n'
const { t, locale } = useI18n()

const data = {
  en: [
    { icon: '🎣', name: 'Fishing', unlock: 'Tutorial', desc: 'Catch 98 fish species across 14 fishing spots. Teaches patience and pays well.' },
    { icon: '🌱', name: 'Gardening', unlock: 'Tutorial', desc: 'Grow crops, flowers, and trees. Foundation for cooking and profitable farming.' },
    { icon: '🐦', name: 'Birdwatching', unlock: 'D.G. Level 3', desc: 'Spot and photograph rare birds across the island. Fill your bird journal.' },
    { icon: '🍳', name: 'Cooking', unlock: 'D.G. Level 4', desc: 'Cook 200+ recipes using fish, crops, and foraged ingredients. Essential for energy.' },
    { icon: '🦋', name: 'Bug Catching', unlock: 'D.G. Level 5', desc: 'Catch butterflies, beetles, and rare insects. Sell to collectors or display.' },
    { icon: '🐱', name: 'Cat Raising', unlock: 'D.G. Level 6', desc: 'Adopt and raise cats. Dress them up, play mini-games, and increase happiness.' },
    { icon: '🐕', name: 'Dog Raising', unlock: 'D.G. Level 6', desc: 'Adopt and train dogs. Take them on walks, teach tricks, and earn rewards.' },
  ],
  zh: [
    { icon: '🎣', name: '钓鱼', unlock: '教程', desc: '在14个钓点捕获98种鱼类。培养耐心，收益丰厚。' },
    { icon: '🌱', name: '园艺', unlock: '教程', desc: '种植作物、花卉和树木。烹饪和盈利农场的基础。' },
    { icon: '🐦', name: '观鸟', unlock: 'D.G. 3级', desc: '发现并拍摄岛上稀有鸟类。填满你的观鸟日志。' },
    { icon: '🍳', name: '烹饪', unlock: 'D.G. 4级', desc: '使用鱼类、作物和采集食材烹饪200+道菜。补充体力必不可少。' },
    { icon: '🦋', name: '捕虫', unlock: 'D.G. 5级', desc: '捕捉蝴蝶、甲虫和稀有昆虫。卖给收藏家或展示。' },
    { icon: '🐱', name: '养猫', unlock: 'D.G. 6级', desc: '领养和养育猫咪。给它们打扮、玩小游戏、提升幸福感。' },
    { icon: '🐕', name: '养狗', unlock: 'D.G. 6级', desc: '领养和训练狗狗。带它们散步、教把戏、获得奖励。' },
  ],
}

const hobbies = computed(() => data[locale.value])
</script>
