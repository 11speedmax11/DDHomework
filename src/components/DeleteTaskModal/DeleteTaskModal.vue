<template>
  <div class="create-project-modal">
    <div class="create-project-modal__wrapper">
      Вы уверены что хотите удалить проект «{{currentModal.projectName}}»?
    </div>
    <div class="create-project-modal__footer">
      <CustomButton buttonStyle="secondary" @click="cancle"
        >отмена</CustomButton
      >
      <CustomButton @click="accept">{{ nameButton }}</CustomButton>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
export default {
  props: {
    nameButton: String,
    currentModal: Object
  },
  components: {
    CustomButton,
  },
  computed: {},
  data() {
    return {
      formData: {
        code: null,
        name: null,
      },
    };
  },

  methods: {
    accept() {
      this.$emit("acceptAction",this.currentModal.projectName);
    },
    cancle() {
      this.$emit("cancle");
    },
    
  },
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
