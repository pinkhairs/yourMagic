<template>
  <ion-textarea placeholder="• • •"></ion-textarea>
</template>

<script>
import { IonTextarea } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonTextarea }
});
</script>

<style scoped>
div {
  border: 2px #000 solid;
  padding: 5px 10px;
  background: rgba(255,255,255,.7);
}
ion-textarea {
  --color: #000;
}
</style>