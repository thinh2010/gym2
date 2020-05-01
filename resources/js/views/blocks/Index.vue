<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="query.keyword" :placeholder="$t('table.keyword')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="query.type" :placeholder="$t('table.type')" clearable style="width: 90px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in types" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
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

      <el-table-column align="center" label="Loại">
        <template slot-scope="scope">
          <span>{{ scope.row.type }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Mô tả">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Kích hoạt?">
        <template slot-scope="scope">
          <span>{{ scope.row.is_enabled }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Thao tác">
        <template slot-scope="scope">
          <router-link :to="{ name: 'EditBlock', params: { id: scope.row.id } }">
            <el-button type="primary" size="small" icon="el-icon-edit">
              Sửa
            </el-button>
          </router-link>
          <el-button type="danger" @click="onDelete(scope.row.id)">Xóa</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import BlockResource from '@/api/block';
import { BLOCK_TYPES } from '@/constants';

const blockApi = new BlockResource();

export default {
  name: 'Blocks',
  data() {
    return {
      list: [],
      loadingList: false,
      query: {
        page: 1,
        limit: 100,
        keyword: '',
        type: '',
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
      const { data } = await blockApi.list(this.query);
      this.list = data;
      this.loadingList = false;
    },
    async onDelete(id) {
      const confirm = await this.$confirm('Bạn có chắc là muốn xóa block này chứ?', 'Warning', {
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy',
        type: 'warning',
      });

      if (confirm) {
        await blockApi.destroy(id);
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
      this.$router.push({ name: 'AddBlock' });
    },
  },
};
</script>
