<template>
  <block-component
    subtitle="Card of the Day"
    title="The Hermit"
    content="For the collective consciousness, we pulled The Hermit."
    img="hermit.png"
  ></block-component>
</template>

<script>
import { defineComponent } from 'vue';
import BlockComponent from '@/components/Blocks/BlockComponent.vue';

export default defineComponent({
  components: { BlockComponent }
});
</script>