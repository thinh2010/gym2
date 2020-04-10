<template>
  <div class="app-container">
    <el-form id="form" ref="form" v-loading="loading" :model="entity" :rules="rules" label-width="120px" @submit.native.prevent="">
      <el-row>
        <el-col :span="12">
          <div class="grid-content">
            <el-form-item label="Tiêu đề" prop="title">
              <el-input v-model="entity.title" name="title" />
            </el-form-item>
            <el-form-item label="CSS class" prop="css_class">
              <el-input v-model="entity.css_class" name="css_class" />
            </el-form-item>
            <el-form-item label="Text" prop="other_text">
              <el-input v-model="entity.other_text" name="other_text" />
            </el-form-item>
            <el-form-item label="Mô tả">
              <el-input v-model="entity.description" type="textarea" name="description" />
            </el-form-item>
            <el-form-item label="Kích hoạt">
              <el-switch v-model="entity.is_enabled" name="is_enabled" :value="entity.is_enabled" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content">
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
              <el-button v-if="isEditing()" type="danger" @click="onDelete()">Xóa</el-button>
              <el-button type="success" @click="goBack()"><i class="el-icon-back" /> Quay về block</el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce';
import ImageUpload from '@/components/Upload/Image';
// import BlockResource from '@/api/block';
import BlockContentResource from '@/api/blockContent';

// const blockApi = new BlockResource();
const blockContentApi = new BlockContentResource();

export default {
  name: 'FormBlock',
  components: { Tinymce, ImageUpload },
  data() {
    return {
      entity: {
        title: '',
        description: '',
        image: '',
        is_enabled: true,
        content: '',
        options: [],
      },
      fileList: [],
      saving: false,
      loading: false,
      rules: {
        title: [
          { required: true, message: 'Hãy điền tiêu đề trang', trigger: 'blur' },
        ],
      },
      uploadImage: {},
      changeFileFlag: false,
      activeTab: 'content',
    };
  },
  created() {
    if (this.isEditing()) {
      this.getBlockContent();
    }
  },
  methods: {
    async getBlockContent() {
      this.loading = true;
      const { data } = await blockContentApi.get(this.$route.params.bid);
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

        if (this.isEditing()) {
          await blockContentApi.postUpdate(this.entity.id, formData);
          this.$router.push({
            name: 'EditBlock',
            params: { id: this.$route.params.id },
          });
        } else {
          const { data } = await blockContentApi.store(this.$route.params.id, formData);
          this.$router.push({
            name: 'EditBlock',
            params: { id: this.$route.params.id, bid: data.id },
            query: { tab: 'blockcontent' },
          });
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
        await blockContentApi.destroy(id);
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
      return _.get(this.$route.params, 'bid', 0) !== 0;
    },
    handleCreate() {
      this.$router.push({ name: 'AddBlockContent', params: { id: this.entity.id }});
    },
    goBack() {
      this.$router.push({ name: 'EditBlock', id: this.$route.params.id });
    },
  },
};
</script>
