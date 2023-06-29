<template>
  <div class="main">
    <InputField :placeholder="'Введите текст'" />
  </div>
</template>
<script>
import InputField from "@/components/InputField/InputField.vue";

export default {
  components: {
    InputField,
  },
  methods: {},
};
</script>

<style lang="scss" >
@import "./index.scss";
</style>