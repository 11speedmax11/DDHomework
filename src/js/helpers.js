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