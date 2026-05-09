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

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useI18n } from '../i18n'

const { locale } = useI18n()
const npcs = ref([])

async function loadNpcs(lang: string) {
  try {
    const res = await fetch(`/heartopia/npcs-${lang}.json`)
    if (!res.ok) throw new Error('fetch failed')
    npcs.value = await res.json()
  } catch {
    try {
      const res = await fetch('/heartopia/npcs.json')
      npcs.value = await res.json()
    } catch (e) {
      console.error('Failed to load NPCs:', e)
    }
  }
}

onMounted(() => loadNpcs(locale.value))
watch(locale, (lang) => loadNpcs(lang))

function npcEmoji(npc: { name: string }) {
  // recognize NPC by English name regardless of locale
  return npc.name || '👤'
}
</script>
