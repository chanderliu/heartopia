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

<script setup lang="ts">
import { watch } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import { provideI18n } from './i18n'

const { Layout } = DefaultTheme
const i18n = provideI18n()
const { theme } = useData()

const uiText = {
  en: {
    editLink: 'Edit this page on GitHub',
    lastUpdated: 'Last updated',
    prev: 'Previous',
    next: 'Next',
    outline: 'On this page',
  },
  zh: {
    editLink: '在 GitHub 上编辑此页',
    lastUpdated: '最后更新',
    prev: '上一页',
    next: '下一页',
    outline: '本页目录',
  },
}

function applyThemeText(lang: 'en' | 'zh') {
  const t = uiText[lang]
  if (theme.value.editLink) {
    theme.value.editLink.text = t.editLink
  }
  if (theme.value.lastUpdated) {
    theme.value.lastUpdated.text = t.lastUpdated
  }
  if (theme.value.docFooter) {
    theme.value.docFooter.prev = t.prev
    theme.value.docFooter.next = t.next
  }
  if (theme.value.outline) {
    theme.value.outline.label = t.outline
  }
}

watch(() => i18n.locale.value, applyThemeText, { immediate: true })
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
