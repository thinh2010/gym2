<template>
  <el-form-item>
    <el-upload
      v-model="image"
      :limit="1"
      :auto-upload="false"
      action=""
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-change="handleChange"
      :on-remove="handleRemove"
      :file-list="fileList"
      name="file"
    >
      <i class="el-icon-plus" />
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>

  </el-form-item>
</template>

<script>
export default {
  name: 'ImageUpload',
  props: {
    imageurl: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      image: '',
      fileList: [],
    };
  },
  watch: {
    imageurl: function(val) {
      if (val !== '') {
        this.fileList = [{
          name: 'image',
          url: val,
        }];
      }
    },
  },
  methods: {
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleChange(file, fileList) {
      this.$emit('changeImage', file);
    },
    handleRemove(file, fileList) {
      this.$emit('removeImage');
    },
  },
};
</script>
