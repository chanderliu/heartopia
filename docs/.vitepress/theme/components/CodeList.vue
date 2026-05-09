<template>
  <div class="code-list-wrapper">
    <div class="code-actions">
      <button v-for="tab in tabs" :key="tab.key" :class="['filter-tab', { active: activeTab === tab.key }]" @click="activeTab = tab.key">{{ tab.label }}</button>
    </div>
    <p class="code-updated">{{ t('codes.updated') }} {{ lastUpdated }} — <a href="/heartopia/codes/">{{ t('codes.viewAll') }}</a></p>
    <div class="code-list">
      <div v-for="item in displayedCodes" :key="item.code" :class="['code-row', item.status]">
        <span class="code-badge">{{ statusLabel(item.status) }}</span>
        <span class="code-text">{{ item.code }}</span>
        <span class="code-reward">{{ item.reward }}</span>
      </div>
    </div>
    <div class="redemption-hint">
      <strong>{{ t('codes.howToRedeem') }}</strong> {{ t('codes.redeemSteps') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useI18n } from '../i18n'
const { t, locale } = useI18n()

const codes = ref([])
const lastUpdated = ref('')
const activeTab = ref('active')

const tabs = computed(() => [
  { key: 'active', label: t('codes.active') },
  { key: 'new', label: t('codes.new') },
  { key: 'popular', label: t('codes.popular') },
  { key: 'expired', label: t('codes.expired') },
])

const statusLabel = (s: string) => {
  const map: Record<string, string> = {
    new: t('codes.new'),
    active: t('codes.active'),
    popular: t('codes.popular'),
    expired: t('codes.expired'),
  }
  return map[s] || s
}

const displayedCodes = computed(() => {
  if (activeTab.value === 'active') {
    return codes.value.filter((c: any) => c.status !== 'expired')
  }
  return codes.value.filter((c: any) => c.status === activeTab.value)
})

async function loadCodes(lang: string) {
  try {
    const res = await fetch(`/heartopia/codes-${lang}.json`)
    if (!res.ok) throw new Error('fetch failed')
    codes.value = await res.json()
  } catch {
    try {
      const res = await fetch('/heartopia/codes.json')
      codes.value = await res.json()
    } catch (e) {
      console.error('Failed to load codes:', e)
    }
  }
  lastUpdated.value = new Date().toLocaleDateString(
    lang === 'zh' ? 'zh-CN' : 'en-US',
    { month: 'long', day: 'numeric', year: 'numeric' }
  )
}

onMounted(() => loadCodes(locale.value))
watch(locale, (lang) => loadCodes(lang))
</script>
