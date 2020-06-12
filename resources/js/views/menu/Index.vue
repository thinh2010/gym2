<template>
  <div class="app-container">
    <el-row type="flex" class="row-bg">
      <el-col :span="12">
        <el-form :inline="true" @submit.native.prevent>
          <el-form-item label="Menu">
            <el-input v-model="newMenu" placeholder="Menu" />
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-plus" native-type="submit" type="primary" @click="addNewMenu">{{ $t('menu.add_new') }}</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-tabs v-model="activeName" v-loading="loading" style="margin-top:15px;" type="card" closable @edit="handleTabsEdit">
      <el-tab-pane v-for="item in menuTabs" :key="item.id" :label="item.title" :name="item.key">
        <tab-pane v-if="activeName==item.key" :menu="item.key" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Resource from '@/api/resource';
import TabPane from './components/TabPane';

const menuApi = new Resource('menus');
export default {
  name: 'MenuIndex',
  components: { TabPane },
  data() {
    return {
      loading: false,
      menuTabs: [],
      activeName: 'main_menu',
      newMenu: '',
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      this.loading = true;
      const { data } = await menuApi.list();
      this.menuTabs = data;
      this.loading = false;
    },
    async addNewMenu() {
      await menuApi.store({
        title: this.newMenu,
        key: this.newMenu.toLowerCase().split(' ').join('_'),
      });
      this.getList();
      this.newMenu = '';
    },
    async handleTabsEdit(targetName, action) {
      if (action === 'remove') {
        if (targetName === 'main_menu') {
          this.$confirm('Bạn không thể xóa menu chính', 'Thông báo', {
            confirmButtonText: 'Ok',
            cancelButtonText: 'Hủy',
            type: 'warning',
          });
        } else {
          const confirm = await this.$confirm('Bạn có chắc là muốn xóa menu này chứ?', 'Cảnh báo', {
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
            type: 'warning',
          });

          if (confirm) {
            await menuApi.destroy(targetName);
            this.$message({
              type: 'success',
              message: 'Xóa thành công',
            });
            this.getList();
          }
        }
      }
    },
  },
};
</script>
