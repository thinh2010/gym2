<template>
  <div v-loading="loading">
    <el-row>
      <el-col :span="18">
        <el-main>
          <menu-item-list :items="menuItems" />
        </el-main>
      </el-col>
      <el-col :span="6">
        <el-card v-loading="loadItem" class="box-card">
          <el-form @submit.native.prevent>
            <el-form-item label="Tên menu">
              <el-input v-model="form.title" placeholder="Tên menu" />
            </el-form-item>
            <el-form-item label="Loại">
              <el-select v-model="form.type" placeholder="Loại menu" class="el-input" @change="changeType">
                <el-option
                  v-for="item in menuTypeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item v-if="form.type == 'page'" label="Page">
              <el-select v-model="form.target" placeholder="Chọn page" class="el-input" @change="createLink()">
                <el-option
                  v-for="page in pages"
                  :key="page.id"
                  :label="page.title"
                  :value="page.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item v-if="form.type == 'content'" label="Nội dung">
              <el-select v-model="form.target" placeholder="Chọn nội dung" class="el-input" @change="createLink()">
                <el-option
                  v-for="item in contentOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="Menu cha">
              <el-select v-model="form.parent_id" clearable placeholder="Chọn menu cha" class="el-input">
                <el-option
                  v-for="item in menuItems"
                  :key="item.id"
                  :label="item.title"
                  :value="item.id"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="Link">
              <el-input v-model="form.link" placeholder="Link" :disabled="form.type !== 'link'" />
            </el-form-item>
            <el-form-item>
              <el-button v-loading="saving" icon="el-icon-plus" native-type="submit" type="primary" @click="createMenuItem">{{ $t('menu.save') }}</el-button>
              <el-button icon="el-icon-delete" type="danger" @click="initForm">{{ $t('common.cancel') }}</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { MENU_TYPES } from '@/constants';
import PageResource from '@/api/page';
import MenuItemResource from '@/api/menuItem';

import MenuItemList from './MenuItemList';

const pageApi = new PageResource();

export default {
  name: 'TabPane',
  components: { MenuItemList },
  props: {
    menu: {
      type: String,
      default: 'main_menu',
    },
  },
  data() {
    return {
      form: {},
      menuItems: [],
      menuTypeOptions: [],
      pages: [],
      contentOptions: [
        {
          value: 'blog',
          label: 'Blog',
        },
        {
          value: 'faqs',
          label: 'FAQs',
        },
      ],
      contentType: '',
      loading: false,
      loadItem: false,
      saving: false,
      menuItemApi: {},
    };
  },
  created() {
    this.initForm();
    this.menuItemApi = new MenuItemResource(this.menu);
    this.menuTypeOptions = MENU_TYPES;
    this.getMenuItems();
    this.getPages();

    Bus.$on('updateTree', () => {
      this.menuItemApi.updateTree(this.menuItems);
    });

    Bus.$on('editMenuItem', async id => {
      this.loadItem = true;
      const { data } = await this.menuItemApi.get(id);
      this.form = data;
      this.loadItem = false;
    });

    Bus.$on('deleteMenuItem', async id => {
      this.loading = true;
      await this.menuItemApi.destroy(id);
      this.getMenuItems();
      this.$message({
        type: 'success',
        message: 'Xóa menu thành công!',
      });
      this.loading = false;
    });
  },
  methods: {
    async createMenuItem() {
      this.saving = true;
      if (this.form.id === '') {
        await this.menuItemApi.store(this.form);
      } else {
        await this.menuItemApi.update(this.form.id, this.form);
      }
      this.$message({
        type: 'success',
        message: 'Lưu menu thành công!',
      });
      this.initForm();
      this.saving = false;
      this.getMenuItems();
    },
    async getPages() {
      this.loading = true;
      const { data } = await pageApi.list();
      this.pages = data;
      this.loading = false;
    },
    async getMenuItems() {
      this.loading = true;
      this.menuItems = [];
      const { data } = await this.menuItemApi.list();
      this.menuItems = data;
      this.loading = false;
    },
    async createLink() {
      if (this.form.type === 'page') {
        const { data } = await pageApi.get(this.form.target);
        this.form.link = `/page/${data.slug}`;
      }
      if (this.form.type === 'content') {
        this.form.link = `/${this.form.target}`;
      }
    },
    changeType() {
      this.form.target = '';
    },
    async edit(id) {
      this.loadItem = true;
      const { data } = await this.menuItemApi.get(id);
      this.form = data;
      this.loadItem = false;
    },
    async deleteItem(id) {
      this.$emit('deleteItem', id);
    },
    initForm() {
      this.form = {
        id: '',
        title: '',
        type: '',
        link: '',
        target: '',
      };
    },
  },
};
</script>
