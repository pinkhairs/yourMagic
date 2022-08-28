<template>
  <block-component
    title="Double Time"
    description="Constrasting factors"
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