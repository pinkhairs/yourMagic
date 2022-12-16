<template>
  <div>
    <ion-button :expand="width">{{text}}</ion-button>
  </div>
</template>

<script>
import { IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonButton },
  props: [ 'width', 'text' ]
});
</script>

<style scoped>
div {
  background: #ff93e2;
  box-shadow: 0 0 0 2px #000000;
  text-align: center;
}
</style>
