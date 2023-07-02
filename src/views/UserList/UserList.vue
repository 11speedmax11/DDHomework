<template>
<div class="main">
  <div class="user-list">
    <div class="user-list__search">
      <InputField placeholder='Поиск...' :isClear="true" :isSearch="true" />
      <CustomButton buttonStyle="secondary" classButton="user-list__add">
        Добавить
      </CustomButton>
    </div>
    <div class="user-list__item" v-for="user in this.listUsers" :key="user">
      <UserElement :name="user" />
    </div>
  </div>
  </div>
</template>
<script>
import InputField from "@/components/InputField/InputField.vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import UserElement from "@/components/UserElement/UserElement.vue";

export default {
  components: {
    UserElement,
    InputField,
    CustomButton,
  },
  data() {
    return {
      listUsers: [
        "Галанов М.Э.",
        "Иванов М.Э.",
        "Сидоров М.Э.",
        "Лавров М.Э.",
        "Петров М.Э.",
        "Галанов С.Э.",
      ],
    };
  },
  methods: {},
};
</script>

<style lang="scss" >
@import "./index.scss";
</style>