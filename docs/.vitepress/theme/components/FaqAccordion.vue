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

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useI18n } from '../i18n'

const { locale } = useI18n()
const faqs = ref([])
const activeIndex = ref(-1)

function toggle(i: number) {
  activeIndex.value = activeIndex.value === i ? -1 : i
}

async function loadFaqs(lang: string) {
  try {
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
}

onMounted(() => loadFaqs(locale.value))
watch(locale, (lang) => loadFaqs(lang))
</script>
