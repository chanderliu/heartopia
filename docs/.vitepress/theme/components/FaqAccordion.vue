<template>
  <div class="faq-list">
    <div v-for="(faq, i) in faqs" :key="i" class="faq-item">
      <div class="faq-question" @click="toggle(i)">
        <span>{{ faq.q }}</span>
        <span>{{ activeIndex === i ? '−' : '+' }}</span>
      </div>
      <div v-if="activeIndex === i" class="faq-answer">
        {{ faq.a }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const faqs = ref([])
const activeIndex = ref(-1)

function toggle(i) {
  activeIndex.value = activeIndex.value === i ? -1 : i
}

onMounted(async () => {
  try {
    const lang = localStorage.getItem('heartopia-lang') || 'en'
    const res = await fetch(`/heartopia/faq-${lang}.json`)
    if (res.ok) {
      faqs.value = await res.json()
    } else {
      const fallback = await fetch('/heartopia/faq.json')
      faqs.value = await fallback.json()
    }
  } catch (e) {
    console.error('Failed to load FAQ:', e)
  }
})
</script>
