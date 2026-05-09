<template>
  <div style="max-width:700px; margin:0 auto; padding:1rem;">
    <h3>{{ t('codes.howToRedeem') }}</h3>
    <div v-for="(step, i) in steps" :key="i" class="download-step">
      <span class="step-num">{{ i + 1 }}</span>
      <div>
        <strong>{{ step.title }}</strong>
        <p style="margin:0.25rem 0 0; color:var(--vp-c-text-2);">{{ step.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from '../i18n'
const { t, locale } = useI18n()

const stepsData = {
  en: [
    { title: 'Open the Game', desc: 'Launch Heartopia and log into your account.' },
    { title: 'Open Settings', desc: 'Tap the gear icon in the top-right corner of the main screen.' },
    { title: 'Find Gift Code', desc: 'Select "Gift Code" from the settings menu.' },
    { title: 'Enter the Code', desc: 'Type or paste the code exactly as shown — case-sensitive.' },
    { title: 'Confirm & Claim', desc: 'Tap Confirm — rewards are sent directly to your inventory.' },
  ],
  zh: [
    { title: '打开游戏', desc: '启动心动小镇并登录你的账号。' },
    { title: '进入设置', desc: '点击游戏主界面右上角的「设置」按钮（齿轮图标）。' },
    { title: '找到兑换入口', desc: '在设置菜单中选择「兑换码」选项。' },
    { title: '输入兑换码', desc: '在输入框中准确输入兑换码（注意区分大小写）。' },
    { title: '确认领取', desc: '点击「确认」按钮，奖励将自动发放到你的背包。' },
  ],
}

const steps = computed(() => stepsData[locale.value] || stepsData.en)
</script>
