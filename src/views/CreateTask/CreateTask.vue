<template>
  <div class="main">
    <div class="create-task">
      <div class="create-task__wrapper">
        <header class="create-task__header">Создание задачи</header>

        <div class="create-task__line"></div>

        <section class="create-task__body">
          <div class="create-task__field">
            <div class="create-task__title">
              <div class="">
                Название <span class="create-task__star">*</span>
              </div>
            </div>
            <div class="create-task__value">
              <InputField
                v-model="task.title"
                :placeholder="'Введите текст...'"
              ></InputField>
            </div>
          </div>

          <div class="create-task__field">
            <div class="create-task__title">
              <div class="">Описание</div>
            </div>
            <div class="create-task__value">
              <textarea
                class="create-task__textarea"
                v-model="task.description"
                :placeholder="'Введите текст...'"
              ></textarea>
            </div>
          </div>

          <div class="create-task__field">
            <div class="create-task__title">
              <div class="">
                Проект <span class="create-task__star">*</span>
              </div>
            </div>
            <div class="create-task__value">
              <CustomSelect
                class="create-task__project"
                :options="listProject"
                keyName="_id"
                @input="setProject"
                :selectedOption="selectedProject"
              >
              </CustomSelect>
            </div>
          </div>

          <div class="create-task__field">
            <div class="create-task__title">
              <div class="">Исполнитель</div>
            </div>
            <div class="create-task__value">
              <CustomSelect
                class="create-task__project"
                placeholder="Не назначен"
                :options="userList"
                keyName="_id"
                @input="setUser"
                :selectedOption="selectedUser"
              >
              </CustomSelect>
            </div>
          </div>
        </section>

        <div class="create-task__line"></div>
        <div class="create-task__buttons">
          <CustomButton
            buttonStyle="secondary"
            classButton="create-task__back"
            @click="cancel"
          >
            Отмена
          </CustomButton>
          <CustomButton classButton="create-task__create" @click="createTask">
            Создать задачу
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import InputField from "@/components/InputField/InputField.vue";
import CustomSelect from "@/components/CustomSelect/CustomSelect.vue";
import { requests } from "@/requests";

export default {
  components: {
    CustomButton,
    InputField,
    CustomSelect,
  },
  data() {
    return {
      task: {
        title: "",
        description: "",
      },
      listProject: null,
      selectedProject: null,
      userList: null,
      selectedUser: null,
    };
  },
  mounted() {
    this.start();
  },
  methods: {
    start() {
      requests
        .getProjectList({ page: 1, limit: 1000, filter: null, sort: null })
        .then((data) => {
          this.listProject = data.projects;
        });
      requests
        .getUserList({
          page: 1,
          limit: 200,
          filter: null,
          sort: "asc",
        })
        .then((userList) => {
          this.userList = userList.users;
        });
    },
    createTask() {
      requests
        .addTask({
          name: this.task.title,
          description: this.task.description,
          projectId: this.selectedProject,
          executor: this.selectedUser,
        })
        .then(() => {});
      this.$router.go(-1);
    },
    cancel() {
      this.$router.go(-1);
    },
    setProject(value) {
      this.selectedProject = value;
    },
    setUser(value) {
      this.selectedUser = value;
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>