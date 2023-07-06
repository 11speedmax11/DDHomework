<template>
  <div class="main">
    <div class="user-list">
      <div class="user-list__search">
        <InputField
          placeholder="Поиск..."
          :isClear="true"
          :isSearch="true"
          :value="this.searchText"
          @search="setValueSearch"
        />
        <CustomButton :class="{ isTurn: sortOrderValue}"
          xClass="svg__sort"
          icon="sort-up"
          buttonStyle="secondary"
          @click="turnIcon"
        />
        <CustomButton buttonStyle="secondary" classButton="user-list__add">
          Добавить
        </CustomButton>
      </div>
      <div class="user-list__item" v-for="user in this.listUsers" :key="user">
        <UserElement :name="user" />
      </div>
    </div>
  </div>
</template>
<script>
import InputField from "@/components/InputField/InputField.vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import UserElement from "@/components/UserElement/UserElement.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    UserElement,
    InputField,
    CustomButton,
  },
  data() {
    return {
      listUsers: [
        "Галанов М.Э.",
        "Иванов М.Э.",
        "Сидоров М.Э.",
        "Лавров М.Э.",
        "Петров М.Э.",
        "Галанов С.Э.",
      ],
    };
  },
  computed: {
    ...mapGetters("user", ["search", "sortOrderValues"]),
    searchText() {
      return this.search;
    },
    sortOrderValue() {
      return this.sortOrderValues;
    },
  },
  methods: {
    ...mapActions("user", ["setSearch", "setSortOrderValues"]),
    setValueSearch(value) {
      this.setSearch(value);
    },
    turnIcon() {
      this.setSortOrderValues(!this.sortOrderValue);
    },
  },
};
</script>

<style lang="scss" >
@import "./index.scss";
</style>