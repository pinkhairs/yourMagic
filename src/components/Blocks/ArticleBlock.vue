<template>
  <block-component
    :subtitle="subtitle"
    :title="title"
    :content="content"
    :img="img"
  ></block-component>
</template>

<script>
import { defineComponent } from 'vue';
import BlockComponent from '@/components/Blocks/BlockComponent.vue';

export default defineComponent({
  components: { BlockComponent },
  props: ['subtitle', 'title', 'content', 'img']
});
</script>