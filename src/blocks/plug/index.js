import '@/blocks/plug/style.scss';
import { createBlock } from '@/js/createBlocks';

export const createEmptyListBlock = (text, buttonText) => {

  const emptySection = createBlock('section', 'empty-list');
  const emptyText = createBlock('p', 'empty-list__text', text);
  const addButton = createBlock('button', 'empty-list__button', buttonText);

  emptySection.appendChild(emptyText);
  emptySection.appendChild(addButton);

  return emptySection;

}

