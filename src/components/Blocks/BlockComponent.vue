<template>
  <ion-grid>
    <ion-row>
      <ion-col size="4" v-if="cards">
        <div>
          {{cards}}
        </div>
      </ion-col>
      <ion-col :size="img || cards ? 8 : 12">
        <ion-item-header>
          <text-heading :level="3" v-if="subtitle">{{subtitle}}</text-heading>
          <text-heading :level="2" v-if="title">{{title}}</text-heading>
          <div v-if="description">{{description}}</div>
        </ion-item-header>
        <ion-item-content v-if="content">
          {{content}}
        </ion-item-content>
      </ion-col>
      <ion-col size="4" v-if="img">
        <div>
          <image-media :src="img" alt=""></image-media>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script>
import {  IonItemContent, IonItemHeader } from '@ionic/vue';
import { defineComponent } from 'vue';
import ImageMedia from '../Media/ImageMedia.vue';
import TextHeading from '../Headings/TextHeading.vue';

export default defineComponent({
  components: { IonItemContent, IonItemHeader, ImageMedia, TextHeading },
  props: ['subtitle', 'title', 'content', 'img', 'cards', 'description']
});
</script>

<style scoped>
ion-grid {
  --ion-grid-width: 100%;
}
</style>
