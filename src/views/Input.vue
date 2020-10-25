<template>
  <BaseInput v-model="email" label="Email:" type="email" @blur="email = 'blurrr@its.cold'" />
  <pre>{{ email }}</pre>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseInput from '@/components/BaseInput.vue'

export default defineComponent({
  name: 'Input',
  components: {
    BaseInput,
  },
  setup() {
    const email = ref('')

    return {
      email,
    }
  },
})
</script>

<style lang="scss" scoped></style>
