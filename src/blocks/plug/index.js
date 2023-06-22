import '@/blocks/plug/style.scss';
import { createBlock } from '@/js/createBlocks';

export const createEmptyListBlock = (text, buttonText) => {

  const emptySection = createBlock('section', 'empty-list');

  const emptyText = createBlock('p', 'empty-list__text', text);
  // const emptyText = document.createElement('p');
  // emptyText.classList.add('empty-list__text');
  // emptyText.textContent = text;

  const addButton = createBlock('button', 'empty-list__button', buttonText);
  // const addButton = document.createElement('button');
  // addButton.classList.add('empty-list__button');
  // addButton.textContent = buttonText;

  emptySection.appendChild(emptyText);
  emptySection.appendChild(addButton);

  return emptySection;

}

