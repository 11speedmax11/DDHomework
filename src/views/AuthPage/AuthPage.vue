<template>
  <div class="authorization">
    <div class="authorization__wrapper">
      <div class="authorization__header">
        <p>Вход</p>
      </div>
      <div class="authorization__input">
        <div class="authorization__login">
          <p>Логин<span>*</span></p>
          <InputField v-model="dataAuth.login" />
        </div>
        <div class="authorization__password">
          <p>Пароль<span>*</span></p>
          <InputField v-model="dataAuth.password" />
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
import {requests, updateHeaders} from "@/requests";
import { mapActions } from "vuex";
export default {
  components: {
    CustomButton,
    InputField,
  },
  data() {
    return {
      dataAuth: {
        login: null,
        password: null,
      },
    };
  },
  methods: {
    ...mapActions("app", ["setCurrentUser"]),
    openTaskList() {
      requests.getUser(this.dataAuth).then((response) => {
        localStorage.setItem("isAuthorized", true);
        localStorage.setItem("tokenUser", response);
        updateHeaders();
        requests.getCurrentUser().then((data) => {
          this.setCurrentUser(data);
          this.$router.push(`TaskList`);
        });
      });
    },
    searchTasks() {},
  },
};
</script> 
 
<style lang="scss" scoped>
@import "./index.scss";
</style>
