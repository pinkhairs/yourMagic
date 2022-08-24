<template>
  <block-component
    subtitle="New Moon in Virgo"
    title="Leo sun tarostrology"
    img="placeholder.png"
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