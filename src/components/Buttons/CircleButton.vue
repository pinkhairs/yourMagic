<template>
  <ion-fab :vertical="vertical" :horizontal="horizontal">
    <ion-fab-button>
      <ion-icon :icon="star"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</template>

<script>
import { IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { star } from 'ionicons/icons';

export default defineComponent({
  components: { IonFab, IonFabButton, IonIcon },
  props: ['vertical', 'horizontal'],
  setup() {
    return {
      star
    }
  }
});
</script>