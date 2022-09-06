<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <text-button @click="() => router.back()" text="Back"></text-button>
      <gallery-media></gallery-media>
      <text-button @click="() => router.push('/deck')" text="Done"></text-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent } from '@ionic/vue';
import GalleryMedia from '@/components/Media/GalleryMedia.vue';
import TextButton from '@/components/Buttons/TextButton.vue';
import { useRouter } from 'vue-router';

export default  defineComponent({
  name: 'NewDeckPage',
  components: {
    IonContent,
    IonPage,
    GalleryMedia,
    TextButton
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>
