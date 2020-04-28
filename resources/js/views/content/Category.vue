<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="query.keyword" :placeholder="$t('table.keyword')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{ $t('table.search') }}
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-plus" @click="handleCreate">
        {{ $t('table.add') }}
      </el-button>
    </div>

    <el-table v-loading="loadingList" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Tiêu đề">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Kích hoạt?">
        <template slot-scope="scope">
          <boolean-view :value="scope.row.is_enabled" />
        </template>
      </el-table-column>

      <el-table-column align="center" label="Thao tác">
        <template slot-scope="scope">
          <router-link :to="{ name: 'EditCategory', params: { id: scope.row.id } }">
            <el-button type="primary" size="small" icon="el-icon-edit">
              Sửa
            </el-button>
          </router-link>
          <el-button type="danger" size="small" icon="el-icon-delete" @click="onDelete(scope.row.id)">Xóa</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Resource from '@/api/resource';
import { BLOCK_TYPES } from '@/constants';
import BooleanView from '@/components/Table/BooleanView';

const categoryApi = new Resource('categories');

export default {
  name: 'Category',
  components: { BooleanView },
  data() {
    return {
      list: [],
      loadingList: false,
      query: {
        page: 1,
        limit: 100,
        keyword: '',
        type: 'blog',
        display: 'tree',
      },
      types: [],
    };
  },
  created() {
    this.getList();
    this.types = BLOCK_TYPES;
  },
  methods: {
    async getList() {
      this.loadingList = true;
      const { data } = await categoryApi.list(this.query);
      this.list = data;
      this.loadingList = false;
    },
    async onDelete(id) {
      const confirm = await this.$confirm('Bạn có chắc là muốn xóa danh mục này chứ?', 'Warning', {
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy',
        type: 'warning',
      });

      if (confirm) {
        await categoryApi.destroy(id);
        this.$message({
          type: 'success',
          message: 'Xóa thành công',
        });
        this.getList();
      }
    },
    handleFilter() {
      console.log('filter');
    },
    handleCreate() {
      this.$router.push({ name: 'AddCategory' });
    },
  },
};
</script>
