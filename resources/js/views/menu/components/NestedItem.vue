<template>
  <draggable class="dragArea" tag="ul" :list="items" :group="{ name: 'g1' }" @end="updateTree">
    <li v-for="el in items" :key="el.id">
      <el-row>
        <el-col :span="18">
          <p class="menu-name">{{ el.title }}</p>
          <span class="menu-link"><a :href="el.link" target="_blank">{{ el.link }}</a></span>
        </el-col>
        <el-col :span="6" class="text-right">
          <el-button type="primary" size="small" icon="el-icon-edit" @click="edit(el.id)">
            Sửa
          </el-button>
          <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteItem(el.id)">
            Xóa
          </el-button>
        </el-col>
      </el-row>
      <nested-item v-if="el.children" :items="el.children" />
    </li>
  </draggable>
</template>
<script>
import draggable from 'vuedraggable';

export default {
  name: 'NestedItem',
  components: {
    draggable,
  },
  props: {
    items: {
      required: true,
      type: Array,
    },
  },
  methods: {
    edit(id) {
      Bus.$emit('editMenuItem', id);
    },
    deleteItem(id) {
      Bus.$emit('deleteMenuItem', id);
    },
    updateTree() {
      Bus.$emit('updateTree');
    },
  },
};
</script>
<style scoped>
.dragArea li {
  min-height: 10px;
  list-style: none;
  margin: 10px 0;
  background-color: #f9fafc;
}
p.menu-name {
  margin: 0;
}
.menu-link {
  font-size: 12px;
}
.menu-link a {
  text-decoration: none;
}
</style>
