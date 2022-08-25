<template>
  <ion-list>
    <ion-item>1</ion-item>
    <ion-item>2</ion-item>
    <ion-item>3</ion-item>
  </ion-list>
</template>

<script>
import { IonList, IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonList, IonItem },
});
</script>
