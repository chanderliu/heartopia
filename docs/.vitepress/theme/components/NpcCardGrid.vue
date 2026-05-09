<template>
  <div class="npc-card-grid">
    <div v-for="npc in npcs" :key="npc.name" class="npc-card">
      <div class="npc-emoji">{{ npcEmoji(npc) }}</div>
      <div class="npc-info">
        <div class="npc-name">{{ npc.name }}</div>
        <div class="npc-role">{{ npc.role }}</div>
        <div class="npc-location">{{ npc.location }}</div>
        <div v-if="npc.description" class="npc-desc">{{ npc.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const npcs = ref([])

const emojiMap = {
  'Blanc': '🌸', 'Vanya': '🎣', 'Massimo': '👨‍🍳', 'Naniwa': '🦋', 'Bailey J': '🐦',
  'Bill': '⚓', 'Mrs. Joan': '🐾', 'Bob': '🏗️', 'Dorothee': '👗', 'Ka Ching': '🛒',
  'Patti': '🎨', 'Cassie': '🌿', 'Eric': '🏘️', 'Atara': '🏛️', 'Star Spirit': '✨',
  'Albert Jr.': '🎒', 'Oak-Oak': '🌳'
}

function npcEmoji(npc) { return emojiMap[npc.name] || '👤' }

onMounted(async () => {
  try {
    const res = await fetch('/heartopia/data/npcs.json')
    npcs.value = await res.json()
  } catch (e) { console.error('Failed to load NPCs:', e) }
})
</script>
