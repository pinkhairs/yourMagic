<template>
  <ion-input :autofocus="autofocus" placeholder="• • •"></ion-input>
</template>

<script>
import { IonInput } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonInput },
  props: [ 'autofocus' ]
});
</script>

<style scoped>
ion-input {
  --color: #000;
}
</style>