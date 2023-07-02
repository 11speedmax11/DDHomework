<template>
  <div class="main">
    <div class="task__list" v-if="this.taskList && this.taskList.length != 0">
      <div class="task__search">
        <InputField placeholder='Поиск...' :isClear="true" :isSearch="true" />
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
// import CreateTask from "@/components/CreateTask/CreateTask.vue";

export default {
  name: "TaskList",
  props: {
    // taskList: Array,
  },
  components: {
    CardsItem,
    PlugCards,
    InputField,
    CustomButton,
    // CreateTask,
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
  methods: {
    click() {
      this.$router.push(`CreateTask`);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>