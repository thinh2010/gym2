<template>
  <div>
    <el-tag v-if="value" type="success">Có</el-tag>
    <el-tag v-else type="danger">Không</el-tag>
  </div>
</template>

<script>
export default {
  name: 'BooleanView',
  props: {
    value: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
