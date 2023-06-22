import '@/blocks/task/style.scss';
import avatar from '@/assets/images/profilPicture.png'
import { createBlock } from '@/js/createBlocks';

export const createCardBlock = (name, number, creator, creationTime, changer, changeTime, isTask, avatarSrc = "", state = "") => {

  const cardItem = createBlock('li', 'card__item');
  const cardBase = createBlock('div', 'card__base');
  const cardHead = createBlock('div', 'card__head');
  const cardName = createBlock('p', 'card__name', name);
  cardHead.appendChild(cardName);

  if (isTask) {
    const cardImg = createBlock('img', 'card__img');
    cardImg.setAttribute('src', avatar);
    cardImg.setAttribute('alt', 'Аватар исполнителя');
    cardHead.appendChild(cardImg);
  }

  const cardBody = createBlock('div', 'card__body');
  const cardContent = createBlock('p', 'card__content');
  const cardNumber = createBlock('span', 'card__number', number);
  const creatorInfo = createBlock('span', '', `${creator} создал ${creationTime} назад`);

  cardContent.appendChild(cardNumber);
  cardContent.appendChild(creatorInfo);

  if (isTask) {
    const cardState = createBlock('span', 'card__state', state);
    cardContent.appendChild(cardState);
  }

  const cardChang = createBlock('p', 'card__chang', `${changer} изменил ${changeTime} назад`);

  cardBody.appendChild(cardContent);
  cardBody.appendChild(cardChang);
  cardBase.appendChild(cardHead);
  cardBase.appendChild(cardBody);

  const cardMenu = createBlock('div', 'card__menu');
  const myDiv = createBlock('div', 'card__icon');

  // const mySvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  // const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  // useElement.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', '#ellipsis');
  // mySvg.appendChild(useElement);
  myDiv.insertAdjacentHTML('beforeend', `<div class='icon'>
  <svg>
  <use xlink:href='#ellipsis'>
  </svg>
  </div>`)
  // myDiv.appendChild(mySvg);
  cardMenu.appendChild(myDiv);

  const dropdownMenu = createBlock('div', 'card__dropdownMenu');
  const editBtn = createBlock('div', 'card__edit');
  const editText = createBlock('p', '', 'Редактировать');

  editBtn.appendChild(editText);

  const deleteBtn = createBlock('div', 'card__delete');
  const deleteText = createBlock('p', '', 'Удалить');

  deleteBtn.appendChild(deleteText);
  dropdownMenu.appendChild(editBtn);
  dropdownMenu.appendChild(deleteBtn);

  cardMenu.appendChild(myDiv);
  cardMenu.appendChild(dropdownMenu);
  cardItem.appendChild(cardBase);
  cardItem.appendChild(cardMenu);

  return cardItem;

}