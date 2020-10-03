<template>
  <p>Count: {{ state.count }}</p>
  <p>Double: {{ state.double }}</p>
  <button @click="increment">Increment</button>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'Counter',
  components: {},
  setup() {
    const state: {
      count:number;
      double: number;
    } = reactive({
      count: 0,
      double: computed<number>(() => state.count * 2),
    })

    function increment() {
      state.count++
    }

    return { state, increment }
  },
})
</script>
