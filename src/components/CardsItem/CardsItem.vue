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
              >{{ item.author }} создал {{ item.dateCreated }}
              <StatusTask :name="item.code" v-if="item.code" />
            </p>
            <p class="card__chang">{{ item.dateEdited }}</p>
          </div>
        </div>
        <div class="card__menu">
          <DropDownButton
            :classButton="'card__icon'"
            icon="dots"
            xClass="card__svg"
            :buttonsArr="[
              {
                buttonStyle: 'dropDown',
                classButton: 'card__edit',
                click: '',
                title: 'Редактировать',
              },
              {
                buttonStyle: 'dropDown',
                classButton: 'card__delete',
                click: '',
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
  methods: {
    openCard(id) {
      this.$router.push(`TaskList/${id}`);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>