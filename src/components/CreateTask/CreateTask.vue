<template>
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
            <InputField v-model="task.title" :placeholder="'Введите текст...'"></InputField>
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
            <div class="">Проект <span class="create-task__star">*</span></div>
          </div>
          <div class="create-task__value">
            <CustomSelect
              class="create-task__project"
              v-model="task.executor"
              :options="['Проект 1', 'Проект 2']"
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
              v-model="task.executor"
              :options="['Галанов М.Э.', 'Иванов И.И.']"
            >
            </CustomSelect>
          </div>
        </div>
      </section>

      <div class="create-task__line"></div>
      <div class="create-task__buttons">
        <CustomButton classButton="create-task__back"> Отмена </CustomButton>
        <CustomButton classButton="create-task__create" @click="createTask">
          Создать задачу
        </CustomButton>
      </div>
    </div>
  </div>
</template>
<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import InputField from "@/components/InputField/InputField.vue";
import CustomSelect from "@/components/CustomSelect/CustomSelect.vue";

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
        project: "",
        executor: "",
      },
    };
  },
  methods: {
    createTask() {
      console.log(this.task);
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>