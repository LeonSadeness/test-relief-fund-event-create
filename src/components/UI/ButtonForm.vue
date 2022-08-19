<template>
  <button class="container-btn" :disabled="disabled" v-on="listeners">
    <div :class="{ invisible: processing }">
      <slot />
    </div>
    <div
      :class="{ invisible: !processing }"
      class="processing-container"
      key="load"
      v-if="processing"
    >
      <Hourglass class="fill-current processing-svg" />
    </div>
  </button>
</template>

<script>
import Hourglass from "../vectors/Hourglass.vue";
export default {
  components: { Hourglass },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    processing: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners: function () {
      let result = Object.assign({}, this.$listeners, {});
      return result;
    },
  },
};
</script>

<style scoped>
.invisible {
  opacity: 0%;
  transition: opacity 0.2s ease-out;
}
.container-btn {
  position: relative;
  max-width: max-content;
  color: white;
  font-family: var(--font-futurademi);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  background: var(--secondary);
  height: 60px;
  display: flex;
  flex-direction: row;
  padding: 22px 40px 20px;
  transition: opacity 0.2s ease-out;
}
.container-btn:disabled {
  color: white;
  background: var(--primary-dark);
  cursor: auto;
}
.container-btn:hover {
  opacity: 75%;
}

.processing-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease-out;
}
.processing-svg {
  height: 25px;
  animation: bounce 0.8s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>