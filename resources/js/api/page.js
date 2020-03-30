import request from '@/utils/request';
import Resource from '@/api/resource';

class PageResource extends Resource {
  constructor() {
    super('pages');
  }

  addBlock(pageId, blockId) {
    return request({
      url: `/${this.uri}/${pageId}/addBlock/${blockId}`,
      method: 'put',
    });
  }

  removeBlock(pageId, blockId) {
    return request({
      url: `/${this.uri}/${pageId}/block/${blockId}`,
      method: 'delete',
    });
  }
}

export { PageResource as default };
