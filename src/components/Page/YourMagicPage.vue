<template>
  <ion-page :class="time">
    <ion-content>
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';

export default defineComponent({
  components: { IonPage, IonContent },
  props: [ 'time' ]
});
</script>

<style>
.morning ion-content {
  --color: #000;
  --background: linear-gradient(360deg, #F6A904 0%, #FF92E1 100%);
}
.afternoon ion-content {
  --color: #fff;
  --ion-item-color: #fff;
  --ion-text-color: #fff;
  --background: linear-gradient(180deg, #5600E8 0%, #FF92E1 100%);
}
.evening ion-content {
  --color: #000;
  --background: linear-gradient(360deg, #F6A904 0%, #FF92E1 100%);
}
</style>
