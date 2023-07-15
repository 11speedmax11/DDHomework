<template>
  <div class="comment-field">
    <textarea class="comment-field__text" v-model="text"></textarea>
    <CustomButton
      class="comment-field__button"
      @click="sendComment()"
      icon="send"
    >
    </CustomButton>
  </div>
</template> 
<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
export default {
  components: {
    CustomButton,
  },
  props:{
    commentText: {
      type: String,
      default: ""
    }
  },
  data() {
    return{
      text: ""
    }
  },
  mounted(){
    this.text = this.commentText
  },
  methods: {
    sendComment(){
      this.$emit("sendComment", this.text)
      this.text = ""
    }
  }
};
</script> 
 
<style lang="scss">
@import "./index.scss";
</style>
