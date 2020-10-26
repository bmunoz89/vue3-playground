<template>
  <h3 class="text">Hello world</h3>
  <button @click="toggleColor">Press me</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const color = ref<string>('red')

    function toggleColor(): void {
      color.value = (color.value === 'red') ? 'blue' : 'red'
    }

    return {
      color,
      toggleColor,
    }
  },
})
</script>

<style vars="{ color }" lang="scss" scoped>
.text {
  color: var(--color);
}
</style>
