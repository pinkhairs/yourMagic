<template>
  <div class="container">
    <div v-if="alert" class="alert"></div>
    <ion-button>
      <image-media :src="icon" />  
    </ion-button>
  </div>
</template>

<script>
import { IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import ImageMedia from '../Media/ImageMedia.vue';

export default defineComponent({
  components: { IonButton, ImageMedia },
  props: [ 'icon', 'alert' ]
});
</script>

<style scoped>
ion-button {
  width: 60px;
  height: 60px;
  --border-radius: 100%;
  --background: #FF92E1;
  --border-width: 2px;
  --border-style: solid;
  --padding-start: 0;
  --padding-end: 0;
}
.container {
  margin-top: 10px;
  position: relative;
}
.alert {
  width: 15px;
  height: 15px;
  background: #FF000D;
  border: 2px #000 solid;
  border-radius: 100%;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 3;
}
</style>