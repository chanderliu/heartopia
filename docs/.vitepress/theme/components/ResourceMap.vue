<template>
  <div style="max-width:900px; margin:0 auto; padding:1rem;">
    <div style="display:flex; gap:0.75rem; margin-bottom:1rem; flex-wrap:wrap;">
      <label v-for="cat in categories" :key="cat.key" style="display:flex; align-items:center; gap:0.3rem; cursor:pointer; font-size:0.9rem;">
        <input type="checkbox" :value="cat.key" v-model="activeFilters" @change="saveFilters" />
        {{ cat.label }}
      </label>
      <label style="display:flex; align-items:center; gap:0.3rem; cursor:pointer; font-size:0.9rem; margin-left:auto;">
        <input type="checkbox" v-model="showBookmarked" />
        {{ t('map.bookmarks') }}
      </label>
    </div>

    <div class="map-container" style="position:relative; background:var(--vp-c-bg-alt); border-radius:1rem; overflow:hidden; aspect-ratio:16/10; min-height:360px;">
      <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; color:var(--vp-c-text-3); font-size:1.2rem;">
        🗺️ Game Map
      </div>

      <div
        v-for="m in filteredMarkers"
        :key="m.id"
        :style="{ left: m.x + '%', top: m.y + '%' }"
        class="map-marker"
        :class="{ bookmarked: isBookmarked(m.id) }"
        @click="selectMarker(m)"
      >
        {{ markerIcon(m.category) }}
      </div>

      <div v-if="selected" class="marker-popup" :style="{ left: selected.x + '%', top: (selected.y - 12) + '%' }">
        <div style="font-weight:600;">{{ selected.name }}</div>
        <div style="font-size:0.85rem; color:var(--vp-c-text-2); margin:0.25rem 0;">{{ selected.desc }}</div>
        <button class="bookmark-btn" @click.stop="toggleBookmark(selected.id)">
          {{ isBookmarked(selected.id) ? t('map.unbookmark') : t('map.bookmark') }}
        </button>
      </div>
    </div>

    <div style="display:flex; gap:1.5rem; margin-top:0.75rem; font-size:0.85rem; flex-wrap:wrap;">
      <span v-for="cat in categories" :key="cat.key">{{ cat.icon }} {{ cat.label }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from '../i18n'
const { t } = useI18n()

const markers = ref([])
const selected = ref(null)
const activeFilters = ref(['resource', 'npc', 'shop', 'forage'])
const showBookmarked = ref(false)
const bookmarkedIds = ref([])

const categories = computed(() => [
  { key: 'resource', label: t('map.resource'), icon: '🪨' },
  { key: 'npc', label: t('map.npc'), icon: '👤' },
  { key: 'shop', label: t('map.shop'), icon: '🛒' },
  { key: 'forage', label: t('map.forage'), icon: '🌿' },
])

function markerIcon(cat) {
  const icons = { resource: '🪨', npc: '👤', shop: '🛒', forage: '🌿' }
  return icons[cat] || '📍'
}

const filteredMarkers = computed(() => {
  let list = markers.value.filter(m => activeFilters.value.includes(m.category))
  if (showBookmarked.value) {
    list = list.filter(m => bookmarkedIds.value.includes(m.id))
  }
  return list
})

function selectMarker(m) {
  selected.value = selected.value?.id === m.id ? null : m
}

function isBookmarked(id) {
  return bookmarkedIds.value.includes(id)
}

function toggleBookmark(id) {
  const idx = bookmarkedIds.value.indexOf(id)
  if (idx >= 0) {
    bookmarkedIds.value.splice(idx, 1)
  } else {
    bookmarkedIds.value.push(id)
  }
  localStorage.setItem('heartopia-bookmarks', JSON.stringify(bookmarkedIds.value))
}

function saveFilters() {
  localStorage.setItem('heartopia-map-filters', JSON.stringify(activeFilters.value))
}

onMounted(async () => {
  try {
    const res = await fetch('/heartopia/map-markers.json')
    markers.value = await res.json()
  } catch (e) {
    console.error('Failed to load map markers:', e)
  }

  const saved = localStorage.getItem('heartopia-bookmarks')
  if (saved) bookmarkedIds.value = JSON.parse(saved)

  const savedFilters = localStorage.getItem('heartopia-map-filters')
  if (savedFilters) activeFilters.value = JSON.parse(savedFilters)
})
</script>

<style scoped>
.map-marker {
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 2;
  transition: transform 0.15s;
}
.map-marker:hover {
  transform: translate(-50%, -50%) scale(1.3);
}
.map-marker.bookmarked {
  filter: drop-shadow(0 0 4px gold);
}
.marker-popup {
  position: absolute;
  transform: translate(-50%, -100%);
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-border);
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  z-index: 10;
  min-width: 180px;
  box-shadow: var(--vp-shadow-2);
}
.bookmark-btn {
  margin-top: 0.25rem;
  padding: 0.2rem 0.6rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 1rem;
  background: var(--vp-c-bg);
  cursor: pointer;
  font-size: 0.8rem;
  color: var(--vp-c-text-1);
}
</style>
