import request from '@/utils/request';
import Resource from '@/api/resource';

class BlockContentResource extends Resource {
  constructor(id) {
    super('block_contents');
  }

  postUpdate(id, resource) {
    return request({
      url: '/' + this.uri + '/' + id + '/edit',
      method: 'post',
      data: resource,
    });
  }

  store(id, resource) {
    return request({
      url: '/blocks/' + id + '/' + this.uri,
      method: 'post',
      data: resource,
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

export { BlockContentResource as default };
