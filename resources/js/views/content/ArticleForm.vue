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
                <el-form-item label="Danh mục" prop="category_id">
                  <el-select v-model="entity.category_id" filterable placeholder="Chọn danh mục">
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
import Tinymce from '@/components/Tinymce';
import ImageUpload from '@/components/Upload/Image';
import Resource from '@/api/resource';

const articleApi = new Resource('articles');
const categoryApi = new Resource('categories');

export default {
  name: 'FormArticle',
  components: { Tinymce, ImageUpload },
  data() {
    return {
      entity: {
        title: '',
        description: '',
        image: '',
        is_enabled: 1,
        content: '',
        type: '',
        meta_title: '',
        meta_keywords: '',
        meta_description: '',
      },
      fileList: [],
      saving: false,
      loading: false,
      rules: {
        title: [
          { required: true, message: 'Hãy điền tiêu đề', trigger: 'blur' },
        ],
        category_id: [
          { required: true, message: 'Hãy chọn danh mục', trigger: 'blur' },
        ],
      },
      uploadImage: {},
      changeFileFlag: false,
      activeTab: 'content',
      categories: [],
    };
  },
  created() {
    this.entity.type = this.$route.meta.type;
    this.activeTab = _.get(this.$route.query, 'tab', 'content');
    this.getCategories();

    if (this.isEditing()) {
      this.getArticle();
    }
  },
  methods: {
    async getCategories() {
      this.loading = true;
      const { data } = await categoryApi.list({ type: this.$route.meta.type });
      console.log(data);
      data.map(item => {
        this.categories.push({
          id: item.id,
          label: item.title,
        });
      });
      this.loading = false;
    },
    async getArticle() {
      this.loading = true;
      const { data } = await articleApi.get(this.$route.params.id);
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
      const valid = await this.$refs['form'].validate();
      if (valid) {
        this.saving = true;
        const form = document.getElementById('form');
        const formData = new FormData(form);

        for (const key in this.entity) {
          formData.set(key, this.entity[key]);
        }

        // if (formData.get('is_enabled') === 'on') {
        //   formData.set('is_enabled', 1);
        // } else {
        //   formData.set('is_enabled', 0);
        // }

        if (this.changeFileFlag) {
          formData.set('image', _.get(this.uploadImage, 'raw', ''));
        }

        if (this.entity.image === '') {
          formData.set('image', '');
        }

        // formData.set('content', _.get(this.entity, 'content', ''));
        // formData.set('type', this.entity.type);
        // formData.set('parent_id', this.entity.parent_id);

        if (this.isEditing()) {
          await articleApi.postUpdate(this.entity.id, formData);
        } else {
          const { data } = await articleApi.store(formData);
          this.$router.push({ name: 'EditArticle', params: { id: data.id }});
        }
      } else {
        console.log('flse');
        this.saving = false;
        return false;
      }
      this.saving = false;
      this.$message({
        type: 'success',
        message: 'Lưu thành công',
      });
    },
    async onDelete(id) {
      const confirm = await this.$confirm('Bạn có chắc là muốn xóa danh mục này chứ?', 'Warning', {
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy',
        type: 'warning',
      });

      if (confirm) {
        await articleApi.destroy(id);
        this.$message({
          type: 'success',
          message: 'Xóa thành công',
        });
        this.$router.push({ name: 'Categories' });
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
