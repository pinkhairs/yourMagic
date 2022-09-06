<template>
  <ion-grid>
    <ion-row>
      <ion-col size="6"><ion-img src="https://via.placeholder.com/400x400" /></ion-col>
      <ion-col size="6">▶️</ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonImg, IonCol, IonRow, IonGrid } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonImg, IonCol, IonRow, IonGrid },
});
</script>
