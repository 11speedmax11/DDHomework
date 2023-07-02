<template>
  <div class="authorization">
    <div class="authorization__wrapper">
      <div class="authorization__header">
        <p>Вход</p>
      </div>
      <div class="authorization__input">
        <div class="authorization__login">
          <p>Логин<span>*</span></p>
          <InputField />
        </div>
        <div class="authorization__password">
          <p>Пароль<span>*</span></p>
          <InputField />
        </div>
      </div>
      <div class="authorization__entry">
        <CustomButton @click="openTaskList">Войти</CustomButton>
      </div>
    </div>
  </div>
</template> 
<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import InputField from "@/components/InputField/InputField.vue";

export default {
  components: {
    CustomButton,
    InputField,
  },
  methods: {
    openTaskList() {
      localStorage.setItem('isAuthorized', true)
      this.$router.push(`TaskList`);
    },
  },
};
</script> 
 
<style lang="scss" scoped>
@import "./index.scss";
</style>
