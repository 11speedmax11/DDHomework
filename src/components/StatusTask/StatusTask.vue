<template>
  <span class="card__status" :class="getColor()">{{ this.name }}</span>
</template>

<script>
export default {
  props: {
    name: String,
  },
  data() {
    return {
      color: null,
    };
  },
  methods: {
    getColor() {
      switch (this.name) {
        case "Черновик":
        case "В работе":
        case "Тестирование":
          return "brown";
        case "Завершена":
        case "Выполнена":
        case "Закрыта":
        case "Активен":
          return "blue";
        case "Удалена":
          return "red";
        case "Не активен":
          return "gray";
      }
    },
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>