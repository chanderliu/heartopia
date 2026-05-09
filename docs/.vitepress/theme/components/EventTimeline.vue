<template>
  <div style="max-width:700px; margin:0 auto; padding:1rem;">
    <div class="download-tabs" style="margin-bottom:1.5rem;">
      <button
        v-for="m in months"
        :key="m"
        :class="['download-tab', { active: selectedMonth === m }]"
        @click="selectedMonth = m"
      >{{ m }}</button>
    </div>

    <div class="event-timeline">
      <div v-for="event in filteredEvents" :key="event.date" class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-date">{{ event.date }}</div>
        <div class="timeline-title">{{ typeEmoji(event.type) }} {{ event.title }}</div>
        <div class="timeline-desc">{{ event.desc }}</div>
      </div>
      <div v-if="filteredEvents.length === 0" style="text-align:center; padding:2rem; color:var(--vp-c-text-3);">
        该月份暂无活动
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const events = ref([])
const selectedMonth = ref('全部')

const months = computed(() => {
  const set = new Set(events.value.map(e => e.date.substring(0, 7)))
  return ['全部', ...Array.from(set).sort()]
})

const filteredEvents = computed(() => {
  if (selectedMonth.value === '全部') return events.value
  return events.value.filter(e => e.date.startsWith(selectedMonth.value))
})

function typeEmoji(t) {
  const map = { festival: '🎉', competition: '🏆', welfare: '📦', community: '🤝' }
  return map[t] || '📅'
}

onMounted(async () => {
  try {
    const res = await fetch('/heartopia/data/events.json')
    events.value = await res.json()
  } catch (e) {
    console.error('Failed to load events:', e)
  }
})
</script>
