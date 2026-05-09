<template>
  <div class="lang-switcher-wrap">
    <span class="lang-icon">🌐</span>
    <select class="lang-select" :value="i18n.locale.value" @change="onChange">
      <option value="en">English</option>
      <option value="zh">中文</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '../i18n'

const i18n = useI18n()

function onChange(e: Event) {
  const target = e.target as HTMLSelectElement
  i18n.setLocale(target.value as 'en' | 'zh')
}
</script>

<style scoped>
.lang-switcher-wrap {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.lang-icon {
  font-size: 0.9rem;
}

.lang-select {
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 1.5rem;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: inherit;
  transition: background 0.2s, border-color 0.2s;
  appearance: auto;
}

.lang-select:hover {
  background: var(--vp-c-bg-alt);
  border-color: var(--vp-c-brand-1);
}

.lang-select:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}
</style>
