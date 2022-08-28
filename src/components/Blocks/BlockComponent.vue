<template>
  <ion-grid>
    <ion-row>
      <ion-col size="4" v-if="cards">
        <div>
          x{{cards}}x
        </div>
      </ion-col>
      <ion-col :size="img || cards ? 8 : 12">
        <ion-item-header>
          <ion-item-subtitle>{{subtitle}}</ion-item-subtitle>
          <ion-item-title>{{title}}</ion-item-title>
          {{description}}
        </ion-item-header>
        <ion-item-content v-if="content">
          {{content}}
        </ion-item-content>
      </ion-col>
      <ion-col size="4" v-if="img">
        <div>
          <ion-img :src="imgSrc"></ion-img>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import {  IonItemContent, IonItemHeader, IonItemSubtitle, IonItemTitle, IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonItemContent, IonItemHeader, IonItemSubtitle, IonItemTitle, IonImg },
  props: ['subtitle', 'title', 'content', 'img', 'cards', 'description'],
  computed: {
    imgSrc() {
      return require(`@/assets/images/${this.img}`);
    }
  },
});
</script>