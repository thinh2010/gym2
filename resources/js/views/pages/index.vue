<template>
  <div>
    <el-container style="height: 100vh; border: 1px solid #eee">
      <el-aside width="25%" style="border-right: 1px solid #eee; height: 100%">
        <el-button type="primary" icon="el-icon-plus">
          Thêm mới
        </el-button>

        <div class="scrollable pos-r bdT layer w-100 fxg-1 ps">
          sdfs
          <ul class="p-20 nav flex-column">
            <li v-for="page in list" :key="page.id" class="nav-item">
              <a href="javascript:void(0)" class="nav-link c-grey-800 cH-blue-500 active">
                <i v-if="page.type == 'homepage'" class="fa fa-home" aria-hidden="true" />
                <i v-else class="fa fa-file-text-o" aria-hidden="true" />
                <span>{{ page.title }}</span>
              </a>
            </li>
          </ul>
        </div>
      </el-aside>

      <el-container>
        container
      </el-container>
    </el-container>
  </div>
</template>

<script>
import PageResource from '@/api/page';

const pageApi = new PageResource();

export default {
  name: 'Page',
  data() {
    return {
      list: [],
    };
  },
  methods: {
    async getList() {
      const { limit, page } = this.query;
      this.loading = true;
      const { data, meta } = await pageApi.list(this.query);
      this.list = data;
      this.list.forEach((element, index) => {
        element['index'] = (page - 1) * limit + index + 1;
      });
      this.total = meta.total;
      this.loading = false;
    },
  },
};
</script>
