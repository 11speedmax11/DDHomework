<template>
  <div class="main">
    <div
      class="project"
      v-if="this.projectList && this.projectList.length != 0"
    >
      <div class="project__search">
        <InputField :placeholder="'Введите текст'" />
        <CustomButton classButton="project__add">
          Добавить
        </CustomButton>
      </div>
      <CardsItem
        v-for="item in this.projectList"
        :key="item._id"
        :item="item"
        :classImg="'card__img'"
      />
    </div>
    <PlugCards :textPlug="'Не создан ни один проект'" v-else />
  </div>
</template>
<script>
import CardsItem from "@/components/CardsItem/CardsItem.vue";
import PlugCards from "@/components/PlugCards/PlugCards.vue";
import InputField from "@/components/InputField/InputField.vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";
export default {
  props: {
    // projectList: Array,
  },
  data() {
    return {
      projectList: [
        {
          author: "Иванов И.И.",
          authorEdited: null,
          dateCreated: "1 час назад",
          dateEdited: "Баранов В.В. изменил 1 минуту назад",
          _id: "№1",
          name: "проект",
          code: "Черновик",
        },
        {
          author: "Иванов И.И.",
          authorEdited: null,
          dateCreated: "1 час назад",
          dateEdited: "Баранов В.В. изменил 1 минуту назад",
          _id: "id2",
          name: "name33333333",
          code: "В работе",
        },
        {
          author: "пользователь",
          authorEdited: null,
          dateCreated: "10 час назад",
          dateEdited: "Баранов В.В. изменил 10 минуту назад",
          _id: "№13",
          name: "проект",
          code: "Завершена",
        },
        {
          author: "пользователь",
          authorEdited: null,
          dateCreated: "2 часа назад",
          dateEdited: "Баранов В.В. изменил 1 минуту назад",
          _id: "id4",
          name: "name123",
          code: "Тестирование",
        },
        {
          author: "Галанов М.Э.",
          authorEdited: null,
          dateCreated: "3 часа назад",
          dateEdited: "Баранов В.В. изменил 10 минуту назад",
          _id: "id5",
          name: "name225151",
          code: "Выполнена",
        },
      ],
    };
  },
  components: {
    CardsItem,
    PlugCards,
    InputField,
    CustomButton,
  },
  computed: {},
};
</script>

<style lang="scss" >
@import "./index.scss";
</style>