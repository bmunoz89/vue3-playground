<template>
  <label>{{ label }}</label>
  <input
    v-bind="{
      ...$attrs,
      onInput,
    }"
    :value="modelValue"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type $InputEvent = InputEvent & { target: HTMLInputElement }

export default defineComponent({
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    label: {
      type: String,
      default: null,
    },
  },
  setup(_props, { emit }) {
    const onInput = ($event: $InputEvent) => {
      emit('update:modelValue', $event.target.value)
    }

    return { onInput }
  },
})
</script>
