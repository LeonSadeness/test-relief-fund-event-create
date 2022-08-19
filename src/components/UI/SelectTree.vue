<template>
  <div class="container-tree">
    <button class="add-btn">
      <div class="add-btn-plus">
        <Cross90SVG />
      </div>
      <p>Выбрать еще</p>
    </button>
  </div>
</template>



<script>
import Cross90SVG from "../vectors/Cross90SVG.vue";

export default { components: { Cross90SVG } };
</script>

<style scoped>
.container-tree {
}

/* #region Add button */
.add-btn {
  font-size: 20px;
  line-height: 25px;
  border-radius: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  padding-right: 20px;
  transition: background 0.2s ease-out;
}
.add-btn:hover {
  background: var(--primary);
}
.add-btn-plus {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  padding: 10px;
  border: var(--primary-border);
}

/* #endregion */
</style>