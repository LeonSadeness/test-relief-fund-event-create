<template>
  <div class="layout">
    <HeaderApp />
    <div class="layout-container">
      <aside class="aside-panel">
        <router-link to="/" class="aside-panel-link">
          <FourPointsSVG />
          Панель управления
        </router-link>
        <router-link to="/about" class="aside-panel-link">
          <PersonSVG />
          About
        </router-link>
      </aside>
      <main class="main-content">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";
import FourPointsSVG from "@/components/vectors/FourPointsSVG.vue";
import PersonSVG from "@/components/vectors/PersonSVG.vue";
export default {
  components: {
    HeaderApp,
    FourPointsSVG,
    PersonSVG,
  },
};
</script>>

<style scoped>
.layout {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.layout-container {
  flex-grow: 1;
  display: flex;
}
.aside-panel {
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 50px;
  width: 360px;
  background: var(--primary);
  border-right: var(--primary-border);
  flex-grow: 0;
  flex-shrink: 0;
}
.aside-panel-link {
  color: black;
  cursor: pointer;
  display: flex;
  gap: 30px;
  font-family: var(--font-futurabook);
  font-weight: 400;
  font-size: 17px;
  transition: background 0.2s ease-out;
  padding: 10px;
  border-radius: 2px;
  margin-left: -10px;
}
.aside-panel-link:hover {
  background: #dbdbdb;
}

.main-content{
  flex-grow: 1;
}
</style>
