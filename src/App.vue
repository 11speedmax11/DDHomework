<template>
  <div id="app">
    <NavigationMenu @tabSelected="updateTab" />
    <!-- <UserList /> -->
    <!-- <ProjectList :projectList="projectList" /> -->
    <!-- <ProjectList /> -->
    <!-- <TaskList :taskList="taskList" /> -->
    <!-- <TaskList /> -->
    <!-- <UserProfile /> -->
    <!-- <Createask /> -->
    <component :is="activeTab"></component>
  </div>
</template>

<script>
import NavigationMenu from "./components/NavigationMenu/NavigationMenu.vue";
import ProjectList from "./views/ProjectList/ProjectList.vue";
import TaskList from "./views/TaskList/TaskList.vue";
import UserProfile from "./views/UserProfile/UserProfile.vue";
import UserList from "./views/UserList/UserList.vue";
import Createask from "./components/CreateTask/CreateTask.vue";

export default {
  name: "App",
  components: {
    NavigationMenu,
    ProjectList,
    TaskList,
    UserProfile,
    UserList,
    Createask,
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
      activeTab: "ProjectList",
    };
  },
  methods: {
    updateTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style lang="scss" >
body {
  margin: 0;
}
</style>
