<template>
  <div id="app">
    <component :is="layoutComponent">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    layoutComponent() {
      let layoutName = this.$route.meta.layout || "DefaultLayout";
      let result = () => import(`@/layouts/${layoutName}.vue`);

      return result;
    },
  },
};
</script>

<style>

</style>
