<template>
  <div>
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">{{ labels.name }}</label>
        <input id="name" v-model="form.name" type="text" :placeholder="placeholders.name" required />
        <p v-if="errors.name" class="form-error">{{ errors.name }}</p>
      </div>

      <div class="form-group">
        <label for="email">{{ labels.email }}</label>
        <input id="email" v-model="form.email" type="email" :placeholder="placeholders.email" required />
        <p v-if="errors.email" class="form-error">{{ errors.email }}</p>
      </div>

      <div class="form-group">
        <label for="subject">{{ labels.subject }}</label>
        <input id="subject" v-model="form.subject" type="text" :placeholder="placeholders.subject" />
      </div>

      <div class="form-group">
        <label for="message">{{ labels.message }}</label>
        <textarea id="message" v-model="form.message" :placeholder="placeholders.message" required></textarea>
        <p v-if="errors.message" class="form-error">{{ errors.message }}</p>
      </div>

      <button type="submit" class="submit-btn" :disabled="submitting">
        {{ submitting ? texts.submitting : texts.submit }}
      </button>
    </form>

    <div v-if="toast.show" :class="['toast', toast.type]">
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue'
import { useI18n } from '../i18n'
const { locale } = useI18n()

const FORMSPREE_ID = 'mykonvvn'

const form = reactive({ name: '', email: '', subject: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const submitting = ref(false)
const toast = reactive({ show: false, type: 'success', message: '' })

const formText = {
  en: {
    labels: { name: 'Your Name *', email: 'Email Address *', subject: 'Subject', message: 'Message *' },
    placeholders: { name: 'Enter your name', email: 'your@email.com', subject: 'Subject (optional)', message: 'Describe your issue or suggestion in detail...' },
    texts: { submit: 'Send Feedback', submitting: 'Submitting...' },
    errors: {
      name: 'Please enter your name',
      email: 'Please enter your email',
      emailInvalid: 'Please enter a valid email address',
      message: 'Please enter your message',
      messageShort: 'Message must be at least 10 characters',
    },
    toast: { success: '✅ Feedback sent! We\'ll get back to you soon.', error: '❌ Send failed. Please try again.', network: '❌ Network error. Please check your connection.' },
  },
  zh: {
    labels: { name: '你的名字 *', email: '邮箱地址 *', subject: '主题', message: '反馈内容 *' },
    placeholders: { name: '请输入你的名字', email: 'your@email.com', subject: '反馈主题（可选）', message: '请详细描述你的问题或建议...' },
    texts: { submit: '发送反馈', submitting: '提交中...' },
    errors: {
      name: '请输入你的名字',
      email: '请输入邮箱地址',
      emailInvalid: '请输入有效的邮箱地址',
      message: '请输入反馈内容',
      messageShort: '反馈内容至少需要10个字符',
    },
    toast: { success: '✅ 反馈已发送！我们会尽快回复你。', error: '❌ 发送失败，请稍后再试。', network: '❌ 网络错误，请检查网络连接后重试。' },
  },
}

const texts = computed(() => formText[locale.value] || formText.en)
const labels = computed(() => texts.value.labels)
const placeholders = computed(() => texts.value.placeholders)

function validate() {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = texts.value.errors.name
    valid = false
  }
  if (!form.email.trim()) {
    errors.email = texts.value.errors.email
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = texts.value.errors.emailInvalid
    valid = false
  }
  if (!form.message.trim()) {
    errors.message = texts.value.errors.message
    valid = false
  } else if (form.message.trim().length < 10) {
    errors.message = texts.value.errors.messageShort
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
        subject: form.subject || 'No subject',
        message: form.message,
      }),
    })

    if (res.ok) {
      showToast('success', texts.value.toast.success)
      form.name = ''
      form.email = ''
      form.subject = ''
      form.message = ''
    } else {
      showToast('error', texts.value.toast.error)
    }
  } catch (e) {
    showToast('error', texts.value.toast.network)
  } finally {
    submitting.value = false
  }
}
</script>
