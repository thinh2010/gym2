<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="query.keyword" :placeholder="$t('table.keyword')" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="query.role" :placeholder="$t('table.role')" clearable style="width: 90px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in roles" :key="item" :label="item | uppercaseFirst" :value="item" />
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        {{ $t('table.search') }}
      </el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-plus" @click="handleCreate">
        {{ $t('table.add') }}
      </el-button>
    </div>

    <el-table v-loading="loadingList" :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label="ID" width="80">
        <template slot-scope="scope">
          <span>{{ scope.row.index }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Title">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Type">
        <template slot-scope="scope">
          <span>{{ scope.row.type }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Description" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Enabeld?">
        <template slot-scope="scope">
          <span>{{ scope.row.is_enabled }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import BlockResource from '@/api/block';

const blockApi = new BlockResource();

export default {
  name: 'Blocks',
  data() {
    return {
      list: [],
      loadingList: false,
      query: {
        page: 1,
        limit: 15,
        keyword: '',
        role: '',
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.loadingList = true;
      const { data } = await blockApi.list(this.query);
      this.list = data;
      this.loadingList = false;
    },
  },
};
</script>
