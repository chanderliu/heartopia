<template>
  <div class="stats-bar">
    <div class="stat-item"><span class="stat-num">364</span><span class="stat-label">{{ t('home.statsEntries') }}</span></div>
    <div class="stat-item"><span class="stat-num">7</span><span class="stat-label">{{ t('home.statsTools') }}</span></div>
    <div class="stat-item"><span class="stat-num">15</span><span class="stat-label">{{ t('home.statsCodes') }}</span></div>
    <div class="stat-item"><span class="stat-num">7</span><span class="stat-label">{{ t('home.statsHobbies') }}</span></div>
  </div>
</template>

<script setup>
import { useI18n } from '../i18n'
const { t } = useI18n()
</script>
