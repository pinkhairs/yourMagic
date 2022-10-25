<template>
  <ion-textarea :autofocus="autofocus" placeholder="• • •"></ion-textarea>
</template>

<script>
import { IonTextarea } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonTextarea },
  props: [ 'autofocus' ]
});
</script>

<style scoped>
ion-textarea {
  --color: #000;
}
</style>