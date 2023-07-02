<template> 
  <div class="custom-select" :class="{ active: isDropdownOpen }"> 
    <div class="selected-option" @click="toggleDropdown"> 
      <div class="selected-text" :class="{ placeholder: !selectedOption }">
        {{ selectedOption || placeholder }}
      </div> 
      <SvgIcon :name="'vector'" svgClass="svg__select" /> 
    </div> 
    <ul class="options" v-show="isDropdownOpen"> 
      <li v-for="option in options" :key="option" @click="selectOption(option)"> 
        {{ option }} 
      </li> 
    </ul> 
  </div> 
</template> 
 
<script> 
import SvgIcon from "@/components/SvgIcon/SvgIcon.vue"; 
export default { 
  components: { 
    SvgIcon, 
  }, 
  data() { 
    return { 
      isDropdownOpen: false, 
      selectedOption: null, 
    }; 
  }, 
  props: { 
    options: Array, 
    placeholder: String, 
  }, 
  methods: { 
    toggleDropdown() { 
      this.isDropdownOpen = !this.isDropdownOpen; 
    }, 
    selectOption(option) { 
      this.selectedOption = option; 
      this.isDropdownOpen = false; 
      this.$emit("input", this.selectedOption); 
    }, 
  }, 
}; 
</script> 

<style lang="scss">
@import "./index.scss";
</style>
