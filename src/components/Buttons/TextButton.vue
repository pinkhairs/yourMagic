<template>
  <ion-button :expand="width">Text</ion-button>
</template>

<script>
import { IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonButton },
  props: [ 'width' ]
});
</script>