<template>
  <ion-page :class="time">
    <slot></slot>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';

export default defineComponent({
  components: { IonPage },
  props: [ 'time' ]
});
</script>
