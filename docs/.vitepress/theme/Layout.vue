<template>
  <div class="heartopia-layout" :class="i18n.locale.value">
    <Layout>
      <template #nav-bar-content-after>
        <div class="nav-lang-wrap">
          <LanguageSwitcher />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import { provideI18n } from './i18n'

const { Layout } = DefaultTheme
const i18n = provideI18n()
</script>

<style>
.nav-lang-wrap {
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
}

@media (max-width: 768px) {
  .nav-lang-wrap {
    margin-left: auto;
    margin-right: 0.5rem;
  }
}
</style>
