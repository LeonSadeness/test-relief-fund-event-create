<template>
  <div class="container-tree" :id="name">
    <!-- Add Button -->
    <button type="button" @click="Toggle" class="add-btn">
      <div class="add-btn-plus">
        <Cross90SVG />
      </div>
      <p>Выбрать еще</p>
    </button>

    <!-- Menu -->
    <div v-show="isExpanded && nodeList.length > 0" class="list-tree shadow-md">
      <TransformGroupAnim>
        <div
          v-if="selectNode"
          :key="`back-btn`"
          @click="SelectPrevNode(selectNode)"
          class="list-tree-item-back"
        >
          <DropdownSVG class="dropdown-svg rotate-left" />
          <span class="truncate">{{ selectNode.value }}</span>
        </div>
        <div
          v-if="isShowAllOption"
          :key="`all-btn`"
          @click="SelectAllNode(selectNode)"
          class="list-tree-item"
        >
          <span class="truncate">Все</span>
        </div>
        <div
          @click="SelectNextNode(item)"
          class="list-tree-item"
          v-for="item in nodeList"
          :key="`${name}-nul-${item.id}`"
        >
          <span class="truncate">{{ item.value }}</span>
          <DropdownSVG v-if="!item.isLast" class="dropdown-svg rotate-right" />
        </div>
      </TransformGroupAnim>
    </div>
  </div>
</template>

<script>
import {
  FilterNodes,
  GetSequence,
  GetChildSequences,
} from "@/lib/TreeUtilities";
import Cross90SVG from "@/components/vectors/Cross90SVG.vue";
import DropdownSVG from "@/components/vectors/DropdownSVG.vue";
import TransformGroupAnim from "../Animation/TransformGroupAnim.vue";

export default {
  components: { Cross90SVG, DropdownSVG, TransformGroupAnim },
  props: {
    options: Array,
    value: Array,
    disabled: Boolean,
    allOption: Boolean,
  },
  data() {
    return {
      name: "stc-" + Date.now(),
      isExpanded: false,
      selectNode: null,
    };
  },
  computed: {
    isShowAllOption() {
      let result = this.allOption;
      result &&= this.selectNode;

      return result;
    },
    optionsData() {
      let result = FilterNodes(this.value, this.options);
      return result;
    },
    nodeList() {
      if (!this.selectNode) return this.optionsData;
      return this.selectNode.children;
    },
  },
  methods: {
    SelectAllNode(node) {
      this.Toggle();
      let childSequences = GetChildSequences(node);
      let result = [...this.value];
      for (let i = 0; i < childSequences.length; i++) {
        const item = childSequences[i];
        result.push(...item.ids);
      }
      this.$emit("input", result);
    },
    SelectPrevNode(node) {
      if (!node?.parent) {
        this.selectNode = null;
      } else {
        this.selectNode = node.parent;
      }
    },
    SelectNextNode(node) {
      if (!node.isLast) {
        this.selectNode = node;
      } else {
        this.Toggle();
        let sequence = GetSequence(node);
        let result = [...this.value, ...sequence.ids];
        this.$emit("input", result);
      }
    },

    // #region Toggle
    WatchClickOutside() {
      let outsideClickListener = (event) => {
        let path = event.path || (event.composedPath && event.composedPath());
        if (!path.find((el) => el.id == this.name)) {
          this.isExpanded = false;
          this.selectNode = null;
          document.removeEventListener("click", outsideClickListener);
        }
      };
      document.addEventListener("click", outsideClickListener);
    },
    Toggle() {
      if (this.disabled) return;

      this.isExpanded = !this.isExpanded;

      if (this.isExpanded) {
        this.WatchClickOutside();
      } else {
        this.selectNode = null;
      }
    },
    // #endregion
  },
};
</script>

<style scoped>
/* #region SVG */
.dropdown-svg {
  fill: #999;
  height: 10px;
}
.rotate-right {
  transform: rotate(-90deg);
}
.rotate-left {
  transform: rotate(90deg);
}
/* #endregion */

.container-tree {
  position: relative;
  max-width: max-content;
}

.list-tree {
  background: white;
  position: absolute;
  bottom: 50px;
  width: 340px;
  max-height: 800px;
  border-radius: 5px;
  border: var(--primary-border);
  display: flex;
  flex-direction: column;
}
.list-tree-item,
.list-tree-item-back {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 15px 20px;
  flex-grow: 0;
  background: white;
  transition: all 0.2s ease-out;
  cursor: pointer;
  font-size: 20px;
  line-height: 25px;
}
.list-tree-item:hover,
.list-tree-item-back:hover {
  background: #dbdbdb;
}
.list-tree-item-back {
  color: #999;
  justify-content: left;
}

/* #region Add button */
.add-btn {
  height: 40px;
  font-size: 20px;
  line-height: 25px;
  border-radius: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  padding-right: 20px;
  transition: background 0.2s ease-out;
  white-space: nowrap;
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
  flex-grow: 0;
  flex-shrink: 0;
}

/* #endregion */
</style>