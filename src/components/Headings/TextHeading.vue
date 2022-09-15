<template>
  <h2 v-if="level === 2 || !level"><slot /></h2>
  <h1 v-if="level === 1 "><slot /></h1>
  <h3 v-if="level === 3"><slot /></h3>
  <h4 v-if="level === 4"><slot /></h4>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['title', 'level']
});
</script>

<style scoped>
h1, h2, h3, h4 {
  line-height: 1.4;
  margin-top: 0;
  padding-top: 0;
}
h2 {
  font-size: 26px;
}
h3 {
  font-size: 19px;
}
h2 + h3, h3 + h2, h3 + h4, h4 + h3 {
  margin-top: -10px;
}
</style>
