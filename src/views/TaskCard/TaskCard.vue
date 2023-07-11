<template>
  <div class="main">
    <div class="task-card">
      <div class="task-card__back">
        <CustomButton
          buttonStyle="secondary"
          @click="openTaskList"
          startClass="SvgStart"
          startIcon="vector"
          >Вернуться к списку задач</CustomButton
        >
      </div>
      <div class="task-card__body">
        <div class="task-card__main">
          <div class="task-card__header">
            <div class="task-card__project project">
              <div class="project__information">
                <p>Код проекта</p>
                <p class="project__code">#12341</p>
              </div>

              <div class="project__menu">
                <DropDownButton
                  :classButton="'project__icon'"
                  icon="dots"
                  xClass="project__svg"
                  :buttonsArr="[
                    {
                      buttonStyle: 'dropDown',
                      classButton: 'card__edit',
                      click: '',
                      title: 'Редактировать',
                    },
                    {
                      buttonStyle: 'dropDown',
                      classButton: 'card__delete',
                      click: '',
                      title: 'Удалить',
                    },
                  ]"
                >
                </DropDownButton>
              </div>
            </div>
            <div class="task-card__name">Название задачи</div>
            <div class="task-card__information">
              <div class="task-card__current-status">
                <StatusTask :name="'Черновик'" />
              </div>
              <div class="task-card__create-date">
                Создана 17 сен 2022 в 13:55
              </div>
              <div class="task-card__author">
                <UserElement :name="'Котов М.М.'" />
              </div>
            </div>
          </div>
          <div class="task-card__content">
            <div class="task-card__description description">
              <div class="description__text">
                Описание задачи далеко-далеко за словесными горами в стране
                гласных и согласных живут рыбные тексты. Вдали от всех живут они
                в буквенных домах на берегу Семантика большого языкового океана.
                Маленький ручеек Даль журчит по всей стране и обеспечивает ее
                всеми необходимыми правилами.
              </div>
              <div class="description__information">
                <div class="description__date">
                  Задача отредактирована 1 час назад
                </div>
                <div class="description__author">
                  <UserElement :name="'Котов М.М.'" />
                </div>
              </div>
            </div>
          </div>
          <div class="task-card__activity activity">
            <div class="activity__text">Активность</div>
            <div v-for="historyItem in history" :key="historyItem._id">
              автор
              {{ historyItem.author }}

              изменили поле{{ historyItem.field }} на {{ historyItem.newValue }}
            </div>
            <div v-for="comment in commentsTree" :key="comment._id">
              автор
              {{ comment.author }}
              <div v-if="!comment.isEdit">
                коммент
                {{ comment.text }}
              </div>
              <div v-else>
                <textarea v-model="editCommentText"> </textarea>
                <CustomButton @click="acceptEdit(comment._id)">
                  edit
                </CustomButton>
              </div>

              <CustomButton @click="deleteComment(comment._id)">
                delete comment
              </CustomButton>
              <CustomButton @click="addComment(comment._id)">
                add sub comment
              </CustomButton>
              <CustomButton @click="editComment(comment._id)">
                edit comment comment
              </CustomButton>
            </div>
            <CustomButton @click="addComment"> add comment </CustomButton>
          </div>
        </div>
        <div class="task-card__aside">
          <div class="task-card__executor executor">
            <p class="executor__text">Исполнитель</p>
            <CustomSelect
              class="executor__name"
              :options="['Галанов М.Э.', 'Иванов И.И.']"
            >
            </CustomSelect>
          </div>
          <div class="task-card__status status">
            <p class="status__text">Статус</p>
            <CustomSelect
              class="status__name"
              :options="['Черновик', 'В работе']"
            >
            </CustomSelect>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import CustomButton from "@/components/CustomButton/CustomButton.vue";
import CustomSelect from "@/components/CustomSelect/CustomSelect.vue";
import DropDownButton from "@/components/DropDownButton/DropDownButton.vue";
import StatusTask from "@/components/StatusTask/StatusTask.vue";
import UserElement from "@/components/UserElement/UserElement.vue";
import requests from "@/requests";
export default {
  components: {
    CustomButton,
    // InputField,
    CustomSelect,
    DropDownButton,
    StatusTask,
    UserElement,
  },
  props: {
    id: String,
  },
  data() {
    return {
      comments: [],
      history: [],
      editCommentText: null,
    };
  },
  computed: {
    commentsTree() {
      return this.comments;
    },
  },
  methods: {
    openTaskList() {
      this.$router.push(`/TaskList`);
    },
    getComments() {
      requests.getComments(this.id).then((data) => {
        this.comments = data;
      });
    },
    editComment(id) {
      let editCommentIndex = this.comments.findIndex((x) => x._id == id);
      console.log(this.comments[editCommentIndex], editCommentIndex);
      // this.comments[editCommentIndex].isEdit = !this.comments[editCommentIndex].isEdit
      this.editCommentText = this.comments[editCommentIndex].text;
      this.$set(
        this.comments[editCommentIndex],
        "isEdit",
        !this.comments[editCommentIndex].isEdit
      );
    },

    acceptEdit(id) {
      let data = {
        _id: id,
        taskId: this.id,
        text: this.editCommentText,
      };
      requests.editComment(data).then(() => {
        this.getComments();
      });
    },
    addComment(parentId) {
      let data = {
        taskId: this.id,
        text: "Stringasfasf" + Math.random(1),
        parentId: parentId || null,
      };
      requests.addComment(data).then(() => {
        this.getComments();
      });
    },
    deleteComment(id) {
      requests.deleteComment(id).then(() => {
        this.getComments();
      });
    },
    getHistory() {
      requests.getHistory(this.id).then((data) => {
        this.history = data;
      });
    },
  },
  mounted() {
    this.getComments();
    this.getHistory();
  },
};
</script> 
 
<style lang="scss">
@import "./index.scss";
</style>
