<template>
  <div>
    <h3 v-if="title" style="margin-bottom:0.75rem;">{{ title }}</h3>
    <div class="step-bar">
      <template v-for="(step, i) in steps" :key="i">
        <div :class="['step-item', step.status]">
          <div class="step-circle">{{ step.status === 'done' ? '✓' : i + 1 }}</div>
          <span class="step-label">{{ step.label }}</span>
        </div>
        <div v-if="i < steps.length - 1" class="step-line"></div>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  steps: { type: Array, required: true },
})
</script>
