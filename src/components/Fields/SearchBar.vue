<template>
  <div class="search-bar">
    <ion-input placeholder="Search..."></ion-input>
  </div>
</template>

<script>
import { IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonInput }
});
</script>

<style scoped>
.search-bar {
  background: rgba(255,255,255,.7);
  border: 2px solid #000;
  padding: 10px 20px;
}
</style>