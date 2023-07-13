<template>
  <div class="main">
    <div class="profile">
      <div class="profile__image">
        <div class="profile__img">
          <img
            src="@/assets/images/profile.png"
            alt="аватарка пользователя"
            width="300px"
            height="300px"
          />
        </div>
      </div>
      <div class="profile__body">
        <div class="profile__header">
          <div class="profile__title">
            <div class="profile__name">{{currentUser.name || ""}}</div>
            <div class="profile__status">{{currentUser.status || ""}}</div>
          </div>
          <div class="profile__dropdownmenu">
            <DropDownButton
              :classButton="'card__icon'"
              icon="dots"
              xClass="card__svg"
              @editPass="editPass"
              :buttonsArr="[
                {
                  buttonStyle: 'dropDown',
                  classButton: 'profile__edit',
                  click: editProfile,
                  title: 'Редактировать',
                },
                {
                  buttonStyle: 'dropDown',
                  classButton: 'profile__password',
                  click: 'editPass',
                  title: 'Изменить пароль',
                },
                {
                  buttonStyle: 'dropDown',
                  classButton: 'profile__tasks',
                  click: '',
                  title: 'Просмотр задач пользователя',
                },
              ]"
            ></DropDownButton>
          </div>
        </div>
        <div class="profile__about">
          <div class="profile__myself">О себе:</div>
          <div class="profile__text">
            {{currentUser.description || ""}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DropDownButton from "@/components/DropDownButton/DropDownButton.vue";
import requests from "@/requests";
import {  mapActions } from "vuex";
export default {
  name: "UserProfile",
  components: {
    DropDownButton,
  },
  data() {
    return {
      currentUser: {}
    }
  },
  methods: {
    ...mapActions("app", ["setCurrentModal"]),
    getCurrentUser() {
      requests.getCurrentUser()
      .then((user) => {
        this.currentUser = user
      })
    },
    editProfile() {

    },
    editPass() {
      this.setCurrentModal({
        isOpen: true,
        componentName: "EditPassModal",
        titleModal: "fdsaf",
        action: (pass) => {
          requests.editPass({
            _id: this.currentUser._id,
            password: pass
          })
        },
      });
    }
  },
  mounted() {
    this.getCurrentUser()
  }
};
</script>

<style lang="scss" >
@import "./index.scss";
</style>