<template>
  <header class="header-app">
    <LogoSVG class="logo" />
    <div class="login-container">
      <Avatar :src="avatarIMG" />
      Екатерина
    </div>
  </header>
</template>

<script>
import avatarIMG from "@/assets/avatar_ellipse.png";
import LogoSVG from "@/components/vectors/LogoSVG.vue";
import Avatar from "@/components/UI/AvatarUI.vue";

export default {
  components: { LogoSVG, Avatar },
  data() {
    return {
      avatarIMG,
    };
  },
};
</script>

<style scoped>
.header-app {
  height: 120px;
  background: var(--primary);
  border-bottom: var(--primary-border);
  padding-left: 50px;
  padding-right: 60px;
  display: flex;
  justify-content: space-between;
  flex-grow: 0;
  flex-shrink: 0;
}
.logo {
  height: 35px;
  margin-top: 45px;
  flex-grow: 0;
}

.login-container {
  width: 240px;
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: var(--font-futurabook);
  font-size: 20px;
}
</style>