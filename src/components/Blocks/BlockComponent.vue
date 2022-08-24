<template>
  <ion-card>
    <ion-grid>
      <ion-row>
        <ion-col :size="img ? 7 : 12">
          <ion-card-header>
            <ion-card-subtitle>{{subtitle}}</ion-card-subtitle>
            <ion-card-title>{{title}}</ion-card-title>
          </ion-card-header>
          <ion-card-content v-if="content">
            {{content}}
          </ion-card-content>
        </ion-col>
        <ion-col size="5" v-if="img">
          <div>
            <ion-img :src="imgSrc"></ion-img>
          </div>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg },
  props: ['subtitle', 'title', 'content', 'img'],
  computed: {
    imgSrc() {
      return require(`@/assets/images/${this.img}`);
    }
  }
});
</script>