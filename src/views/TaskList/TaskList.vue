<template>
  <div class="main">
    <div class="task__list" v-if="this.taskList && this.taskList.length != 0">
      <div class="task__search">
        <InputField
          @search="setValueSearch"
          placeholder="Поиск..."
          :value="this.searchText"
          :isClear="true"
          :isSearch="true"
        />

        <FilterValues :filter="filterValue" @applyFilter="applyFilter" />
        <CustomSelect
          class="task__select"
          :options="['По названию', 'По автору', 'По статусу', 'По исполнителю', 'По дате создания', 'По дате обновления ']"
          :selectedOption="sortingText"
          :isSearch="true"
          :isTurn="sortOrderValue"
          @input="sortOrder"
          @turnIcon="turnIcon"
        >
        </CustomSelect>
        <CustomButton
          buttonStyle="secondary"
          classButton="task__add"
          @click="click"
        >
          Добавить
        </CustomButton>
      </div>
      <CardsItem v-for="item in this.taskList" :key="item._id" :item="item" />
    </div>
    <PlugCards :textPlug="'Не создана ни одна задача'" @click="click" v-else />
  </div>
</template>
<script>
import CardsItem from "@/components/CardsItem/CardsItem.vue";
import PlugCards from "@/components/PlugCards/PlugCards.vue";
import InputField from "@/components/InputField/InputField.vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import CustomSelect from "@/components/CustomSelect/CustomSelect.vue";
import FilterValues from "@/components/FilterValues/FilterValues.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  props: {},
  components: {
    CardsItem,
    PlugCards,
    InputField,
    CustomButton,
    CustomSelect,
    FilterValues,
  },
  data() {
    return {
      taskList: [
        {
          author: "Иванов И.И.",
          authorEdited: null,
          dateCreated: "1 час назад",
          dateEdited: "Баранов В.В. изменил 1 минуту назад",
          _id: "№11",
          name: "задача",
          code: null,
        },
        {
          author: "Иванов И.И.",
          authorEdited: null,
          dateCreated: "10 часов назад",
          dateEdited: "Баранов В.В. изменил 1 минуту назад",
          _id: "id2",
          name: "задача23",
          code: null,
        },
        {
          author: "пользователь",
          authorEdited: null,
          dateCreated: "1 час назад",
          dateEdited: "Баранов В.В. изменил 1 минуту назад",
          _id: "№13",
          name: "задача",
          code: null,
        },
        {
          author: "пользователь",
          authorEdited: null,
          dateCreated: "12 минуту назад",
          dateEdited: "Галанов В.В. изменил 12 минуту назад",
          _id: "id4",
          name: "задача23",
          code: null,
        },
        {
          author: "Галанов М.Э.",
          authorEdited: null,
          dateCreated: "3 часа назад",
          dateEdited: "Баранов В.В. изменил 10 минуту назад",
          _id: "id2222",
          name: "задача23232",
          code: null,
        },
      ],
    };
  },
  computed: {
    ...mapGetters("task", ["filter", "search", "sorting", "sortOrderValues"]),
    filterValue() {
      return this.filter;
    },
    searchText() {
      return this.search;
    },
    sortingText() {
      return this.sorting;
    },
    sortOrderValue() {
      return this.sortOrderValues;
    },
  },
  methods: {
    ...mapActions("task", [
      "setFilter",
      "setSearch",
      "setOrder",
      "setSortOrderValues",
    ]),
    click() {
      this.$router.push(`TaskList/CreateTask`);
    },
    setValueSearch(value) {
      this.setSearch(value);
    },
    sortOrder(value) {
      this.setOrder(value);
    },
    applyFilter(value) {
      this.setFilter(value);
    },
    turnIcon(value) {
      this.setSortOrderValues(value);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>