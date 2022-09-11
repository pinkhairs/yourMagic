<template>
  <ion-page>
    <ion-content>
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
  components: { IonPage, IonContent }
});
</script>

<style>
ion-content {
  --background: linear-gradient(360deg, #F6A904 0%, #FF92E1 100%);
}
</style>
