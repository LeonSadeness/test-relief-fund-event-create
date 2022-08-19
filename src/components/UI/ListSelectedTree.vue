<template>
  <div>
    <div class="sequence" v-for="(sequence, i) in valueData" :key="`${name}-lsi-${i}`">
      <div v-for="(value, j) in sequence.values" :key="`${name}-lsi-${j}`">
        {{ value }}
      </div>
      <CrossAndArrowSVG arrow />
      <CrossAndArrowSVG />
    </div>
  </div>
</template>

<script>
import { CreateOptionsAsync, FindNode, GetSequence } from "@/lib/TreeUtilities";
import CrossAndArrowSVG from '../vectors/CrossAndArrowSVG.vue';

export default {
  components: { CrossAndArrowSVG },
  props: {
    value: Array,
    options: Array,
  },
  data() {
    return {
      name: "lst-" + Date.now(),
      staticOptions: null,
    };
  },
  async created() {
    let data = [
      {
        id: 1,
        name: "Дети",
        groups: [
          {
            id: 2,
            name: "Имеющие редкие заболевания",
            groups: [
              {
                id: 3,
                name: "Spina Bifida",
                groups: [],
              },
              {
                id: 4,
                name: "Буллёзный эпидермолиз",
                groups: [],
              },
            ],
          },
          {
            id: 5,
            name: "С инвалидностью",
            groups: [],
          },
        ],
      },
      {
        id: 6,
        name: "Профессиональные сообщества",
        groups: [],
      },
    ];
    this.staticOptions = await CreateOptionsAsync(data);
  },
  computed: {
    isNoOptions() {
      let result = this.staticOptions?.length > 0;
      return !result;
    },
    valueData() {
      let result = [];

      if (!this.isNoOptions) {
        for (let i = 0; i < this.value.length; i++) {
          const item = this.value[i];
          let node = FindNode(item, this.staticOptions);
          let sequence = GetSequence(node);
          result.push(sequence);

          if (node.level > 0) {
            i += node.level;
          }
        }
      }

      return result;
    },
  },
  methods: {},
};
</script>


<style scoped>
.sequence{
    display: flex;
    gap: 10px;
    
}
.sequence-item{

}
</style>