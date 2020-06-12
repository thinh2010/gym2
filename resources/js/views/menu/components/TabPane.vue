<template>
  <div>
    <el-row>
      <el-col :span="18"><div class="grid-content bg-purple-dark">1</div></el-col>
      <el-col :span="6">
        <el-form @submit.native.prevent>
          <el-form-item label="Tên menu">
            <el-input v-model="form.title" placeholder="Tên menu" />
          </el-form-item>
          <el-form-item label="Loại">
            <el-input v-model="form.type" placeholder="Loại" />
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-plus" native-type="submit" type="primary" @click="createMenuItem">{{ $t('menu.add_new') }}</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TabPane',
  props: {
    menu: {
      type: String,
      default: 'main_menu',
    },
  },
  data() {
    return {
      form: {
        title: '',
        type: '',
      },
      menuItems: [],
    };
  },
  created() {
    console.log('ss');
  },
  methods: {
    createMenuItem() {
      console.log('s');
    },
  },
};
</script>
