<template>
  <div class="home-hero">
    <h1>{{ t('home.heroHeading') }}</h1>
    <p class="hero-tagline">{{ t('home.heroTagline') }}</p>
    <p class="hero-desc">{{ t('home.heroDesc') }}</p>
    <div class="cta-buttons">
      <a href="/heartopia/codes/" class="cta-btn primary">{{ t('home.getCodes') }}</a>
      <a href="/heartopia/wiki/" class="cta-btn secondary">{{ t('home.browseDB') }}</a>
      <a href="/heartopia/guides/beginner/" class="cta-btn outline">{{ t('home.beginnerGuide') }}</a>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from '../i18n'
const { t } = useI18n()
</script>
