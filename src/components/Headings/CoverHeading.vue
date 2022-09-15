<template>
  <div>
    <h1 v-if="time === 'morning'">Good <span class="offset"><image-media src="morning-star.png" /></span> morning, {{name}}</h1>
    <h1 v-if="time === 'afternoon'">Good <span class="offset"><image-media src="afternoon-star.png" /></span> afternoon, {{name}}</h1>
    <h1 v-if="time === 'evening'">Good <span class="offset"><image-media src="evening-moon.png" /></span> evening, {{name}}</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ImageMedia from '@/components/Media/ImageMedia.vue';

export default defineComponent({
  components: { ImageMedia },
  props: ['time', 'name']
});
</script>

<style scoped>
h1 {
  vertical-align: middle;
  margin-top: -15px;
  padding-top: 0;
  font-size: 3.75rem;
}
.offset {
  position: relative;
  top: 15px;
}
</style>