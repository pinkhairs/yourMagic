<template>
  <h2 v-if="level === 2 || !level">{{title}}</h2>
  <h1 v-if="level === 1 ">{{title}}</h1>
  <h3 v-if="level === 3">{{title}}</h3>
  <h4 v-if="level === 4">{{title}}</h4>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['title', 'level']
});
</script>
