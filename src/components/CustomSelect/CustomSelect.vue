<template>
  <div class="custom-select" :class="[{ active: isDropdownOpen }]">
    <div class="selected-option" @click="toggleDropdown">
      <div class="selected-text">{{ selectedOption }}</div>
      <SvgIcon :name="'vector'" svgClass="svg__select" :svgHeight="'8px'" :svgWidth="'13px'"/>
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
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isDropdownOpen = false;
      this.onChange();
    },
    onChange() {
      this.$emit("input", this.selectedOption);
    },
  },
};
</script>

<style scoped>
.custom-select {
  position: relative;
  display: inline-block;
  padding: 10px;
}

.selected-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-color: #ffffff;
  padding: 10px 8px 10px 12px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  color: #8E8E8E;
}

.arrow-icon {
  width: 14px;
  height: 14px;
  fill: #333;
  transition: transform 0.3s;
}

.options {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #ffffff;
  padding: 8px 0;
  margin-top: 2px;
  margin-bottom: 0;
  display: none;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
}

.options li {
  padding: 8px 16px;
  cursor: pointer;
  list-style: none;
}

.options li:hover {
  background-color: #ECECEF;
}

.options li:first-child {
  margin-top: 8px;
}

.options li:last-child {
  margin-bottom: 8px;
}

.custom-select.active svg{
  transform: rotate(180deg);
}

.custom-select ul {
  display: block;
  z-index: 3;
}
</style>
