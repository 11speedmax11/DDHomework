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
      <div class="task-card__body" v-if="task">
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
            <div class="task-card__name">{{ task.name }}</div>
            <div class="task-card__information">
              <div class="task-card__current-status">
                <StatusTask :name="task.status" />
              </div>
              <div class="task-card__create-date">
                Создана {{ dateCreated }}
              </div>
              <div class="task-card__author">
                <UserElement :id="task.author" />
              </div>
            </div>
          </div>
          <div class="task-card__content">
            <div class="task-card__description description">
              <div class="description__text">
                {{ task.description }}
              </div>
              <div class="description__information" v-if="task.dateEdited">
                <div class="description__date">
                  Задача отредактирована {{ dateEdited }}
                </div>
                <div class="description__author">
                  <UserElement :id="task.authorEdited" />
                </div>
              </div>
            </div>
          </div>
          <div class="task-card__activity activity">
            <div class="activity__text">Активность</div>
            <div v-for="activity in listAtivity" :key="activity">
              <div class="activity__body" v-if="!activity.isComment">
                <UserElement :id="activity.value.author" />
                изменил(а) {{ activity.value.field }}
                {{ getDate(activity.value.dateEdited) }}
              </div>
              <div v-else>
                <CommentTree
                  @deleteComment="deleteComment"
                  @addComment="addComment($event)"
                  @acceptEdit="acceptEdit"
                  :comment="activity.value"
                />
              </div>
            </div>
            <CommentField
              @sendComment="addComment({ id: null, text: $event })"
            />
          </div>
        </div>
        <div class="task-card__aside">
          <div class="task-card__executor executor">
            <p class="executor__text">Исполнитель</p>
            <CustomSelect
              class="executor__name"
              :options="userList"
              :selectedOption="task.executor"
              keyName="_id"
              @input="executorSelected"
              placeholder="Выберите значение..."
            />
          </div>
          <div class="task-card__status status">
            <p class="status__text">Статус</p>
            <CustomSelect
              class="status__name"
              :options="statusList"
              :selectedOption="task.status"
              @input="statusChange"
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
import CommentField from "@/components/CommentField/CommentField.vue";
import CommentTree from "@/components/CommentTree/CommentTree.vue";
import requests from "@/requests";
import { statusName } from "@/const";
import { mapActions } from "vuex";
import _ from "lodash";

export default {
  components: {
    CustomButton,
    CustomSelect,
    DropDownButton,
    StatusTask,
    UserElement,
    CommentField,
    CommentTree,
  },
  props: {
    id: String,
  },
  data() {
    return {
      comments: [],
      history: [],
      editCommentText: null,
      task: null,
      userList: null,
    };
  },
  computed: {
    listAtivity() {
      let arrAtivity = [
        ...this.commentsTree.map((x) => {
          return { value: x, isComment: true };
        }),
        ...this.history.map((x) => {
          return { value: x, isComment: false };
        }),
      ];
      arrAtivity.sort((a, b) => {
        const dateA =
          a.value.dateEdited !== null
            ? new Date(a.value.dateEdited)
            : new Date(a.value.dateCreated);
        const dateB =
          b.value.dateEdited !== null
            ? new Date(b.value.dateEdited)
            : new Date(b.value.dateCreated);
        return dateA - dateB;
      });
      console.log(
        arrAtivity.map((x) =>
          x.value.dateEdited !== null
            ? new Date(x.value.dateEdited)
            : new Date(x.value.dateCreated)
        )
      );
      return arrAtivity;
    },
    statusList() {
      const statusKeys = Object.keys(statusName);
      const currentStatus = this.task.status;
      let arrKeys = [];
      if (currentStatus == "DRAFT") {
        arrKeys.push("DRAFT");
        arrKeys.push("IN_PROCESS");
      } else if (currentStatus == "IN_PROCESS") {
        arrKeys.push("DRAFT");
        arrKeys.push("IN_PROCESS");
        arrKeys.push("COMPLETED");
      } else if (currentStatus == "COMPLETED") {
        arrKeys.push("IN_PROCESS");
        arrKeys.push("COMPLETED");
        arrKeys.push("TESTING");
      } else if (currentStatus == "TESTING") {
        arrKeys.push("IN_PROCESS");
        arrKeys.push("TESTING");
        arrKeys.push("TESTING_DONE");
      } else if (currentStatus == "TESTING_DONE") {
        arrKeys.push("IN_PROCESS");
        arrKeys.push("TESTING_DONE");
        arrKeys.push("CLOSED");
      }
      if (currentStatus == "CLOSED") {
        arrKeys.push("CLOSED");
        arrKeys.push("DRAFT");
      }

      return statusKeys
        .filter((x) => arrKeys.includes(x))
        .map((x) => {
          return { name: statusName[x], key: x };
        });
    },
    commentsTree() {
      let arr = this.comments;
      const map = {};
      const roots = [];

      arr.forEach((obj) => {
        map[obj._id] = obj;
        obj.children = [];
      });
      arr.forEach((obj) => {
        const parentId = obj.parentId;
        if (parentId === null) {
          roots.push(obj);
        } else {
          const parent = map[parentId];
          if (parent) {
            parent.children.push(obj);
          }
        }
      });

      return roots;
    },
    dateCreated() {
      return this.getDate(this.task.dateCreated);
    },
    dateEdited() {
      return this.getDate(this.task.dateEdited);
    },
  },
  methods: {
    ...mapActions("app", ["setUserList"]),
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
      this.editCommentText = this.comments[editCommentIndex].text;
      this.$set(
        this.comments[editCommentIndex],
        "isEdit",
        !this.comments[editCommentIndex].isEdit
      );
    },

    acceptEdit({ id, text }) {
      let data = {
        _id: id,
        taskId: this.id,
        text: text,
      };
      requests.editComment(data).then(() => {
        this.getComments();
      });
    },
    addComment({ id, text }) {
      console.log(id, text);
      let data = {
        taskId: this.id,
        text: text,
        parentId: id || null,
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
    statusChange(status) {
      requests
        .editTask({
          _id: this.task._id,
          status: status,
        })
        .then(() => {
          this.getTask();
          this.getHistory() 
        });
    },
    executorSelected(executor) {
      requests
        .editTask({
          _id: this.task._id,
          executor: executor,
        })
        .then(() => {
          this.getTask();
        });
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
    getTask() {
      requests.getTask(this.id).then((data) => {
        this.task = data;
      });
    },
    getUsers() {
      requests
        .getUserList({
          page: 1,
          limit: 200,
          filter: null,
          sort: "asc",
        })
        .then((usersList) => {
          this.userList = _.cloneDeep(usersList.users);
          this.setUserList(_.cloneDeep(usersList.users));
        });
    },
  },
  mounted() {
    this.getTask();
    this.getComments();
    this.getHistory();
    this.getUsers();
  },
};
</script> 
 
<style lang="scss">
@import "./index.scss";
</style>
