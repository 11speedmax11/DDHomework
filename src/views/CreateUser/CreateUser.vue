<template>
  <div class="main">
    <div class="create-user">
      <div class="create-user__wrapper">
        <header class="create-user__header">Создание профиля сотрудника</header>

        <div class="create-user__line"></div>
        <div class="create-user__body">
          <section>
            <div class="create-user__field">
              <div class="create-user__title">
                <div class="">ФИО <span class="create-user__star">*</span></div>
              </div>
              <div class="create-user__value">
                <InputField
                  v-model="name"
                  :placeholder="'Введите ФИО'"
                ></InputField>
              </div>
            </div>

            <div class="create-user__field">
              <div class="create-user__title">
                <div class="">
                  Логин <span class="create-user__star">*</span>
                </div>
              </div>
              <div class="create-user__value">
                <InputField
                  v-model="login"
                  :placeholder="'Введите логин'"
                ></InputField>
              </div>
            </div>

            <div class="create-user__field">
              <div class="create-user__title">
                <div class="">
                  Пароль <span class="create-user__star">*</span>
                </div>
              </div>
              <div class="create-user__value">
                <InputField
                  v-model="password"
                  :placeholder="'Введите пароль'"
                ></InputField>
              </div>
            </div>

            <div class="create-task__field">
              <div class="create-task__title">
                <div class="">О себе</div>
              </div>
              <div class="create-task__value">
                <textarea
                  class="create-task__textarea"
                  v-model="about"
                  :placeholder="'Введите текст'"
                ></textarea>
              </div>
            </div>

            <div class="create-user__field">
              <div class="create-user__title">
                <div class="">
                  Фото <span class="create-user__star">*</span>
                </div>
              </div>
              <div class="create-user__value">
                <InputField
                  v-model="photo"
                  :placeholder="'Введите пароль'"
                  typeInput="file"
                ></InputField>
              </div>
            </div>
          </section>

          <section>
            <div class="create-user__field">
              <div class="create-user__title">
                <div class="">Активен</div>
              </div>
              <ValueSwitch :isActive="isActive" @switched="switched" />
            </div>
            <div class="create-user__field">
              <div>
                <div>
                  <input type="radio" v-model="selectedRole" value="USER" />
                  Пользователь
                </div>
                <div class="create-user__role">
                  <input type="radio" v-model="selectedRole" value="ADMIN" />
                  Администратор
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="create-user__line"></div>
        <div class="create-user__buttons">
          <CustomButton
            buttonStyle="secondary"
            classButton="create-user__back"
            @click="cancel"
          >
            Отмена
          </CustomButton>
          <CustomButton classButton="create-user__create" @click="createUser">
            Создать профиль
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import InputField from "@/components/InputField/InputField.vue";
import ValueSwitch from "@/components/ValueSwitch/ValueSwitch.vue";
import requests from "@/requests";

export default {
  components: {
    CustomButton,
    InputField,
    ValueSwitch,
  },
  data() {
    return {
      name: "",
      login: "",
      password: "",
      about: null,
      photo: null,
      selectedRole: "USER",
      isActive: true,
    };
  },
  mounted() {
  },
  methods: {

    createUser() {
      requests
        .addUser({
          name: this.name,
          login: this.login,
          password: this.password,
        })
        .then((data) => {
          console.log(data)
          requests
            .editUser({
              _id: data._id,
              name: this.name,
              description: this.about,
              roles: this.selectedRole,
            })
            .then((data) => {
              console.log(data);
            });
        });
    },
    cancel() {
      this.$router.go(-1);
    },
    switched() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>