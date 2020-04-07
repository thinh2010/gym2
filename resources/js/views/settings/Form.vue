<template>
  <div class="app-container">
    <el-form id="form" ref="form" v-loading="loading" :model="entity" :rules="rules" label-width="160px" @submit.native.prevent="">
      <el-row>
        <el-col :span="12">
          <div class="grid-content">
            <el-form-item label="Tên website" prop="sitename">
              <el-input v-model="entity.sitename" name="sitename" />
            </el-form-item>
            <el-form-item label="URL website" prop="site_url">
              <el-input v-model="entity.site_url" name="site_url" />
            </el-form-item>
            <el-form-item label="Tên công ty">
              <el-input v-model="entity.company_name" type="textarea" name="company_name" />
            </el-form-item>
            <el-form-item label="Logo">
              <image-upload :imageurl="entity.logo" @changeImage="onFileChange" @removeImage="onFileRemove" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content">
            <el-form-item label="Địa chỉ" prop="address_hn">
              <el-input v-model="entity.address_hn" name="address_hn" />
            </el-form-item>
            <el-form-item label="Số điện thoại" prop="tel1">
              <el-input v-model="entity.tel1" name="tel1" />
            </el-form-item>
            <el-form-item label="Tiêu đề thẻ meta" prop="meta_title">
              <el-input v-model="entity.meta_title" name="meta_title" />
            </el-form-item>
            <el-form-item label="Mô tả thẻ meta" prop="meta_description">
              <el-input v-model="entity.meta_description" name="meta_description" />
            </el-form-item>
            <el-form-item label="Từ khóa thẻ meta" prop="meta_keyword">
              <el-input v-model="entity.meta_keyword" name="meta_keyword" />
            </el-form-item>
          </div>
        </el-col>
        <el-col :span="24">
          <div class="grid-content">
            <el-form-item>
              <el-button v-loading="saving" native-type="submit" type="primary" @click="onSubmit()">Lưu lại</el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import ImageUpload from '@/components/Upload/Image';
import SettingResource from '@/api/setting';

const settingApi = new SettingResource();

export default {
  name: 'Settings',
  components: { ImageUpload },
  data() {
    return {
      entity: {},
      saving: false,
      loading: false,
      uploadImage: {},
      rules: {
        sitename: [
          { required: true, message: 'Hãy điền tên website', trigger: 'blur' },
        ],
        company_name: [
          { required: true, message: 'Hãy điền tên công ty', trigger: 'blur' },
        ],
        address_hn: [
          { required: true, message: 'Hãy diền địa chỉ', trigger: 'blur' },
        ],
        tel1: [
          { required: true, message: 'Hãy số điện thoại', trigger: 'blur' },
        ],
      },
    };
  },
  created() {
    this.getSetting();
  },
  methods: {
    async getSetting() {
      this.loading = true;
      const { data } = await settingApi.get();
      this.entity = data;
      this.loading = false;
    },
    async onSubmit() {
      this.saving = true;
      const valid = await this.$refs['form'].validate();
      if (valid) {
        const form = document.getElementById('form');
        const formData = new FormData(form);

        if (this.changeFileFlag) {
          formData.set('logo', _.get(this.uploadImage, 'raw', ''));
        }

        if (this.entity.logo === '') {
          formData.set('logo', '');
        }
        await settingApi.update(this.entity.id, formData);
      } else {
        return false;
      }
      this.saving = false;
      this.$message({
        type: 'success',
        message: 'Lưu thành công',
      });
    },
    onFileChange(file) {
      this.uploadImage = file;
      this.changeFileFlag = true;
      this.entity.logo = URL.createObjectURL(file.raw);
    },
    onFileRemove() {
      this.entity.logo = '';
      this.uploadImage = {};
    },
  },
};
</script>
