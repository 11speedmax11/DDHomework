<template>
  <div class="main">
    <div class="user-list">
      <div class="user-list__search">
        <InputField
          placeholder="Поиск..."
          :isClear="true"
          :isSearch="true"
          v-model="searchText"
          @search="setValueSearch"
        />
        <CustomButton
          :class="{ isTurn: sortOrderValues == 'asc' }"
          xClass="svg__sort"
          icon="sort-up"
          buttonStyle="secondary"
          @click="turnIcon"
        />
        <CustomButton classButton="user-list__add" @click="addUser">
          Добавить
        </CustomButton>
      </div>
      <div class="user-list__item" v-for="user in userList" :key="user._id">
        <UserElement :id="user._id" />
        <div class="user-list__menu">
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
      </div>
      <PaginationItems
        :total="pages"
        :currentPage="page"
        @goPage="goPage"
        @goNextPage="goNextPage"
        @goPreviousPage="goPreviousPage"
        v-if="pages != 1"
      />
    </div>
  </div>
</template>
<script>
import InputField from "@/components/InputField/InputField.vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import UserElement from "@/components/UserElement/UserElement.vue";
import PaginationItems from "@/components/PaginationItems/PaginationItems.vue";
import DropDownButton from "@/components/DropDownButton/DropDownButton.vue";
import { mapGetters, mapActions } from "vuex";
import requests from "@/requests";
import _ from "lodash";

export default {
  components: {
    UserElement,
    InputField,
    CustomButton,
    PaginationItems,
    DropDownButton,
  },
  data() {
    return {
      userList: [],
      pages: 1,
      searchText: null,
    };
  },
  mounted() {
    this.start();
  },
  computed: {
    ...mapGetters("user", ["search", "sortOrderValues", "page"]),

    sortOrderValue() {
      return this.sortOrderValues;
    },
  },
  methods: {
    ...mapActions("user", ["setSearch", "setSortOrderValues", "setPage"]),
    ...mapActions("app", ["setLoading", "setUserList"]),
    setValueSearch(value) {
      this.setSearch(value);
      this.getUserList();
    },
    turnIcon() {
      this.setSortOrderValues(this.sortOrderValues == "desc" ? "asc" : "desc");
      this.getUserList();
    },
    start() {
      this.getUserList();
    },
    getUserList() {
      this.setLoading(true);
      requests
        .getUserList({
          page: this.page,
          limit: 10,
          filter: {
            name: this.search,
          },
          sort: this.sortOrderValues,
        })
        .then((data) => {
          this.pages = data.total;
          this.userList = _.cloneDeep(data.users);
          this.setUserList(_.cloneDeep(data.users));
        })
        .finally(() => {
          this.setLoading(false);
        });
    },
    goPreviousPage() {
      this.goPage(this.page - 1);
    },
    goNextPage() {
      this.goPage(this.page + 1);
    },
    goPage(page) {
      this.setPage(page);
      this.getUserList();
    },
    addUser() {
      this.$router.push(`/CreateUser`);
    },
  },
};
</script>

<style lang="scss" >
@import "./index.scss";
</style>