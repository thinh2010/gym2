<template>
  <div>
    <el-input
      :id="option.name"
      v-model="entity.options[option.name]"
      :name="option.form_name"
      :placeholder="option.placeholder"
      :type="option.type"
    />
  </div>
</template>

<script>
export default {
  name: 'CustomFormInput',
  props: {
    option: {
      type: Object,
      required: true,
    },
    entity: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
