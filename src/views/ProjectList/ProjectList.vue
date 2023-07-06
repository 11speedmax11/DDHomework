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
        <CustomButton buttonStyle="secondary" classButton="project__add">
          Добавить
        </CustomButton>
      </div>
      <CardsItem
        v-for="item in paginatedItems"
        :key="item._id"
        :item="item"
        :classImg="'card__img'"
      />
      <div class="pagination" v-if="isPagination">
        <CustomButton @click="goPreviousPage">Предыдущая</CustomButton>
        <CustomButton
          @click="goPage(item)"
          v-for="item in numberPages"
          :key="item"
          >{{ item }}</CustomButton
        >
        <CustomButton @click="goNextPage">Следующая</CustomButton>
      </div>
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
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  components: {
    CardsItem,
    PlugCards,
    InputField,
    CustomButton,
    CustomSelect,
  },
  computed: {
    ...mapGetters("project", ["search", "sorting", "sortOrderValues"]),
    searchText() {
      return this.search;
    },
    sortingText() {
      return this.sorting;
    },
    sortOrderValue() {
      return this.sortOrderValues;
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.projectList.slice(startIndex, endIndex);
    },
    isPagination() {
      return this.projectList.length > this.itemsPerPage;
    },
    numberPages() {
      return Math.ceil(this.projectList.length / this.itemsPerPage);
    },
  },
  methods: {
    ...mapActions("project", ["setSearch", "setOrder", "setSortOrderValues"]),
    setValueSearch(value) {
      this.setSearch(value);
    },
    sortOrder(value) {
      console.log(value);
      this.setOrder(value);
    },
    turnIcon(value) {
      this.setSortOrderValues(value);
    },
    goPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goNextPage() {
      const maxPage = Math.ceil(this.projectList.length / this.itemsPerPage);
      if (this.currentPage < maxPage) {
        this.currentPage++;
      }
    },
    goPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style lang="scss" >
@import "./index.scss";
</style>