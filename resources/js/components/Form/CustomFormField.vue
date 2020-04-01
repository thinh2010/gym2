<template>
  <div>
    <custom-form-video v-if="option.type === 'video'" :entity="entity" :option="option" @fieldChange="onChange" />
    <custom-form-input v-if="option.type === 'text'" :entity="entity" :option="option" />
  </div>
</template>

<script>
import CustomFormVideo from './Video';
import CustomFormInput from './Input';

export default {
  name: 'CustomFormField',
  components: { CustomFormVideo, CustomFormInput },
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
  methods: {
    onChange(option) {
      this.$emit('fieldChange', option);
    },
  },
};
</script>
