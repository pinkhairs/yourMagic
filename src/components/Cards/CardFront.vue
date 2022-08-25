<template>
  <ion-card>
    <ion-card-content>
      <img :src="require('@/assets/images/fool.jpg')" :alt="title" />
    </ion-card-content>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCard, IonCardContent },
  props: ['title']
});
</script>