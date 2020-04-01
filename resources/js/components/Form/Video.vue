<template>
  <div>
    <el-input
      :id="option.name"
      v-model="entity.options[option.name]"
      :name="option.form_name"
      type="file"
      :placeholder="option.placeholder"
      drop-placeholder="Drop file here..."
      @change="onChange"
    />
    <video v-if="file_src" :src="file_src" controls />
  </div>
</template>

<script>
export default {
  name: 'CustomFormVideo',
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
    return {
      'file_src': '',
    };
  },
  created() {
    if (this.option.type in this.entity.options) {
      this.file_src = this.entity.options[this.option.type];
    }
  },
  methods: {
    onChange(event) {
      this.option.value = event.target.files[0];
      this.file_src = URL.createObjectURL(event.target.files[0]);
      this.$emit('fieldChange', this.option);
    },
  },
};
</script>
