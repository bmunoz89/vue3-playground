<template>
  <portal target="#portal-target">
    <Popup ref="popup" :title="'Popup title'" :sub="'Boris Muñoz'">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dicta nam iste provident illum
      delectus omnis sequi blanditiis amet praesentium deserunt reiciendis asperiores, repudiandae
      neque! Nulla libero veritatis iure nesciunt?
    </Popup>
  </portal>
  <button class="btn" @click="popup.show = !popup.show">Open Modal</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Popup from '@/components/Popup.vue'

export default defineComponent({
  name: 'Vue portal',
  components: {
    Popup,
  },
  setup() {
    const popup = ref(Popup)

    return { popup }
  },
})
</script>

<style lang="scss" scoped>
.btn {
  font-size: 18px;
  background-color: #fff;
  padding: 1em 1.5em;
  border-radius: 3px;
  text-decoration: none;
  i {
    padding-right: 0.3em;
  }
}
</style>
