<template>
  <button :class="{ sm: sm }" class="container-btn" v-on="listeners">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    sm: {
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
.container-btn {
  flex-grow: 0;
  flex-shrink: 0;
  background: white;
  color: #999;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  transition: all 0.2s ease-out;
  border-radius: 40px;
}
.container-btn:hover:disabled, .container-btn:disabled {
  color: white;
  background: #ddd;
  cursor: default;
}
.container-btn:hover {
  background: var(--secondary);
  color: white;
}

.container-btn > svg {
  fill: currentColor;
}

.sm {
  height: 20px;
  width: 20px;
  padding: 5px;
}
</style>