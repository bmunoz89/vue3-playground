<template>
  <h3 class="text">Hello world</h3>
  <button @click="toggleColor">Press me</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

export const color = ref<string>('red')

export function toggleColor(): void {
  color.value = (color.value === 'red') ? 'blue' : 'red'
}
</script>

<style vars="{ color }" lang="scss" scoped>
.text {
  color: var(--color);
}
</style>
