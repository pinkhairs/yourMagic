<template>
  <div>
    <div>{{quote}}</div>
    <small>{{author}}</small>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['quote', 'author'],
});
</script>
