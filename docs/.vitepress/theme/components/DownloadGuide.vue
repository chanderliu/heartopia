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

const activePlatform = ref('ios')

const platforms = [
  { key: 'ios', icon: '🍎', label: 'iOS' },
  { key: 'android', icon: '🤖', label: 'Android' },
  { key: 'pc', icon: '💻', label: 'PC 模拟器' },
]

const stepsData = {
  ios: [
    { title: '打开 App Store', desc: '在 iPhone/iPad 上打开 App Store 应用' },
    { title: '搜索「心动小镇」', desc: '在搜索框中输入「心动小镇」或「Heartopia」' },
    { title: '点击获取', desc: '点击「获取」按钮，使用 Face ID / Touch ID 或密码确认下载' },
    { title: '等待安装完成', desc: '下载完成后应用会自动安装到主屏幕' },
  ],
  android: [
    { title: '打开应用商店', desc: '打开 Google Play 或你手机上的应用商店' },
    { title: '搜索「心动小镇」', desc: '搜索「心动小镇」或「Heartopia」' },
    { title: '点击安装', desc: '点击「安装」按钮，等待下载完成' },
    { title: '打开游戏', desc: '安装完成后点击「打开」启动游戏' },
  ],
  pc: [
    { title: '下载模拟器', desc: '推荐使用 BlueStacks 或 MuMu 模拟器' },
    { title: '安装模拟器', desc: '按照提示完成模拟器安装' },
    { title: '在模拟器中下载游戏', desc: '打开模拟器内置应用商店，搜索「心动小镇」安装' },
    { title: '配置键位', desc: '在模拟器设置中自定义操作键位以获得最佳体验' },
  ],
}

const links = {
  ios: 'https://apps.apple.com/app/heartopia/id0000000000',
  android: 'https://play.google.com/store/apps/details?id=com.heartopia',
  pc: 'https://www.bluestacks.com/',
}

const labels = {
  ios: '🍎 前往 App Store 下载',
  android: '🤖 前往 Google Play 下载',
  pc: '💻 下载 PC 模拟器',
}

const currentSteps = computed(() => stepsData[activePlatform.value])
const currentLink = computed(() => links[activePlatform.value])
const currentLabel = computed(() => labels[activePlatform.value])
</script>
