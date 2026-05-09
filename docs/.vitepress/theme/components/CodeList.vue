<template>
  <div class="code-list">
    <p style="text-align:center; color: var(--vp-c-text-3); margin-bottom: 1rem;">
      更新于 {{ lastUpdated }}
    </p>
    <div v-for="item in codes" :key="item.code" :class="['code-row', item.status]">
      <span class="code-text">{{ item.code }}</span>
      <span class="code-reward">{{ item.reward }}</span>
      <span class="code-date">截止 {{ item.expiryDate }}</span>
      <span class="code-badge">{{ item.status === 'valid' ? '有效' : '已过期' }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const codes = ref([])
const lastUpdated = ref('')

onMounted(async () => {
  try {
    const res = await fetch('/heartopia/data/codes.json')
    const data = await res.json()
    codes.value = data
    lastUpdated.value = new Date().toLocaleDateString('zh-CN')
  } catch (e) {
    console.error('Failed to load codes:', e)
  }
})
</script>
