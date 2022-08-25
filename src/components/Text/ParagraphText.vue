<template>
  <div>
    {{content}}
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['content'],
});
</script>
