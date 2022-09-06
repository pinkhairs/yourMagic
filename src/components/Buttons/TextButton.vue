<template>
  <ion-button :expand="width">{{text}}</ion-button>
</template>

<script>
import { IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonButton },
  props: [ 'width', 'text' ]
});
</script>