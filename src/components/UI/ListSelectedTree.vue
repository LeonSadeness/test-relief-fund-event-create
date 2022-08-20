<template>
  <div class="sequencees">
    <div
      class="sequence"
      v-for="(sequence, i) in valueData"
      :key="`${name}-lsi-${i}`"
    >
      <div
        class="sequence-item"
        v-for="(value, j) in sequence.values"
        :key="`${name}-lsi-${j}`"
      >
        {{ value }}
        <CrossAndArrowSVG
          v-show="j < sequence.values.length - 1"
          class="sequence-svg arrow"
          arrow
        />
      </div>
      <ButtonIcon @click="DeleteSequence(sequence)" type="button" sm>
        <CrossAndArrowSVG class="sequence-svg cross" />
      </ButtonIcon>
    </div>
  </div>
</template>

<script>
import { GetSequences } from "@/lib/TreeUtilities";
import CrossAndArrowSVG from "../vectors/CrossAndArrowSVG.vue";
import ButtonIcon from "./ButtonIcon.vue";

export default {
  components: { CrossAndArrowSVG, ButtonIcon },
  props: {
    value: Array,
    options: Array,
  },
  data() {
    return {
      name: "lst-" + Date.now(),
    };
  },
  computed: {
    isNoOptions() {
      let result = this.options?.length > 0;
      return !result;
    },
    valueData() {
      if (!this.isNoOptions)
        return GetSequences(this.value ?? [], this.options);
    },
  },
  methods: {
    DeleteSequence(sequence) {
      let result = [];
      let filteredSequences = this.valueData?.filter(
        (i) => i.id !== sequence.id
      );
      for (let i = 0; i < filteredSequences.length; i++) {
        const item = filteredSequences[i];
        result.push(...item.ids);
      }

      this.$emit("input", result);
    },
  },
};
</script>


<style scoped>
.sequencees {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.sequence {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  line-height: 25px;
  background: var(--primary);
  padding: 5px 15px;
  border-radius: 20px;
  height: 40px;
  max-width: max-content;
}
.sequence-item {
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
}
.sequence-svg {
  fill: #999999;
}
.arrow {
  height: 10px;
}
</style>