<template>
  <img src="mainSrc" :alt="alt" :srcset="retina2x+' 2x,'+retina3x +' 3x'" />
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['src', 'alt', 'width', 'height'],
  computed: {
    mainSrc() {
      return require('@/assets/images/'+this.src);
    },
    retina2x() {
      return require('@/assets/images/'+this.src.replace('.png', '@2x.png').replace('.jpg', '@2x.jpg').replace('.jpeg', '@2x.jpeg'));
    },
    retina3x() {
      return require('@/assets/images/'+this.src.replace('.png', '@3x.png').replace('.jpg', '@3x.jpg').replace('.jpeg', '@3x.jpeg'));
    }
  }
});
</script>

<style scoped>
</style>
