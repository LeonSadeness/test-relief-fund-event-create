<template>
  <input
    v-bind="$attrs"
    v-on="listeners"
    class="custom-input"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {},
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
.custom-input {
  height: 50px;
  background: var(--primary);
  border: var(--primary-border);
  padding: 0 20px;
}
</style>