<template>
  <section class="home">
    <h1>Создание сбора</h1>

    <form class="form-event-create">
      <!-- Brand name -->
      <section class="form-section">
        <p class="h3 h-brand">Информация о сборе</p>
        <p class="label-1 label-brand">Название сбора</p>
        <InputUI v-model="form.data.name" class="input-brand" />
      </section>

      <!-- Targets groups -->
      <section class="form-section">
        <p class="h3 h-targets-groups">Целевые группы</p>
        <p class="label-1 label-targets-groups">
          Укажите, кому помогает ваша организация
        </p>
        <ListSelectedTree
          v-model="form.data.groups"
          :options="targetsGroupsOptions.data"
          class="list-tree-targets-groups"
        />
        <SelectTree
          allOption
          v-model="form.data.groups"
          :options="targetsGroupsOptions.data"
        />
      </section>

      <!-- Separator -->
      <hr />

      <ButtonForm
        type="button"
        class="form-btn"
        :disabled="form.processing"
        :processing="form.processing"
        @click="Submit"
      >
        сохранить и продолжить
      </ButtonForm>
    </form>
  </section>
</template>

<script>
import { UseTargetsGroupsOptions } from "@/lib/API/TargetsGroups";
import { UseFormCreateEvent } from "@/lib/forms/CreateEvent";

import InputUI from "@/components/UI/InputUI.vue";
import SelectTree from "@/components/UI/SelectTree.vue";
import ButtonForm from "@/components/UI/ButtonForm.vue";
import ListSelectedTree from "@/components/UI/ListSelectedTree.vue";
import { GetSequences } from "@/lib/TreeUtilities";

export default {
  components: { InputUI, SelectTree, ButtonForm, ListSelectedTree },
  data() {
    return {
      targetsGroupsOptions: UseTargetsGroupsOptions(),
      form: UseFormCreateEvent(),
    };
  },
  created() {
    this.targetsGroupsOptions.Get();
  },
  methods: {
    Submit() {
      // #region Console output
      let selected = GetSequences(
        this.form.data.groups,
        this.targetsGroupsOptions.data
      );
      console.log(this.form.data.groups);
      console.log(
        "Юзер кликнул",
        selected?.map((i) => `"${i.values[i.values.length - 1]}"`)?.join(", и ")
      );
      // #endregion

      this.form.Post().then(this.form.Reset);
    },
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
