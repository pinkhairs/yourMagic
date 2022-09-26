<template>
  <ion-content :class="time">
    <slot></slot>
  </ion-content>
</template>

<script>
import { defineComponent } from 'vue';
import { IonContent } from '@ionic/vue';

export default defineComponent({
  components: { IonContent },
  props: [ 'time' ]
});
</script>

<style>
ion-content.morning {
  --color: #000;
  --background: linear-gradient(360deg, #F6A904 0%, #FF92E1 100%);
}
ion-content.afternoon {
  --color: #fff;
  --ion-item-color: #fff;
  --ion-text-color: #fff;
  --background: linear-gradient(180deg, #5600E8 0%, #FF92E1 100%);
}
ion-content.evening {
  --color: #fff;
  --ion-item-color: #fff;
  --ion-text-color: #fff;
  --background: url('@/assets/images/evening.png') no-repeat center center fixed;
  background-size: cover;
}
</style>
