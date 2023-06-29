<template>
  <header class="header">
    <nav class="navigation">
      <CustomButton classButton="navigation__item" @click="selectTab('ProjectList')">Проекты</CustomButton>
      <CustomButton classButton="navigation__item" @click="selectTab('TaskList')">Задачи</CustomButton>
      <CustomButton classButton="navigation__item" @click="selectTab('UserList')">Пользователи</CustomButton>
    </nav>
    <DropDownButton
      :imgClass="'header__img'"
      :classButton="'header__button'"
      icon="vector"
      :svgHeight="'8px'"
      :svgWidth="'13px'"
      xClass="header__svg"
    >
      <CustomButton classButton="header__profile"  @click="selectTab('UserProfile')">Профиль</CustomButton>
      <CustomButton classButton="header__exit">Выход</CustomButton>
    </DropDownButton>
  </header>
</template>

<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import DropDownButton from "@/components/DropDownButton/DropDownButton.vue";

export default {
  name: "NavigationMenu",
  components: {
    CustomButton,
    DropDownButton,
  },
  methods: {
    selectTab(tab) {
      this.$emit("tabSelected", tab);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
