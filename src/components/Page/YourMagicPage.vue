<template>
  <ion-page>
    <slot></slot>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';

export default defineComponent({
  components: { IonPage }
});
</script>

<style>
ion-page {
  --background: url('@/assets/images/evening.png') no-repeat center center fixed;
  background-size: cover;
}
</style>