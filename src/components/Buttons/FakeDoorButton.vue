<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Get a Reading</ion-card-title>
      <div>
        Type a question...
        <ion-button>&rarr;</ion-button>
      </div>
    </ion-card-header>
  </ion-card>
</template>

<script>
import { IonCard, IonCardHeader, IonCardTitle, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCard, IonCardHeader, IonCardTitle, IonButton }
});
</script>