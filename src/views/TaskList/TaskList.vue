<template>
  <div class="task">
    <div class="task__wrapper" v-if="!isAdd">
      <div class="task__list" v-if="taskList && taskList.length != 0">
        <div class="task__search">
          <InputField :placeholder="'Введите текст'" />
          <CustomButton classButton="task__add" @click="click">
            Добавить
          </CustomButton>
        </div>
        <CardsItem v-for="item in taskList" :key="item._id" :item="item" />
      </div>
      <PlugCards :textPlug="'Не создана ни одна задача'" @click="click" v-else />
    </div>
    <div class="task__create">
      <CreateTask v-if="isAdd" />
    </div>
  </div>
</template>
<script>
import CardsItem from "@/components/CardsItem/CardsItem.vue";
import PlugCards from "@/components/PlugCards/PlugCards.vue";
import InputField from "@/components/InputField/InputField.vue";
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import CreateTask from "@/components/CreateTask/CreateTask.vue";

export default {
  name: "TaskList",
  props: {
    taskList: Array,
  },
  components: {
    CardsItem,
    PlugCards,
    InputField,
    CustomButton,
    CreateTask,
  },
  data() {
    return {
      isAdd: false,
    };
  },
  methods: {
    click() {
      this.isAdd = !this.isAdd;
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>