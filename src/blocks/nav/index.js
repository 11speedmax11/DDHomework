import '@/blocks/nav/style.scss';
import '@/js/register.js';
import avatar from '@/assets/images/profilPicture.png'
import { createBlock } from '@/js/createBlocks';

export const createNavigationBlock = (projects, tasks, users, avatarSrc) => {
  const header = createBlock('header', 'header');
  const navigation = createBlock('ul', 'navigation');

  const projectsItem = createBlock('li', 'navigation__item', projects, true);
  const tasksItem = createBlock('li', 'navigation__item', tasks);
  const usersItem = createBlock('li', 'navigation__item', users);

  navigation.appendChild(projectsItem);
  navigation.appendChild(tasksItem);
  navigation.appendChild(usersItem);

  const headerButton = createBlock('div', 'header__button');

  const avatarImg = createBlock('img', 'header__img');
  avatarImg.setAttribute('src', avatar);
  avatarImg.setAttribute('alt', 'Аватар исполнителя');

  const dropdownMenu = createBlock('div', 'header__dropdownMenu');
  const profile = createBlock('div', 'header__profile');
  const profileText = createBlock('p', 'header__text', 'Профиль');
  const exit = createBlock('div', 'header__exit');
  const exitText = createBlock('p', 'header__text', 'Выход');


  profile.appendChild(profileText);
  exit.appendChild(exitText);
  dropdownMenu.appendChild(profile);
  dropdownMenu.appendChild(exit);

  headerButton.appendChild(dropdownMenu);
  headerButton.appendChild(avatarImg);

  headerButton.insertAdjacentHTML('beforeend', `<div class='header__icon'>
  <svg class='header__svg'> <use xlink:href='#vector'> </svg>
  </div>`)

  header.appendChild(navigation);
  header.appendChild(headerButton);

  return header;

}