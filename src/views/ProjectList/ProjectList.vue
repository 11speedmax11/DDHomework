<template>
  <div class="main">
    <div
      class="project"
      v-if="this.projectList && this.projectList.length != 0"
    >
      <div class="project__search">
        <InputField
          placeholder="Поиск..."
          :isClear="true"
          :isSearch="true"
          :value="this.searchText"
          @search="setValueSearch"
        />
        <CustomSelect
          class="project__select"
          :options="[
            'По названию',
            'По автору',
            'По исполнителю',
            'По дате создания',
            'По дате обновления ',
          ]"
          :selectedOption="sortingText"
          :isSearch="true"
          :isTurn="sortOrderValue"
          @input="sortOrder"
          @turnIcon="turnIcon"
        >
        </CustomSelect>
        <CustomButton
          buttonStyle="secondary"
          classButton="project__add"
          @click="addProjct"
        >
          Добавить
        </CustomButton>
      </div>
      <CardsItem
        v-for="item in projectList"
        :key="item._id"
        :item="item"
        :classImg="'card__img'"
      />
      <PaginationItems
        :total="196"
        :currentPage="page"
        @goPage="goPage"
        @goNextPage="goNextPage"
        @goPreviousPage="goPreviousPage"
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
import CustomSelect from "@/components/CustomSelect/CustomSelect.vue";
import PaginationItems from "@/components/PaginationItems/PaginationItems.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  props: {},
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
      itemsPerPage: 10,
    };
  },
  components: {
    CardsItem,
    PlugCards,
    InputField,
    CustomButton,
    CustomSelect,
    PaginationItems,
  },
  computed: {
    ...mapGetters("project", ["search", "sorting", "sortOrderValues", "page"]),
    searchText() {
      return this.search;
    },
    sortingText() {
      return this.sorting;
    },
    sortOrderValue() {
      return this.sortOrderValues;
    },
    isPagination() {
      return this.projectList.length > this.itemsPerPage;
    },
  },
  methods: {
    ...mapActions("project", [
      "setSearch",
      "setOrder",
      "setSortOrderValues",
      "setPage",
    ]),
    ...mapActions("app", ["setLoader", "setCurrentModal"]),
    // ...mapActions("app", ["setLoader"]),
    setValueSearch(value) {
      this.setSearch(value);
    },
    sortOrder(value) {
      this.setOrder(value);
    },
    turnIcon(value) {
      this.setSortOrderValues(value);
    },
    goPreviousPage() {
      this.goPage(this.page - 1);
    },
    goNextPage() {
      this.goPage(this.page + 1);
    },
    goPage(page) {
      this.setPage(page);
    },
    addProjct() {
      this.setCurrentModal({
        isOpen: true,
        componentName: "CreateProjectModal",
        titleModal: "fdsaf",
        action: (data) => {
          console.log(data);
        },
      });
    },
  },
};
</script>

<style lang="scss" >
@import "./index.scss";
</style>