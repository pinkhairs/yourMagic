<template>
  <filter-button />
  <filter-button />
  <filter-button />
  <filter-button />
  <filter-button />
</template>

<script>
import { defineComponent } from 'vue';
import FilterButton from './FilterButton.vue';

export default defineComponent({
  components: { FilterButton }
});
</script>