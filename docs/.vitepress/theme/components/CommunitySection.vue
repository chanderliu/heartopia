<template>
  <div class="community-section">
    <div class="community-links">
      <a href="https://discord.gg/heartopia" class="community-card">
        <span class="comm-icon">💬</span>
        <span class="comm-name">Discord</span>
        <span class="comm-desc">Join 300,000+ players</span>
      </a>
      <a href="https://twitter.com/heartopia" class="community-card">
        <span class="comm-icon">🐦</span>
        <span class="comm-name">Twitter / X</span>
        <span class="comm-desc">Follow for code drops & news</span>
      </a>
      <a href="https://heartopia.gg" class="community-card">
        <span class="comm-icon">🌐</span>
        <span class="comm-name">Official Website</span>
        <span class="comm-desc">heartopia.gg</span>
      </a>
    </div>
    <div class="bug-reports">
      <a href="/heartopia/contact/">🐛 Bug Reports Database — 155+ community-reported bugs with workarounds</a>
    </div>
    <div class="disclaimer">
      <p>{{ t('footer.disclaimer') }}</p>
      <p>Launched January 7, 2026 — continuously updated by the community.</p>
    </div>
    <div class="footer-links">
      <a href="/heartopia/guides/">{{ t('footer.allPages') }}</a>
      <span>·</span>
      <a href="/heartopia/contact/">{{ t('footer.privacy') }}</a>
      <span>·</span>
      <a href="/heartopia/contact/">{{ t('footer.terms') }}</a>
      <span>·</span>
      <a href="#">↑ Back to top</a>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from '../i18n'
const { t } = useI18n()
</script>
