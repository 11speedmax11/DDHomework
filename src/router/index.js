import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import ProjectList from "@/views/ProjectList/ProjectList.vue";
import TaskList from "@/views/TaskList/TaskList.vue";
import UserProfile from "@/views/UserProfile/UserProfile.vue";
import UserList from "@/views/UserList/UserList.vue";
import TaskCard from "@/views/TaskCard/TaskCard.vue";
import NotFound from "@/views/NotFound/NotFound.vue";
import AuthPage from "@/views/AuthPage/AuthPage.vue";
import CreateTask from "@/views/CreateTask/CreateTask.vue";
import NavigationMenu from "@/components/NavigationMenu/NavigationMenu.vue";

const routes = [
  {
    path: '/', name: 'NavigationMenu', component: NavigationMenu, children: [
      { path: 'ProjectList', name: 'ProjectList', component: ProjectList },
      { path: 'TaskList', name: 'TaskList', component: TaskList },
      { path: 'UserProfile', name: 'UserProfile', component: UserProfile },
      {
        path: 'UserList', name: 'UserList', component: UserList, beforeEnter: (to, from, next) => {
          if (localStorage.getItem('isAuthorized') == null || localStorage.getItem('isAuthorized') == "false") {
            next({ path: '/AuthPage', name: 'AuthPage', component: AuthPage });
          } else {
            next();
          }
        }
      },
      { path: 'TaskList/CreateTask', name: 'CreateTask', component: CreateTask },
      { path: 'TaskList/:id', name: 'TaskCard', component: TaskCard },
    ]
  },
  { path: '/AuthPage', name: 'AuthPage', component: AuthPage },
  { path: "*", name: 'NotFound', component: NotFound },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;