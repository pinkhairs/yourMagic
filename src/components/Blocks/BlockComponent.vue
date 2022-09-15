<template>
  <div class="block-component">
    <div v-if="cards" class="cards">
      {{cards}}
    </div>
    <div :class="{'text-with-cards': cards, 'text-with-thumbnail': img}">
      <ion-item-header>
        <text-heading :level="3" v-if="subtitle">{{subtitle}}</text-heading>
        <text-heading :level="2" v-if="title">{{title}}</text-heading>
        <div v-if="description">{{description}}</div>
      </ion-item-header>
      <ion-item-content v-if="content">
        {{content}}
      </ion-item-content>
    </div>
    <div v-if="img" class="image">
      <image-media :src="img" alt=""></image-media>
    </div>
  </div>
</template>

<script>
import { IonItemContent, IonItemHeader } from '@ionic/vue';
import { defineComponent } from 'vue';
import ImageMedia from '../Media/ImageMedia.vue';
import TextHeading from '../Headings/TextHeading.vue';

export default defineComponent({
  components: { IonItemContent, IonItemHeader, ImageMedia, TextHeading },
  props: ['subtitle', 'title', 'content', 'img', 'cards', 'description']
});
</script>

<style scoped>
.block-component {
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
}
.cards {
  width: 20%;
}
.text-with-cards {
  width: 80%;
}
.image {
  width: 30%;
}
.text-with-thumbnail {
  width: 70%;
}
</style>
