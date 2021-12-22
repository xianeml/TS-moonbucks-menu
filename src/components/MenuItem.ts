import { $ } from '../utils/domController.js';
import { menuStore } from '../store/index.js';

const render = () => {
  const { menus } = menuStore.getState();

  $('#espresso-menu-list').innerHTML = menus
    .map(
      (menu, index) =>
        `<li id="espresso-menu-id-${index}" class="menu-list-item d-flex items-center py-2">
  <span id="espresso-menu-name" class="w-100 pl-2 menu-name">${menu}</span>
  <button
    type="button"
    id="espresso-edit-button"
    class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
  >
    수정
  </button>
  <button
    id="espresso-remove-button"
    type="button"
    class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
  >
    삭제
  </button>
</li>`,
    )
    .join('\n');
};

export default render;
