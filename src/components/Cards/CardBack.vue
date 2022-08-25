<template>
  <ion-card>
    <ion-card-content>
      <img :src="require('@/assets/images/placeholder.png')" alt="Back of card" />
    </ion-card-content>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCard, IonCardContent }
});
</script>