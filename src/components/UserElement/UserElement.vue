<template>
  <div class="user">
    <img
      :class="imgClass"
      src="@/assets/images/profilPicture.png"
      width="24px"
      height="24px"
    />
    <p class="uset__name">{{ getName }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import _ from "lodash";
export default {
  props: {
    id: String,
    imgClass: String,
  },
  computed: {
    ...mapGetters("app", ["userList"]),
    currentUser() {
      let user = _.cloneDeep(this.userList).find((x) => x._id == this.id);
      if (user) {
        return user;
      } else {
        return user;
      }
    },
    getName() {
      let parts = this.currentUser.name.split(" ");
      let lastName = parts[0];
      let firstName = "";
      if (parts.length > 1) {
        firstName = parts[1].charAt(0).toUpperCase() + ".";
      }

      let patronymic = "";

      if (parts.length > 2) {
        patronymic = parts[2].charAt(0).toUpperCase() + ".";
      }

      return lastName + " " + firstName + patronymic;
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
