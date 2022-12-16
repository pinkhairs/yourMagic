<template>
  <div class="block-component">
    <div v-if="cards" class="cards">
      <CardSpread :cards="cards" />
    </div>
    <div :class="{'text-with-cards': cards, 'text-with-thumbnail': img}">
      <div>
        <text-heading :level="3" v-if="subtitle">{{subtitle}}</text-heading>
        <text-heading :level="2" v-if="title">{{title}}</text-heading>
        <div v-if="description">{{description}}</div>
      </div>
      <div v-if="content">
        {{content}}
      </div>
    </div>
    <div v-if="img" class="image" :style="{textAlign: 'center'}">
      <image-media :src="img" alt=""></image-media>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ImageMedia from '../Media/ImageMedia.vue';
import TextHeading from '../Headings/TextHeading.vue';
import CardSpread from '@/components/Cards/CardSpread.vue';

export default defineComponent({
  components: { ImageMedia, TextHeading, CardSpread },
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
  width: 72px;
}
.text-with-cards {
  width: calc(100% - 72px);
}
.image {
  width: 30%;
}
.text-with-thumbnail {
  width: 70%;
}
</style>
