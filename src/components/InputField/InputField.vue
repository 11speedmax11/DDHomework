<template>
  <div class="input-custom" :class="{ isSearch: isSearch }">
    <input
      class="input"
      :value="value"
      :placeholder="placeholder"
      @input="input($event)"
      :type="typeInput"
      @change="input($event)"
    />
    <SvgIcon
      name="clear"
      svgClass="svgClear"
      svgHeight="16px"
      svgWidth="16px"
      v-if="isFill"
      @click="click"
    />
    <SvgIcon @click="search" name="search" svgClass="svgSearch" v-if="isSearch" />
  </div>
</template>

<script>
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";
export default {
  props: {
    typeInput: String,
    value: {
      type: String,
      default: "",
    },
    placeholder: String,
    isClear: Boolean,
    isSearch: Boolean,
  },
  components: {
    SvgIcon,
  },
  data() {
    return {
      isFill: this.value && this.isClear,

    };
  },

  methods: {
    input($event) {
     
      this.isFill = $event.target.value.length > 0 && this.isClear;
      this.$emit("input", $event.target.value);
    },
    click() {
      this.isFill = false;
      this.$emit("input", "");
      this.$emit("search", "");
    },
    search(){
      this.$emit("search", this.value);
    }
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
