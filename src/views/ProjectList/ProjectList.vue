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
          v-model="searchText"
          @search="setValueSearch"
        />
        <CustomSelect
          class="task__select"
          :options="sortName"
          :selectedOption="sorting"
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
        @edit="editProject(item)"
        @delet="deleteProject(item)"
      />
      <PaginationItems
        :total="pages"
        :currentPage="page"
        @goPage="goPage"
        @goNextPage="goNextPage"
        @goPreviousPage="goPreviousPage"
        v-if="pages != 1"
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
import { requests } from "@/requests";
import { sortName } from "@/const";
import { mapGetters, mapActions } from "vuex";

export default {
  props: {},
  data() {
    return {
      projectList: [],
      itemsPerPage: 10,
      pages: 1,
      searchText: null,
      sortName,
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
    isPagination() {
      return this.projectList.length > this.itemsPerPage;
    },
    sortOrderValue() {
      return this.sortOrderValues == "asc" ? true : false;
    },
  },
  mounted() {
    this.searchProject();
  },
  methods: {
    ...mapActions("project", [
      "setSearch",
      "setOrder",
      "setSortOrderValues",
      "setPage",
    ]),
    ...mapActions("app", ["setLoading", "setCurrentModal"]),
    searchProject() {
      this.setLoading(true);
      let data = {
        page: this.page,
        limit: 10,
        filter: {
          name: this.search,
        },
        sort: {
          field: this.sorting,
          type: this.sortOrderValues,
        },
      };
      return requests
        .getProjectList(data)
        .then((response) => {
          this.projectList = response.projects;
          this.pages = response.total;
          this.searchText = this.search;
        })
        .finally(() => {
          this.setLoading(false);
        });
    },
    setValueSearch(value) {
      this.setPage(1);
      this.setSearch(value);
      this.searchProject();
    },
    sortOrder(value) {
      this.setOrder(value);
      this.searchProject();
      this.setPage(1);
    },
    turnIcon(value) {
      this.setPage(1);
      this.setSortOrderValues(value ? "asc" : "desc");
      this.searchProject();
    },
    goPreviousPage() {
      this.goPage(this.page - 1);
    },
    goNextPage() {
      this.goPage(this.page + 1);
    },
    goPage(page) {
      this.setPage(page);
      this.searchProject();
    },
    addProjct() {
      this.setCurrentModal({
        isOpen: true,
        componentName: "CreateProjectModal",
        titleModal: "Создание проекта",
        nameButton: "Создать проект",
        action: (data) => {
          requests.addProject(data).then(() => this.searchProject());
        },
      });
    },
    editProject(item) {
      this.setCurrentModal({
        isOpen: true,
        componentName: "CreateProjectModal",
        titleModal: "Редактирование проекта",
        nameButton: "Сохранить",
        projectData: item,
        action: (data) => {
          requests
            .editProject({ ...data, author: item.author, _id: item._id })
            .then(() => this.searchProject());
        },
      });
    },
    deleteProject(item) {
      this.setCurrentModal({
        isOpen: true,
        componentName: "DeleteTaskModal",
        titleModal: "Удаление",
        projectName: item,
        nameButton: "Да",
        action: (item) => {
          requests.deleteProject(item._id).then(() => this.searchProject());
        },
      });
      // requests.deleteProject(id).then(() => this.searchProject());
    },
  },
};
</script>

<style lang="scss" >
@import "./index.scss";
</style>