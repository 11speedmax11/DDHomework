import {
  ctreateMain,
  createNavigation,
  createPlug,
  createTask,
  createProject,
} from './helpers';

import {installEvent} from '@/js/events.js';

export const start = () => {
  createNavigation();
ctreateMain();
createPlug();
createTask();
createProject();
installEvent();
};