<template>
  <div>
    <el-container style="min-height: 100vh; border: 1px solid #eee">
      <el-aside width="25%" style="border-right: 1px solid #eee; min-height: 100%">
        <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">
          Thêm mới
        </el-button>

        <el-tree v-loading="loadingList" :data="pageTree" @node-click="handleNodeClick" />
      </el-aside>

      <el-container v-if="isEditing()" v-loading="loadingEntity">
        <el-tabs v-model="activeTab" style="width: 100%;" type="border-card">
          <el-tab-pane label="Nội dung" name="content">
            <el-form v-show="currentEdit != 0" ref="form" :model="entity" label-width="150px" :rules="rules">
              <el-row>
                <el-col :span="12"><div class="grid-content">
                  <el-form-item label="Tiêu đề trang" prop="title">
                    <el-input v-model="entity.title" />
                  </el-form-item>
                  <el-form-item label="Slug" prop="slug">
                    <el-input v-model="entity.slug" />
                  </el-form-item>
                  <el-form-item label="Loại trang" prop="type">
                    <el-select v-model="entity.type" placeholder="Loại trang">
                      <el-option
                        v-for="item in pageTypes"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      />
                    </el-select>
                  </el-form-item>
                </div></el-col>
                <el-col :span="12"><div class="grid-content">
                  <el-form-item label="Tiêu đề thẻ meta">
                    <el-input v-model="entity.meta_title" />
                  </el-form-item>
                  <el-form-item label="Từ khóa thẻ meta">
                    <el-input v-model="entity.meta_keywords" />
                  </el-form-item>
                  <el-form-item label="Mô tả thẻ meta">
                    <el-input v-model="entity.meta_description" />
                  </el-form-item>
                </div></el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content">
                    <el-form-item label="Kích hoạt">
                      <el-switch v-model="entity.is_enabled" />
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content">
                    <el-form-item label="Mô tả ngắn">
                      <el-input v-model="entity.description" type="textarea" />
                    </el-form-item>
                  </div>
                </el-col>
                <el-col :span="24">
                  <div class="grid-content">
                    <el-form-item label="Nội dung">
                      <tinymce v-model="entity.content" :height="300" />
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="24">
                  <div class="grid-content">
                    <el-form-item>
                      <el-button v-loading="saving" type="primary" @click="onSubmit">Lưu lại</el-button>
                      <el-button type="danger" @click="onDelete(currentEdit)">Xóa</el-button>
                    </el-form-item>
                  </div>
                </el-col>
              </el-row>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="Block nhúng" name="block">
            Block
          </el-tab-pane>
          <el-tab-pane label="Bài viết" name="item">
            Item
          </el-tab-pane>
        </el-tabs>
      </el-container>
    </el-container>

    <el-dialog
      title="Thêm mới trang nội dung"
      :visible.sync="dialogFormVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-form ref="newPageForm" :model="newPage" :rules="newPageRules" label-width="120px" @submit.native.prevent="onSaveNew()">
        <el-form-item label="Tiêu đề trang" prop="title">
          <el-input v-model="newPage.title" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Đóng</el-button>
        <el-button v-loading="savingNew" native-type="submit" type="primary" @click="onSaveNew()">Thêm mới</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import PageResource from '@/api/page';
import { PAGE_TYPES } from '@/constants';
import Tinymce from '@/components/Tinymce';

const pageApi = new PageResource();

export default {
  name: 'Page',
  components: { Tinymce },
  data() {
    return {
      list: [],
      pageTree: [],
      saving: false,
      savingNew: false,
      loadingList: true,
      loadingEntity: false,
      currentEdit: 0,
      entity: {},
      newPage: {},
      activeTab: 'content',
      pageTypes: [],
      dialogFormVisible: false,
      newPageRules: {
        title: [
          { required: true, message: 'Hãy điền tiêu đề trang', trigger: 'blur' },
        ],
      },
      rules: {
        title: [
          { required: true, message: 'Hãy điền tiêu đề trang', trigger: 'blur' },
        ],
        slug: [
          { required: true, message: 'Hãy điền slug', trigger: 'blur' },
        ],
        type: [
          { required: true, message: 'Hãy chọn loại trang', trigger: 'blur' },
        ],
      },
    };
  },
  computed: {
  },
  watch: {
    list: function(val) {
      this.pageTree = [];
      this.list.map((item) => {
        this.pageTree.push({
          id: item.id,
          label: item.title,
        });
      });
    },
    currentEdit: function(val) {
      if (val !== 0) {
        this.getPage(val);
      }
    },
  },
  created() {
    this.getList();

    this.currentEdit = _.get(this.$route.params, 'id', 0);
    if (this.isEditing()) {
      this.loadingEntity = true;
      this.getPage(this.currentEdit);
    }

    this.pageTypes = PAGE_TYPES;
  },
  methods: {
    async getList() {
      this.loadingList = true;
      const { data } = await pageApi.list();
      this.list = data;
      this.loadingList = false;
    },
    async getPage(id) {
      this.loadingEntity = true;
      const { data } = await pageApi.get(id);
      this.entity = data;
      this.loadingEntity = false;
    },
    async onSubmit() {
      this.saving = true;
      const valid = await this.$refs['form'].validate();
      if (valid) {
        await pageApi.update(this.currentEdit, this.entity);
      } else {
        return false;
      }
      this.saving = false;
      this.$message({
        type: 'success',
        message: 'Lưu thành công',
      });
    },
    async onSaveNew() {
      this.savingNew = true;
      const valid = await this.$refs['form'].validate();
      if (valid) {
        const { data } = await pageApi.store(this.newPage);
        this.pageTree.push({
          id: data.id,
          label: data.title,
        });
        this.dialogFormVisible = false;
      } else {
        return false;
      }
      this.savingNew = false;
    },
    async onDelete(id) {
      const confirm = await this.$confirm('Bạn có chắc là muốn xóa trang này chứ?', 'Warning', {
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy',
        type: 'warning',
      });

      if (confirm) {
        await pageApi.destroy(id);
        this.currentEdit = 0;
        this.getList();
        this.$message({
          type: 'success',
          message: 'Xóa thành công',
        });
        this.$router.push({ name: 'Pages' });
      }
    },
    handleClose(done) {
      done();
    },
    isEditing() {
      return this.currentEdit !== 0;
    },
    handleNodeClick(data) {
      this.$router.push({ name: 'EditPage', params: { id: data.id }});
      this.currentEdit = data.id;
    },
  },
};
</script>

<style scoped>
  ul.pages {
    list-style: none;
  }

  .el-tree {
    margin-top: 10px;
    padding: 10px 0;
  }

  form {
    width: 100%;
    margin-top: 10px;
  }
</style>
