import request from '@/utils/request';
import Resource from '@/api/resource';

class SettingResource extends Resource {
  constructor() {
    super('settings');
  }

  get() {
    return request({
      url: `/${this.uri}`,
      method: 'get',
    });
  }

  update(id, resource) {
    return request({
      url: `/${this.uri}/${id}`,
      method: 'post',
      data: resource,
    });
  }
}

export { SettingResource as default };
