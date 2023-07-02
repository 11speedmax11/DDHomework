<template>
  <div
    class="dropdown"
    :class="[{ disabled: disabled }, { active: isActive }]"
    v-click-outside="closeMenu"
  >
    <CustomButton
      :xClass="xClass"
      :icon="icon"
      buttonStyle="secondary"
      :classButton="classButton"
      :svgHeight="svgHeight"
      :svgWidth="svgWidth"
      @click="toggle"
    >
      <span v-if="label"> {{ label }}</span>
      <img
        :class="imgClass"
        src="@/assets/images/profilPicture.png"
        width="24px"
        height="24px"
        v-if="imgClass"
      />
    </CustomButton>

    <div class="dropdown__menu" v-if="isActive">
      <div class="drop-down-menu__buttons">
        <CustomButton
          v-for="item in this.buttonsArr"
          :key="item.title"
          :buttonStyle="item.buttonStyle"
          :classButton="item.classButton"
          @click="click(item)"
          >{{ item.title }}</CustomButton
        >
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
export default {
  components: {
    CustomButton,
  },
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    label: String,
    icon: String,
    imgClass: String,
    classButton: String,
    xClass: String,
    svgWidth: String,
    svgHeight: String,
    buttonsArr: Array,
  },
  computed: {
    disabled() {
      return this.imgClass == undefined;
    },
  },

  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
    closeMenu() {
      this.isActive = false;
    },
    click(item) {
      this.isActive = false;
      this.$emit(item.click);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
