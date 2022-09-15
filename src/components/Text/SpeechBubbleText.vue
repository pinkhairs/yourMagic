<template>
  <div class="speech-bubble-text">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<style scoped>
.speech-bubble-text {
  padding: 15px 20px;
  background: #fff;
  border-radius: 20px 20px 0 20px;
  font-size: 16px;
  line-height: 1.5;
}
</style>
