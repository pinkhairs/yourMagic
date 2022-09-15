<template>
  <div class="fake-door">
    <div class="prompt">Enter a question...</div>
    <div class="button"><image-media src="fake-door-button.png" /></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ImageMedia from '../Media/ImageMedia.vue';

export default defineComponent({
    components: { ImageMedia }
});
</script>

<style scoped>
.fake-door {
  padding: 1px 5px 0 15px;
  background: rgba(255,255,255,.7);
  border: 2px #000 solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 99%;
}
.prompt {
  width: 80%;
}
.button {
  width: 20%;
}
</style>