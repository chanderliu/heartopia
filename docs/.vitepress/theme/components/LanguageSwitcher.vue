<template>
  <button class="lang-switcher" @click="i18n.toggleLocale()" :title="i18n.t('lang.label')">
    <span class="lang-icon">{{ i18n.locale.value === 'zh' ? '🌐' : '🌐' }}</span>
    <span class="lang-text">{{ i18n.t('lang.switch') }}</span>
  </button>
</template>

<script setup>
import { useI18n } from '../i18n'
const i18n = useI18n()
</script>

<style scoped>
.lang-switcher {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.75rem;
  border: 1px solid var(--vp-c-border);
  border-radius: 2rem;
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: inherit;
  transition: background 0.2s, border-color 0.2s;
  white-space: nowrap;
}

.lang-switcher:hover {
  background: var(--vp-c-bg-alt);
  border-color: var(--vp-c-brand-1);
}

.lang-icon {
  font-size: 0.9rem;
}

.lang-text {
  font-size: 0.8rem;
}
</style>
