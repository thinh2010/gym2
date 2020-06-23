<template>
  <div class="app-container">
    <el-form id="form" ref="form" v-loading="loading" :model="entity" :rules="rules" label-width="150px" @submit.native.prevent="">
      
    </el-form>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce';
import ImageUpload from '@/components/Upload/Image';
import Resource from '@/api/resource';

const userApi = new Resource('articles');
export default {
  name: 'UserForm',
  components: { Tinymce, ImageUpload },
}
</script>
