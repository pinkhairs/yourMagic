<template>
  <block-component
    :title="title"
    :description="description"
    :cards="cards"
  ></block-component>
</template>

<script>
import { defineComponent } from 'vue';
import BlockComponent from '@/components/Blocks/BlockComponent.vue';

export default defineComponent({
  components: { BlockComponent },
  props: ['subtitle', 'title', 'content', 'img', 'cards'],
});
</script>