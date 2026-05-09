<template>
  <div>
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">你的名字 *</label>
        <input id="name" v-model="form.name" type="text" placeholder="请输入你的名字" required />
        <p v-if="errors.name" class="form-error">{{ errors.name }}</p>
      </div>

      <div class="form-group">
        <label for="email">邮箱地址 *</label>
        <input id="email" v-model="form.email" type="email" placeholder="your@email.com" required />
        <p v-if="errors.email" class="form-error">{{ errors.email }}</p>
      </div>

      <div class="form-group">
        <label for="subject">主题</label>
        <input id="subject" v-model="form.subject" type="text" placeholder="反馈主题（可选）" />
      </div>

      <div class="form-group">
        <label for="message">反馈内容 *</label>
        <textarea id="message" v-model="form.message" placeholder="请详细描述你的问题或建议..." required></textarea>
        <p v-if="errors.message" class="form-error">{{ errors.message }}</p>
      </div>

      <button type="submit" class="submit-btn" :disabled="submitting">
        {{ submitting ? '提交中...' : '发送反馈' }}
      </button>
    </form>

    <div v-if="toast.show" :class="['toast', toast.type]">
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

// 替换为你的 Formspree form ID: https://formspree.io/
const FORMSPREE_ID = 'mykonvvn'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const submitting = ref(false)
const toast = reactive({ show: false, type: 'success', message: '' })

function validate() {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = '请输入你的名字'
    valid = false
  }
  if (!form.email.trim()) {
    errors.email = '请输入邮箱地址'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = '请输入有效的邮箱地址'
    valid = false
  }
  if (!form.message.trim()) {
    errors.message = '请输入反馈内容'
    valid = false
  } else if (form.message.trim().length < 10) {
    errors.message = '反馈内容至少需要10个字符'
    valid = false
  }
  return valid
}

function showToast(type, message) {
  toast.show = true
  toast.type = type
  toast.message = message
  setTimeout(() => { toast.show = false }, 4000)
}

async function handleSubmit() {
  if (!validate()) return

  submitting.value = true
  try {
    const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        subject: form.subject || '无主题',
        message: form.message,
      }),
    })

    if (res.ok) {
      showToast('success', '✅ 反馈已发送！我们会尽快回复你。')
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    } else {
      showToast('error', '❌ 发送失败，请稍后再试。')
    }
  } catch (e) {
    showToast('error', '❌ 网络错误，请检查网络连接后重试。')
  } finally {
    submitting.value = false
  }
}
</script>
