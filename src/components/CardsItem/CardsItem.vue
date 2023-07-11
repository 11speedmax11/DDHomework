<template>
  <section class="card">
    <ul class="card__list">
      <li class="card__item">
        <div class="card__base">
          <div class="card__head">
            <p class="card__name" @click="openCard(item._id)">
              {{ item.name }}
            </p>
            <img
              :class="classImg"
              src="@/assets/images/profilPicture.png"
              alt="Аватар исполнителя"
              v-if="classImg"
            />
          </div>

          <div class="card__body">
            <p class="card__content">
              <span class="card__number">{{ item._id }}</span
              >{{ userName }} создал {{ timeCreat }}
              <StatusTask :name="item.status" v-if="item.status" />
            </p>
            <p class="card__chang">{{ timeEdit }}</p>
          </div>
        </div>
        <div class="card__menu">
          <DropDownButton
            :classButton="'card__icon'"
            icon="dots"
            xClass="card__svg"
            @edit="$emit('edit')"
            @delete="$emit('delet')"
            :buttonsArr="[
              {
                buttonStyle: 'dropDown',
                classButton: 'card__edit',
                click: 'edit',
                title: 'Редактировать',
              },
              {
                buttonStyle: 'dropDown',
                classButton: 'card__delete',
                click: 'delete',
                title: 'Удалить',
              },
            ]"
          >
          </DropDownButton>
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
import DropDownButton from "@/components/DropDownButton/DropDownButton.vue";
import StatusTask from "@/components/StatusTask/StatusTask.vue";
import { mapGetters } from "vuex";

export default {
  name: "CardsItem",
  props: {
    item: Object,
    classImg: String,
  },
  components: {
    DropDownButton,
    StatusTask,
  },
  computed: {
    userName() {
      return this.getUserName(this.item.author);
    },
    timeCreat() {
      return this.getDate(this.item.dateCreated);
    },
    timeEdit() {
      return this.getDate(this.item.dateEdited);
    },
  },
  methods: {
    ...mapGetters("app", ["userList"]),
    openCard(id) {
      this.$router.push({
        path:`TaskList/${id}`,
        params: {
          taskData: this.item,
        },
      });
    },
    getUserName(id) {
      let parts = this.userList()
        .find((x) => (x._id = id))
        .name.split(" ");
      let lastName = parts[0];
      let firstName = parts[1].charAt(0).toUpperCase() + ".";
      let patronymic = "";

      if (parts.length > 2) {
        patronymic = parts[2].charAt(0).toUpperCase() + ".";
      }

      return lastName + " " + firstName + patronymic;
    },
    getDate(dateString) {
      const months = [
        "янв",
        "фев",
        "мар",
        "апр",
        "май",
        "июн",
        "июл",
        "авг",
        "сен",
        "окт",
        "ноя",
        "дек",
      ];

      const date = new Date(dateString);
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      return `${day} ${month} ${year} в ${hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }`;
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>