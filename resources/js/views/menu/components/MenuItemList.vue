<template>
  <div>
    <nested-item :items="items" />
  </div>
</template>

<script>
import NestedItem from './NestedItem';

export default {
  name: 'MenuItemList',
  components: { NestedItem },
  props: {
    items: {
      type: Array,
      default: null,
    },
  },
};
</script>
