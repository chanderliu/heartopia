<script lang="ts" setup>
import type { DefaultTheme } from 'vitepress/theme'
import { computed } from 'vue'
import { useData } from 'vitepress'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
import { useI18n } from '../i18n'

const props = defineProps<{
  item: DefaultTheme.NavItemWithLink
}>()

const { page } = useData()
const i18n = useI18n()

const translatedText = computed(() => i18n.tText(props.item.text || ''))

function isActiveLink(currentPath: string, matchPath?: string, asRegex = false): boolean {
  if (!matchPath) return false
  if (asRegex) {
    return new RegExp(matchPath).test(currentPath)
  }
  return currentPath === matchPath.replace(/\/$/, '') || currentPath.startsWith(matchPath)
}
</script>

<template>
  <VPLink
    :class="{
      VPNavBarMenuLink: true,
      active: isActiveLink(
        page.relativePath,
        item.activeMatch || item.link,
        !!item.activeMatch
      )
    }"
    :href="item.link"
    :target="item.target"
    :rel="item.rel"
    :no-icon="item.noIcon"
    tabindex="0"
  >
    <span>{{ translatedText }}</span>
  </VPLink>
</template>

<style scoped>
.VPNavBarMenuLink {
  display: flex;
  align-items: center;
  padding: 0 12px;
  line-height: var(--vp-nav-height);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.VPNavBarMenuLink.active {
  color: var(--vp-c-brand-1);
}

.VPNavBarMenuLink:hover {
  color: var(--vp-c-brand-1);
}
</style>
