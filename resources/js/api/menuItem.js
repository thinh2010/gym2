import request from '@/utils/request';
import Resource from '@/api/resource';

class MenuItemResource extends Resource {
  constructor() {
    super('menu_items');
  }
}

export { MenuItemResource as default };
