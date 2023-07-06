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

export default {
  components: {
    CustomButton,
    // InputField,
    CustomSelect,
    DropDownButton,
    StatusTask,
    UserElement,
  },
  methods: {
    openTaskList() {
      this.$router.push(`/TaskList`);
    },
  },
};
</script> 
 
<style lang="scss">
@import "./index.scss";
</style>
