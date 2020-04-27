<template>
  <div class="app-container">
    <el-tabs v-model="activeTab" style="width: 100%;" type="border-card">
      <el-tab-pane label="Nội dung" name="content">
        <el-form id="form" ref="form" v-loading="loading" :model="entity" :rules="rules" label-width="150px" @submit.native.prevent="">
          <el-row>
            <el-col :span="12">
              <div class="grid-content">
                <el-form-item label="Tiêu đề" prop="title">
                  <el-input v-model="entity.title" name="title" />
                </el-form-item>
                <el-form-item label="Slug" prop="slug">
                  <el-input v-model="entity.slug" name="slug" />
                </el-form-item>
                <el-form-item label="Mô tả">
                  <el-input v-model="entity.description" type="textarea" name="description" />
                </el-form-item>
                <el-form-item label="Kích hoạt">
                  <el-switch v-model="entity.is_enabled" name="is_enabled" :value="entity.is_enabled" :active-value="1" :inactive-value="0" />
                </el-form-item>
                <el-form-item label="Page cha">
                  <el-select v-model="entity.parent_id" filterable placeholder="Chọn danh mục cha">
                    <el-option
                      v-for="item in categories"
                      :key="item.id"
                      :label="item.label"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="grid-content">
                <el-form-item label="Tiêu đề thẻ meta">
                  <el-input v-model="entity.meta_title" name="meta_title" />
                </el-form-item>
                <el-form-item label="Từ khóa thẻ meta">
                  <el-input v-model="entity.meta_keywords" name="meta_keywords" />
                </el-form-item>
                <el-form-item label="Mô tả thẻ meta">
                  <el-input v-model="entity.meta_description" name="meta_description" />
                </el-form-item>
                <el-form-item label="Ảnh">
                  <image-upload :imageurl="entity.image" @changeImage="onFileChange" @removeImage="onFileRemove" />
                </el-form-item>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="grid-content">
                <el-form-item label="Nội dung">
                  <tinymce v-model="entity.content" name="content" :height="300" />
                </el-form-item>
                <el-form-item>
                  <el-button v-loading="saving" native-type="submit" type="primary" @click="onSubmit()">Lưu lại</el-button>
                  <el-button v-if="isEditing()" type="danger" @click="onDelete(entity.id)">Xóa</el-button>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { TYPE_BLOG } from '@/constants';
import Tinymce from '@/components/Tinymce';
import ImageUpload from '@/components/Upload/Image';
import Resource from '@/api/resource';

const categoryApi = new Resource('categories');

export default {
  name: 'FormCategory',
  components: { Tinymce, ImageUpload },
  data() {
    return {
      entity: {
        title: '',
        description: '',
        image: '',
        is_enabled: 1,
        content: '',
        block_contents: [],
        type: '',
      },
      fileList: [],
      saving: false,
      loading: false,
      rules: {
        title: [
          { required: true, message: 'Hãy điền tiêu đề', trigger: 'blur' },
        ],
      },
      uploadImage: {},
      changeFileFlag: false,
      activeTab: 'content',
      categories: [],
    };
  },
  created() {
    this.entity.type = TYPE_BLOG;
    this.activeTab = _.get(this.$route.query, 'tab', 'content');
    this.getCategories();

    if (this.isEditing()) {
      this.getCategory();
    }
  },
  methods: {
    async getCategories() {
      this.loading = true;
      const { data } = await categoryApi.list({ type: TYPE_BLOG });
      data.map(item => {
        if (this.isEditing() && item.id === this.entity.id) {
          return;
        }
        this.categories.push({
          id: item.id,
          label: item.title,
        });
      });
      this.loading = false;
    },
    async getCategory() {
      this.loading = true;
      const { data } = await categoryApi.get(this.$route.params.id);
      this.entity = data;
      if (this.entity.image !== '') {
        this.fileList.push({
          name: 'image',
          url: this.entity.image,
        });
      }
      this.loading = false;
    },
    async onSubmit() {
      this.saving = true;
      const valid = await this.$refs['form'].validate();
      if (valid) {
        const form = document.getElementById('form');
        const formData = new FormData(form);

        if (formData.get('is_enabled') === 'on') {
          formData.set('is_enabled', 1);
        } else {
          formData.set('is_enabled', 0);
        }

        if (this.changeFileFlag) {
          formData.set('image', _.get(this.uploadImage, 'raw', ''));
        }

        if (this.entity.image === '') {
          formData.set('image', '');
        }

        formData.set('content', _.get(this.entity, 'content', ''));
        formData.set('type', this.entity.type);

        if (this.isEditing()) {
          await categoryApi.postUpdate(this.entity.id, formData);
        } else {
          const { data } = await categoryApi.store(formData);
          this.$router.push({ name: 'EditCategory', params: { id: data.id }});
        }
      } else {
        return false;
      }
      this.saving = false;
      this.$message({
        type: 'success',
        message: 'Lưu thành công',
      });
    },
    async onDelete(id) {
      const confirm = await this.$confirm('Bạn có chắc là muốn xóa block này chứ?', 'Warning', {
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
        this.$router.push({ name: 'Blocks' });
      }
    },
    onFileChange(file) {
      this.uploadImage = file;
      this.changeFileFlag = true;
      this.entity.image = URL.createObjectURL(file.raw);
    },
    onFileRemove() {
      this.entity.image = '';
      this.uploadImage = {};
    },
    isEditing() {
      return _.get(this.$route.params, 'id', 0) !== 0;
    },
    handleCreate() {
      this.$router.push({ name: 'AddBlockContent', params: { id: this.entity.id }});
    },
  },
};
</script>

<style scoped>
.sortable-ghost{
  opacity: .8;
  color: #fff!important;
  background: #42b983!important;
}
.icon-star {
  margin-right:2px;
}
.drag-handler {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.show-d {
  margin-top: 15px;
}
</style>
