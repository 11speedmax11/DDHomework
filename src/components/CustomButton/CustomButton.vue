<template>
  <button
    :class="classButton"
    type="button"
    @click="$emit('click')"

  >
    <slot></slot>
    <div class="header__icon">
      <SvgIcon
        :name="icon"
        :svgClass="xClass"
        v-if="icon"
        :svgHeight="svgHeight"
        :svgWidth="svgWidth"
      />
    </div>
  </button>
</template>

<script>
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

export default {
  name: "CustomButton",
  props: {
    icon: String,
    xClass: String,
    classButton: {
      type: String,
      default: "button",
    },
    svgWidth: String,
    svgHeight: String,
  },
  components: {
    SvgIcon,
  },

};
</script>

<style lang="scss">
@import "./index.scss";
</style>