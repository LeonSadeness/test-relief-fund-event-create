<template>
  <section class="home">
    <h1>Создание сбора</h1>

    <form class="form-event-create">
      <!-- Brand name -->
      <section class="form-section">
        <p class="h3 h-brand">Информация о сборе</p>
        <p class="label-1 label-brand">Название сбора</p>
        <InputUI class="input-brand" />
      </section>

      <!-- Targets groups -->
      <section class="form-section">
        <p class="h3 h-targets-groups">Целевые группы</p>
        <p class="label-1 label-targets-groups">
          Укажите, кому помогает ваша организация
        </p>
        <ListSelectedTree :value="[4, 2, 1, 6]" class="list-tree-targets-groups" />
        <SelectTree />
      </section>

      <!-- Separator -->
      <hr />

      <ButtonForm
        type="button"
        @click="processing = !processing"
        :processing="processing"
        class="form-btn"
        >сохранить и продолжить</ButtonForm
      >
    </form>
  </section>
</template>

<script>
import InputUI from "@/components/UI/InputUI.vue";
import SelectTree from "@/components/UI/SelectTree.vue";
import ButtonForm from "@/components/UI/ButtonForm.vue";
import ListSelectedTree from "@/components/UI/ListSelectedTree.vue";
export default {
  components: { InputUI, SelectTree, ButtonForm, ListSelectedTree },
  data() {
    return {
      listSelectedTreeValue: [4, 2, 1, 6],
      processing: false,
      form: "",
    };
  },
};
</script>

<style scoped>
.home {
  padding: 53px 60px;
  display: flex;
  flex-direction: column;
  gap: 35px;
}
.form-event-create {
  display: flex;
  flex-direction: column;
  gap: 54px;
  padding: 42px 65px;
  border-radius: 10px;
  border: var(--primary-border);
}

.form-section {
  display: flex;
  flex-direction: column;
}

/* #region Brand */
.h-brand {
  margin-bottom: 54px;
}
.label-brand {
  margin-bottom: 24px;
}
.input-brand {
  max-width: 960px;
}
/* #endregion */

/* #region Targets groups */
.h-targets-groups {
  margin-bottom: 34px;
}
.label-targets-groups {
  margin-bottom: 54px;
}
.list-tree-targets-groups {
  margin-bottom: 60px;
}
/* #endregion */

.form-btn {
  text-transform: uppercase;
}
</style>
