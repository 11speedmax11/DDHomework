<template>
  <div class="filter" v-click-outside="closeFilter">
    <div
      class="filter__wrapper"
      :class="{ active: isDropdownOpen }"
      @click="toggleDropdown"
    >
      <CustomButton
        xClass="svg__filter"
        icon="filter"
        buttonStyle="secondary"
      />
    </div>
    <div class="filter__selection" v-if="isDropdownOpen">
      <div class="filter__value">
        <p>Статус</p>
        <CustomSelectMulti
          :options="statusList"
          :selectedOption="this.filterValue.status"
          @optionSelected="statusSelected"
          placeholder="Выберите значение..."
        />
        <p>Автор</p>
        <CustomSelect
          :options="authorList"
          :selectedOption="this.filterValue.author"
          @input="authorSelected"
          placeholder="Выберите значение..."
        />
        <p>Исполнитель</p>
        <CustomSelect
          :options="executorList"
          :selectedOption="this.filterValue.executor"
          @input="executorSelected"
          placeholder="Выберите значение..."
        />
        <p>Дата создания</p>
        <div class="filter__dates">
          <DateSelection
            :selectedDate="this.filterValue.dateStart"
            @dateSelected="dateSelectedStart"
          />
          <p>-</p>
          <DateSelection
            :selectedDate="this.filterValue.dateEnd"
            @dateSelected="dateSelectedEnd"
          />
        </div>
      </div>
      <div class="filter__buttons">
        <CustomButton @click="clearFields" buttonStyle="secondary"
          >Отмена</CustomButton
        >
        <CustomButton @click="ApplyFilter">Применить</CustomButton>
      </div>
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import CustomSelectMulti from "@/components/CustomSelectMulti/CustomSelectMulti.vue";
import CustomSelect from "@/components/CustomSelect/CustomSelect.vue";
import DateSelection from "@/components/DateSelection/DateSelection.vue";

export default {
  props: {
    placeholder: {
      type: String,
      default: "Дата...",
    },
    filter: {
      type: Object,
      default: () => {
        return {
          status: [],
          author: null,
          executor: null,
          dateStart: null,
          dateEnd: null,
        };
      },
    },
  },
  data() {
    return {
      isDropdownOpen: false,
      selectedDate: null,
      statusList: ["Черновик", "В работе", "Завершена", "Тестирование", "Выполнена", "Закрыта", "Удалена", "Активен", "Не активен"],
      authorList: ["Галанов М.Э.", "Иванов М.Э."],
      executorList: ["Галанов М.Э.", "Иванов М.Э."],

      filterValue: {
        status: this.filter.status,
        author: this.filter.author,
        executor: this.filter.executor,
        dateStart: this.filter.dateStart,
        dateEnd: this.filter.dateEnd,
      },
    };
  },
  computed: {},
  components: {
    CustomButton,
    CustomSelectMulti,
    CustomSelect,
    DateSelection,
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeFilter() {
      this.isDropdownOpen = false;
    },
    clearFields() {
      this.filterValue.status = [];
      this.filterValue.author = null;
      this.filterValue.executor = null;
      this.filterValue.dateStart = null;
      this.filterValue.dateEnd = null;
      let filterCopy = { ...this.filterValue };
      this.$emit("applyFilter", filterCopy);
    },
    statusSelected(arr) {
      this.filterValue.status = [...arr];
    },
    authorSelected(author) {
      this.filterValue.author = author;
    },
    executorSelected(executor) {
      this.filterValue.executor = executor;
    },
    dateSelectedStart(date) {
      this.filterValue.dateStart = date;
    },
    dateSelectedEnd(date) {
      this.filterValue.dateEnd = date;
    },
    ApplyFilter() {
      let filterCopy = { ...this.filterValue };
      this.$emit("applyFilter", filterCopy);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>