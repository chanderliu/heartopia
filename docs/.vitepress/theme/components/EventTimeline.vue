<template>
  <div style="max-width:700px; margin:0 auto; padding:1rem;">
    <div class="download-tabs" style="margin-bottom:1.5rem;">
      <button
        v-for="m in months"
        :key="m"
        :class="['download-tab', { active: selectedMonth === m }]"
        @click="selectedMonth = m"
      >{{ m === 'All' ? t('events.all') : m }}</button>
    </div>

    <div class="event-timeline">
      <div v-for="event in filteredEvents" :key="event.date" class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">{{ event.date }}</div>
        <div class="timeline-title">{{ typeEmoji(event.type) }} {{ event.title }}</div>
        <div class="timeline-desc">{{ event.desc }}</div>
      </div>
      <div v-if="filteredEvents.length === 0" style="text-align:center; padding:2rem; color:var(--vp-c-text-3);">
        {{ t('map.noEvents') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useI18n } from '../i18n'
const { t, locale } = useI18n()

const events = ref([])
const selectedMonth = ref('All')

const months = computed(() => {
  const set = new Set(events.value.map(e => e.date.substring(0, 7)))
  return ['All', ...Array.from(set).sort()]
})

const filteredEvents = computed(() => {
  if (selectedMonth.value === 'All') return events.value
  return events.value.filter(e => e.date.startsWith(selectedMonth.value))
})

function typeEmoji(t) {
  const map = { festival: '🎉', competition: '🏆', welfare: '📦', community: '🤝' }
  return map[t] || '📅'
}

async function loadEvents(lang: string) {
  try {
    const res = await fetch(`/heartopia/events-${lang}.json`)
    if (!res.ok) throw new Error('fetch failed')
    events.value = await res.json()
  } catch {
    try {
      const res = await fetch('/heartopia/events.json')
      events.value = await res.json()
    } catch (e) {
      console.error('Failed to load events:', e)
    }
  }
}

onMounted(() => loadEvents(locale.value))
watch(locale, (lang) => loadEvents(lang))
</script>
