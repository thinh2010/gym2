<template>
  <div class="app-container">
    <el-tabs v-model="activeTab" style="width: 100%;" type="border-card">
      <el-tab-pane label="Nội dung" name="content">
        <el-form id="form" ref="form" v-loading="loading" :model="entity" :rules="rules" label-width="120px" @submit.native.prevent="">
          <el-row>
            <el-col :span="12">
              <div class="grid-content">
                <el-form-item label="Tiêu đề" prop="title">
                  <el-input v-model="entity.title" name="title" />
                </el-form-item>
                <el-form-item label="Mô tả">
                  <el-input v-model="entity.description" type="textarea" name="description" />
                </el-form-item>
                <el-form-item label="Kích hoạt">
                  <el-switch v-model="entity.is_enabled" name="is_enabled" :value="entity.is_enabled" />
                </el-form-item>
                <el-form-item label="Loại" prop="type">
                  <el-select v-model="entity.type" name="type" placeholder="Loại">
                    <el-option
                      v-for="item in types"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item v-for="(option, idx) in options" :key="idx" :label="option.label">
                  <custom-form-field :option="option" :entity="entity" />
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
                  <el-button v-if="isEditing()" type="danger" @click="onDelete(entity.id)">Xóa</el-button>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </el-form>
      </el-tab-pane>
      <el-tab-pane v-if="isEditing()" label="Block con" name="blockcontent">
        <div class="filter-container">
          <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-plus" @click="handleCreate">
            {{ $t('table.add') }}
          </el-button>
        </div>

        <el-table ref="dragTable" v-loading="loading" :data="entity.block_contents" row-key="id" border fit highlight-current-row style="width: 100%">
          <el-table-column align="center" label="ID" width="65">
            <template slot-scope="scope">
              <span>{{ scope.row.id }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="Tiêu đề">
            <template slot-scope="scope">
              <span>{{ scope.row.title }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="Ảnh">
            <template slot-scope="scope">
              <el-image
                style="width: 100px; height: 100px"
                :src="scope.row.image"
                fit="fill"
              />
            </template>
          </el-table-column>

          <el-table-column align="center" label="Miêu tả">
            <template slot-scope="scope">
              <span>{{ scope.row.description }}</span>
            </template>
          </el-table-column>

          <el-table-column align="center" label="Thao tác">
            <template slot-scope="{row}">
              <el-button type="primary" size="small" icon="el-icon-edit" @click="gotoEditBlockContent(row.id)">
                Sửa
              </el-button>
              <el-button type="danger" size="small" icon="el-icon-edit" @click="deleteBlockContent(row.id)">
                Xóa
              </el-button>
            </template>
          </el-table-column>

          <el-table-column align="center" label="Sắp xếp" width="80">
            <template slot-scope="{}">
              <svg-icon class="drag-handler" icon-class="drag" />
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { BLOCK_TYPES, CUSTOM_OPTIONS, TYPE_BLOCK } from '@/constants';
import Tinymce from '@/components/Tinymce';
import ImageUpload from '@/components/Upload/Image';
import BlockResource from '@/api/block';
import BlockContentResource from '@/api/blockContent';
import Sortable from 'sortablejs';
import CustomFormField from '@/components/Form/CustomFormField';

const blockApi = new BlockResource();
const blockContentApi = new BlockContentResource();

export default {
  name: 'FormBlock',
  components: { Tinymce, ImageUpload, CustomFormField },
  data() {
    return {
      entity: {
        title: '',
        description: '',
        image: '',
        is_enabled: true,
        content: '',
        options: [],
        block_contents: [],
        type: '',
      },
      fileList: [],
      types: [],
      saving: false,
      loading: false,
      rules: {
        title: [
          { required: true, message: 'Hãy điền tiêu đề block', trigger: 'blur' },
        ],
        type: [
          { required: true, message: 'Hãy chọn loại block', trigger: 'blur' },
        ],
      },
      uploadImage: {},
      changeFileFlag: false,
      activeTab: 'blockcontent',
      newList: [],
    };
  },
  computed: {
    options: function() {
      if (this.entity.type !== '') {
        return _.get(CUSTOM_OPTIONS, this.entity.type, []);
      }
      return [];
    },
  },
  created() {
    this.types = BLOCK_TYPES;
    this.entity.type = TYPE_BLOCK;
    this.activeTab = _.get(this.$route.query, 'tab', 'content');

    if (this.isEditing()) {
      this.getBlock();
      this.updateBlockOrder();
    }
  },
  methods: {
    async getBlock() {
      this.loading = true;
      const { data } = await blockApi.get(this.$route.params.id);
      this.entity = data;
      if (this.entity.image !== '') {
        this.fileList.push({
          name: 'image',
          url: this.entity.image,
        });
      }
      this.loading = false;

      this.$nextTick(() => {
        this.setSort();
      });
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
          await blockApi.postUpdate(this.entity.id, formData);
        } else {
          const { data } = await blockApi.store(formData);
          this.$router.push({ name: 'EditBlock', params: { id: data.id }});
        }
      } else {
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
      const confirm = await this.$confirm('Bạn có chắc là muốn xóa block này chứ?', 'Warning', {
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy',
        type: 'warning',
      });

      if (confirm) {
        await blockApi.destroy(id);
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
    setSort() {
      const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0];
      this.sortable = Sortable.create(el, {
        ghostClass: 'sortable-ghost', // Class name for the drop placeholder,
        setData: function(dataTransfer) {
          // to avoid Firefox bug
          // Detail see : https://github.com/RubaXa/Sortable/issues/1012
          dataTransfer.setData('Text', '');
        },
        onEnd: evt => {
          const targetRow = this.entity.block_contents.splice(evt.oldIndex, 1)[0];
          this.entity.block_contents.splice(evt.newIndex, 0, targetRow);

          // for show the changes, you can delete in you code
          const tempIndex = this.newList.splice(evt.oldIndex, 1)[0];
          this.newList.splice(evt.newIndex, 0, tempIndex);

          this.updateBlockOrder(true);
        },
      });
    },
    handleCreate() {
      this.$router.push({ name: 'AddBlockContent', params: { id: this.entity.id }});
    },
    updateBlockOrder(saveDb = false) {
      this.entity.block_contents.map(function(item, index) {
        item.sort = index + 1;
        return item.sort;
      });

      if (saveDb) {
        this.updateBlockOrderToDb();
      }
    },
    async updateBlockOrderToDb() {
      try {
        await blockContentApi.updateOrder(this.entity.block_contents);
        this.$message({
          type: 'success',
          message: 'Sắp xếp thành công!',
        });
      } catch (err) {
        console.log(err);
      }
    },
    gotoEditBlockContent(id) {
      this.$router.push({ name: 'EditBlockContent', params: { id: this.$route.params.id, bid: id }});
    },
    async deleteBlockContent(id) {
      const confirm = await this.$confirm('Bạn có chắc là muốn xóa block con này chứ?', 'Warning', {
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy',
        type: 'warning',
      });

      if (confirm) {
        this.loading = true;
        await blockContentApi.destroy(id);
        this.$message({
          type: 'success',
          message: 'Xóa thành công',
        });
        this.getBlock();
      }
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
