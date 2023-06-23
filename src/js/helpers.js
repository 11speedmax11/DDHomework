import { createNavigationBlock } from "@/blocks/nav";
import { createEmptyListBlock } from "@/blocks/plug";
import { createCardBlock } from "@/blocks/task";
import { createBlock } from '@/js/createBlocks';

const app = document.querySelector("#app");

export const ctreateMain = () => {
    const taskList = document.createElement("main");
    app.append(taskList);
};

export const createNavigation = () => {
    const navItem = createNavigationBlock("Проекты", "Задачи", "Пользователи", "../assets/images/profilPicture.png");
    app.append(navItem);
};

export const createPlug = () => {
    let main = document.querySelector("main");
    const plugItem = createEmptyListBlock("Нет ни одного пользователя", "Добавить");
    let div = createBlock('div', "user");
    div.append(plugItem);
    main.append(div);
};

export const createTask = () => {
    let main = document.querySelector('main');
    let section = createBlock('section', 'card');
    let ul = createBlock('ul', 'card__list');
    let div = createBlock('div', 'task');

    div.insertAdjacentHTML("afterbegin", `<div class="requests">
    <div class="requests__create">
      <div class="request__button create__XML">
        Создать с XML
      </div>
      <div class="request__button create__Fetch">
        Создать с Fetch
      </div>
      <div class="request__button create__Axios">
        Создать с Axios
      </div>
    </div>
    <div class="requests__get">
      <div class="request__button get__XML">
        Получить  с XML
      </div>
      <div class="request__button get__Fetch">
        Получить  с Fetch
      </div>
      <div class="request__button get__Axios">
        Получить  с Axios
      </div>
    </div>
    <div class="requests__edit">
      <div class="request__button edit__XML">
        Редактировать  с XML
      </div>
      <div class="request__button edit__Fetch">
        Редактировать  с Fetch
      </div>
      <div class="request__button edit__Axios">
        Редактировать  с Axios
      </div>
    </div>
    <div class="requests__delete">
      <div class="request__button delet__XML">
        Удалить  с XML
      </div>
      <div class="request__button delet__Fetch">
        Удалить  с Fetch
      </div>
      <div class="request__button delet__Axios">
        Удалить  с Axios
      </div>
    </div>
  </div>`)

    const taskItem = createCardBlock('НазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвание',
        '#1',
        'Иванов И.И.',
        '1 час',
        'Баранов В.В.',
        '1 минуту',
        true,
        '../img/profilPicture.png',
        'Черновик');
    ul.append(taskItem);

    const taskItemTwo = createCardBlock('звНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНиеНаззваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазваниеНазвание',
        '#1',
        'Иванов И.И.',
        '1 час',
        'Баранов В.В.',
        '1 минуту',
        true,
        '../img/profilPicture.png',
        'Черновик');
    ul.append(taskItemTwo);

    section.append(ul);
    div.append(section);
    main.append(div);
};


export const createProject = () => {
    let main = document.querySelector("main");
    let section = createBlock("section", "card")
    let ul = createBlock("ul", "card__list")
    let div = createBlock('div', 'project', '', true);

    div.insertAdjacentHTML("afterbegin", `<div class="requests">
    <div class="requests__create">
      <div class="request__button create__XML">
        Создать с XML
      </div>
      <div class="request__button create__Fetch">
        Создать с Fetch
      </div>
      <div class="request__button create__Axios">
        Создать с Axios
      </div>
    </div>
    <div class="requests__get">
      <div class="request__button get__XML">
        Получить  с XML
      </div>
      <div class="request__button get__Fetch">
        Получить  с Fetch
      </div>
      <div class="request__button get__Axios">
        Получить  с Axios
      </div>
    </div>
    <div class="requests__edit">
      <div class="request__button edit__XML">
        Редактировать  с XML
      </div>
      <div class="request__button edit__Fetch">
        Редактировать  с Fetch
      </div>
      <div class="request__button edit__Axios">
        Редактировать  с Axios
      </div>
    </div>
    <div class="requests__delete">
      <div class="request__button delet__XML">
        Удалить  с XML
      </div>
      <div class="request__button delet__Fetch">
        Удалить  с Fetch
      </div>
      <div class="request__button delet__Axios">
        Удалить  с Axios
      </div>
    </div>
  </div>`)

    const projectItem = createCardBlock('Название',
        '#1',
        'Иванов И.И.',
        '1 час',
        'Баранов В.В.',
        '1 минуту',
        false);
    ul.append(projectItem);

    const projectItemTwo = createCardBlock('Название',
        '#1',
        'Иванов И.И.',
        '1 час',
        'Баранов В.В.',
        '1 минуту',
        false);
    ul.append(projectItemTwo);

    section.append(ul);
    div.append(section);
    main.append(div);
};