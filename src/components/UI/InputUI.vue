<template>
  <input
    v-bind="$attrs"
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