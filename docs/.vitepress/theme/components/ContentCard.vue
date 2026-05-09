<template>
  <div class="content-card">
    <div class="card-image">
      <span>🖼️ {{ image || '截图占位' }}</span>
    </div>
    <div class="card-body">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <div v-if="requirements && requirements.length" style="margin-top:0.5rem;">
        <span
          v-for="req in requirements"
          :key="req"
          style="display:inline-block; padding:0.15rem 0.5rem; background:var(--vp-c-bg-alt); border-radius:0.5rem; font-size:0.75rem; margin-right:0.35rem; margin-bottom:0.25rem;"
        >{{ req }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  image: { type: String, default: '' },
  description: { type: String, default: '' },
  requirements: { type: Array, default: () => [] },
})
</script>
