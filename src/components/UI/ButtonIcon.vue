<template>
  <button class="container-btn" v-bind="$attrs" v-on="listeners">
      <slot />
  </button>
</template>

<script>
import Hourglass from "../vectors/Hourglass.vue";
export default {
  components: { Hourglass },
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
</style>