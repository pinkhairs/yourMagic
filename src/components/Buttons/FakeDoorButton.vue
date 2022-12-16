<template>
  <div class="fake-door" @click="() => router.push('/new-reading')">
    <div class="prompt">
      Ask a question...
    </div>
    <div class="button">
      <circle-button icon="fake-door-button.png" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import CircleButton from './CircleButton.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { CircleButton },
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>

<style scoped>
.fake-door {
  padding: 0 5px 0 15px;
  background: rgba(255,255,255,.7);
  border: 2px #000 solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 99%;
  color: #000;
}
.prompt {
  width: 80%;
}
.button {
  width: 20%;
  position: relative;
  top: -5px;
}
</style>