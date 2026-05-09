<template>
  <div class="code-list-wrapper">
    <div class="code-actions">
      <button v-for="tab in tabs" :key="tab.key" :class="['filter-tab', { active: activeTab === tab.key }]" @click="activeTab = tab.key">{{ tab.label }}</button>
    </div>
    <p class="code-updated">Updated {{ lastUpdated }} — <a href="/heartopia/codes/">View All Codes</a></p>
    <div class="code-list">
      <div v-for="item in displayedCodes" :key="item.code" :class="['code-row', item.status]">
        <span class="code-badge">{{ statusLabel(item.status) }}</span>
        <span class="code-text">{{ item.code }}</span>
        <span class="code-reward">{{ item.reward }}</span>
      </div>
    </div>
    <div class="redemption-hint">
      <strong>How to redeem:</strong> Settings → Gift Code → Enter code → Confirm
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const codes = ref([])
const lastUpdated = ref('')
const activeTab = ref('active')

const tabs = [
  { key: 'active', label: 'Active' },
  { key: 'new', label: 'NEW' },
  { key: 'popular', label: 'Popular' },
  { key: 'expired', label: 'Expired' },
]

const statusLabel = (s) => {
  const map = { new: 'NEW', active: 'Active', popular: 'Popular', expired: 'Expired' }
  return map[s] || s
}

const displayedCodes = computed(() => {
  if (activeTab.value === 'active') {
    return codes.value.filter(c => c.status !== 'expired')
  }
  return codes.value.filter(c => c.status === activeTab.value)
})

onMounted(async () => {
  try {
    const res = await fetch('/heartopia/data/codes.json')
    codes.value = await res.json()
    lastUpdated.value = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
  } catch (e) {
    console.error('Failed to load codes:', e)
  }
})
</script>
