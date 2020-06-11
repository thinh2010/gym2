import request from '@/utils/request';
import Resource from '@/api/resource';

class MenuResource extends Resource {
  constructor() {
    super('menus');
  }
}

export { MenuResource as default };
