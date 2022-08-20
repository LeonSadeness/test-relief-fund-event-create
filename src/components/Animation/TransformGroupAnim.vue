<template>
  <transition-group name="g-list" tag="div" class="g-list">
    <slot />
  </transition-group>
</template>

<style>
.g-list {
  overflow-x: hidden;
}
.g-list-enter-active {
  transition: all 0.4s;
}
.g-list-leave-active {
  transition: all 0.4s;
  position: absolute;
}
.g-list-enter,
.g-list-leave-to {
  opacity: 0;
  transform: translateX(15px);
}
.g-list-move {
  transition: transform 0.4s;
}
</style>