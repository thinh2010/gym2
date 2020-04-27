import request from '@/utils/request';
import Resource from '@/api/resource';

class BlockResource extends Resource {
  constructor() {
    super('blocks');
  }

  getEnabled() {
    return request({
      url: '/enabled_blocks',
      method: 'get',
    });
  }

  updateOrder(resource) {
    return request({
      url: '/' + this.uri + '/update_order',
      method: 'post',
      data: resource,
    });
  }
}

export { BlockResource as default };
