import request from '@/utils/request';
import Resource from '@/api/resource';

class MenuItemResource extends Resource {
  constructor(menuId) {
    super(`menus/${menuId}/items`);
  }

  updateTree(data) {
    return request({
      url: '/' + this.uri + '/update_tree',
      method: 'post',
      data: data,
    });
  }
}

export { MenuItemResource as default };
