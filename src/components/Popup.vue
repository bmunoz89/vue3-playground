<template>
  <div>
    <div id="open-modal" :class="{ show, 'modal-window': true }">
      <div>
        <a @click="show = false" title="Close" class="modal-close">Close</a>
        <h1>{{ title }}</h1>
        <div>
          <slot></slot>
        </div>
        <div>
          <small>{{ sub }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    sub: {
      type: String,
      required: true,
    },
  },
  setup() {
    const show = ref(false)

    return {
      show,
    }
  },
})
</script>

<style lang="scss" scoped>
.modal-window div:not(:last-of-type) {
  margin-bottom: 15px;
}
.modal-window {
  position: fixed;
  background-color: rgba(150, 150, 150, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
  &:target {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
  & > div {
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2em;
    background: #ffffff;
  }
  header {
    font-weight: bold;
  }
  h1 {
    font-size: 150%;
    margin: 0 0 15px;
  }
}
small {
  color: #aaa;
}
.show {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}
.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
  &:hover {
    color: black;
    cursor: pointer;
  }
}
</style>
