<template>
    <div class="comment">
      <div class="comment__body">
        <UserElement :id="comment.author" />
        <div v-if="!isEdit">
          {{ comment.text }}
        </div>
        <div class="comment__edit" v-else>
          <textarea v-model="editCommentText"> </textarea>
          <CustomButton @click="changeEdit" icon="send" class="send"></CustomButton>
        </div>
        <DropDownButton
          :classButton="'card__icon'"
          icon="dots"
          xClass="card__svg"
          @edit="editComment(comment._id)"
          @delete="deleteComment(comment._id)"
          :buttonsArr="[
            {
              buttonStyle: 'dropDown',
              classButton: 'card__edit',
              click: 'edit',
              title: 'Редактировать',
            },
            {
              buttonStyle: 'dropDown',
              classButton: 'card__delete',
              click: 'delete',
              title: 'Удалить',
            },
          ]"
        >
        </DropDownButton>
      </div>
      <CommentTree
        v-for="comment in childrenComments"
        :key="comment._id"
        :comment="comment"
        isChild
        @deleteComment="deleteComment"
        @acceptEdit="acceptEdit"
      />
      <div class="activity__answer" v-if="!isChild">
        <CommentField @sendComment="addComment(comment._id, $event)"/>
      </div>
    </div>
</template> 
<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import DropDownButton from "@/components/DropDownButton/DropDownButton.vue";
import UserElement from "@/components/UserElement/UserElement.vue";
import CommentField from "@/components/CommentField/CommentField.vue";
import CommentTree from "@/components/CommentTree/CommentTree.vue";
export default {
  name: "CommentTree",
  components: {
    CustomButton,
    DropDownButton,
    UserElement,
    CommentField,
    CommentTree,
  },
  props: {
    comment: {
      type: Object,
      default: () => {},
    },
    isChild: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isEdit: false,
      editCommentText: null,
    };
  },
  computed: {
    childrenComments() {
      return this.comment.children.length ? this.comment.children : [];
    },
    dateCreated() {
      return this.getDate(this.task.dateCreated);
    },
    dateEdited() {
      return this.getDate(this.task.dateEdited);
    },
  },
  methods: {
    editComment() {
      this.editCommentText = this.comment.text
      this.isEdit = !this.isEdit;
    },
    changeEdit(){
      this.isEdit = !this.isEdit;
      this.acceptEdit({id: this.comment._id, text: this.editCommentText})
    },
    acceptEdit(obj) {
      console.log(obj)
      this.$emit("acceptEdit", obj);
    },
    addComment(id, text) {
      this.$emit("addComment", {id, text});
    },
    deleteComment(id) {
      this.$emit("deleteComment", id);
    },
    getDate(dateString) {
      const months = [
        "янв",
        "фев",
        "мар",
        "апр",
        "май",
        "июн",
        "июл",
        "авг",
        "сен",
        "окт",
        "ноя",
        "дек",
      ];

      const date = new Date(dateString);
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();

      return `${day} ${month} ${year} в ${hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }`;
    },
  },
};
</script> 
 
<style lang="scss">
@import "./index.scss";
</style>
