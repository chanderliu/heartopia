<template>
  <div class="hobby-grid">
    <div class="hobby-card" v-for="h in hobbies" :key="h.name">
      <div class="hobby-icon">{{ h.icon }}</div>
      <div class="hobby-name">{{ h.name }}</div>
      <div class="hobby-unlock">Unlock: {{ h.unlock }}</div>
      <div class="hobby-desc">{{ h.desc }}</div>
    </div>
  </div>
</template>

<script setup>
const hobbies = [
  { icon: '🎣', name: 'Fishing', unlock: 'Tutorial', desc: 'Catch 98 fish species across 14 fishing spots. Teaches patience and pays well.' },
  { icon: '🌱', name: 'Gardening', unlock: 'Tutorial', desc: 'Grow crops, flowers, and trees. Foundation for cooking and profitable farming.' },
  { icon: '🐦', name: 'Birdwatching', unlock: 'D.G. Level 3', desc: 'Spot and photograph rare birds across the island. Fill your bird journal.' },
  { icon: '🍳', name: 'Cooking', unlock: 'D.G. Level 4', desc: 'Cook 200+ recipes using fish, crops, and foraged ingredients. Essential for energy.' },
  { icon: '🦋', name: 'Bug Catching', unlock: 'D.G. Level 5', desc: 'Catch butterflies, beetles, and rare insects. Sell to collectors or display.' },
  { icon: '🐱', name: 'Cat Raising', unlock: 'D.G. Level 6', desc: 'Adopt and raise cats. Dress them up, play mini-games, and increase happiness.' },
  { icon: '🐕', name: 'Dog Raising', unlock: 'D.G. Level 6', desc: 'Adopt and train dogs. Take them on walks, teach tricks, and earn rewards.' },
]
</script>
