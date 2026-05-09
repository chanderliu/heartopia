<template>
  <div style="max-width:700px; margin:0 auto; padding:1rem;">
    <div class="download-tabs">
      <button
        v-for="p in platforms"
        :key="p.key"
        :class="['download-tab', { active: activePlatform === p.key }]"
        @click="activePlatform = p.key"
      >{{ p.icon }} {{ p.label }}</button>
    </div>

    <div class="download-steps">
      <div v-for="(step, i) in currentSteps" :key="i" class="download-step">
        <span class="step-num">{{ i + 1 }}</span>
        <div>
          <strong>{{ step.title }}</strong>
          <p style="margin:0.25rem 0 0; color:var(--vp-c-text-2);">{{ step.desc }}</p>
        </div>
      </div>
    </div>

    <div style="text-align:center; margin:1.5rem 0;">
      <a :href="currentLink" class="cta-btn primary" style="display:inline-block; text-decoration:none;">
        {{ currentLabel }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../i18n'
const { t, locale } = useI18n()

const activePlatform = ref('ios')

const platformData = {
  en: {
    platforms: [
      { key: 'ios', icon: '🍎', label: 'iOS' },
      { key: 'android', icon: '🤖', label: 'Android' },
      { key: 'pc', icon: '💻', label: 'PC (TapTap)' },
      { key: 'steam', icon: '🎮', label: 'Steam' },
    ],
    steps: {
      ios: [
        { title: 'Open the App Store', desc: 'Open the App Store on your iPhone or iPad.' },
        { title: 'Search "Heartopia"', desc: 'Type "Heartopia" in the search bar.' },
        { title: 'Tap Get', desc: 'Tap Get and confirm with Face ID, Touch ID, or your password.' },
        { title: 'Wait for Install', desc: 'The app will automatically install to your home screen.' },
      ],
      android: [
        { title: 'Open Google Play', desc: 'Open the Google Play Store or your device\'s app store.' },
        { title: 'Search "Heartopia"', desc: 'Search for "Heartopia" or "心动小镇".' },
        { title: 'Tap Install', desc: 'Tap Install and wait for the download to complete.' },
        { title: 'Open the Game', desc: 'Tap Open to launch Heartopia.' },
      ],
      pc: [
        { title: 'Download TapTap', desc: 'Visit the official XD website and download the TapTap desktop client.' },
        { title: 'Install TapTap', desc: 'Follow the prompts to install TapTap on your PC.' },
        { title: 'Search Heartopia', desc: 'Open TapTap and search for "Heartopia".' },
        { title: 'Install & Play', desc: 'Click Install and launch the game from TapTap.' },
      ],
      steam: [
        { title: 'Open Steam', desc: 'Launch the Steam client on your Windows PC.' },
        { title: 'Search Heartopia', desc: 'Search for "Heartopia" in the Steam store (App ID 4025700).' },
        { title: 'Click Install', desc: 'Click Install — the game requires about 10 GB of free space.' },
        { title: 'Launch & Play', desc: 'Launch the game from your Steam library. Steam Deck works with Proton Experimental.' },
      ],
    },
    links: {
      ios: 'https://apps.apple.com/app/heartopia/id0000000000',
      android: 'https://play.google.com/store/apps/details?id=com.heartopia',
      pc: 'https://www.taptap.io/',
      steam: 'https://store.steampowered.com/app/4025700/',
    },
    labels: {
      ios: '🍎 Download on the App Store',
      android: '🤖 Get it on Google Play',
      pc: '💻 Download via TapTap',
      steam: '🎮 Download on Steam',
    },
  },
  zh: {
    platforms: [
      { key: 'ios', icon: '🍎', label: 'iOS' },
      { key: 'android', icon: '🤖', label: 'Android' },
      { key: 'pc', icon: '💻', label: 'PC (TapTap)' },
      { key: 'steam', icon: '🎮', label: 'Steam' },
    ],
    steps: {
      ios: [
        { title: '打开 App Store', desc: '在 iPhone/iPad 上打开 App Store 应用。' },
        { title: '搜索「心动小镇」', desc: '在搜索框中输入「心动小镇」或「Heartopia」。' },
        { title: '点击获取', desc: '点击「获取」按钮，使用 Face ID / Touch ID 或密码确认下载。' },
        { title: '等待安装完成', desc: '下载完成后应用会自动安装到主屏幕。' },
      ],
      android: [
        { title: '打开应用商店', desc: '打开 Google Play 或你手机上的应用商店。' },
        { title: '搜索「心动小镇」', desc: '搜索「心动小镇」或「Heartopia」。' },
        { title: '点击安装', desc: '点击「安装」按钮，等待下载完成。' },
        { title: '打开游戏', desc: '安装完成后点击「打开」启动游戏。' },
      ],
      pc: [
        { title: '下载 TapTap', desc: '访问 XD 官网下载 TapTap 桌面客户端。' },
        { title: '安装 TapTap', desc: '按照提示完成 TapTap 安装。' },
        { title: '搜索心动小镇', desc: '打开 TapTap 搜索「心动小镇」。' },
        { title: '安装并游玩', desc: '点击安装，从 TapTap 启动游戏。' },
      ],
      steam: [
        { title: '打开 Steam', desc: '启动 Windows PC 上的 Steam 客户端。' },
        { title: '搜索 Heartopia', desc: '在 Steam 商店搜索「Heartopia」（App ID 4025700）。' },
        { title: '点击安装', desc: '点击安装 — 游戏需要约 10 GB 可用空间。' },
        { title: '启动游戏', desc: '从 Steam 库启动游戏。Steam Deck 可使用 Proton Experimental 运行。' },
      ],
    },
    links: {
      ios: 'https://apps.apple.com/app/heartopia/id0000000000',
      android: 'https://play.google.com/store/apps/details?id=com.heartopia',
      pc: 'https://www.taptap.io/',
      steam: 'https://store.steampowered.com/app/4025700/',
    },
    labels: {
      ios: '🍎 前往 App Store 下载',
      android: '🤖 前往 Google Play 下载',
      pc: '💻 通过 TapTap 下载',
      steam: '🎮 在 Steam 下载',
    },
  },
}

const data = computed(() => platformData[locale.value] || platformData.en)
const platforms = computed(() => data.value.platforms)
const currentSteps = computed(() => data.value.steps[activePlatform.value])
const currentLink = computed(() => data.value.links[activePlatform.value])
const currentLabel = computed(() => data.value.labels[activePlatform.value])
</script>
