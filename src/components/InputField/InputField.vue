<template>
  <div class="input-custom" :class="{ isSearch: isSearch }">
    <input
      class="input"
      :value="valueNow"
      :placeholder="placeholder"
      @input="input($event)"
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
      valueNow: this.value,
    };
  },

  methods: {
    input($event) {
      this.isFill = $event.target.value.length > 0 && this.isClear;
      this.valueNow = $event.target.value;
      this.$emit("input", $event.target.value);
    },
    click() {
      this.isFill = false;
      this.valueNow = "";
      this.$emit("search", "");
    },
    search(){
      this.$emit("search", this.valueNow);
    }
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
