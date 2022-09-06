<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <text-button @click="() => router.back()" text="Back"></text-button>
      <text-heading :level="3" title="How long should I wait?"></text-heading>
      <gallery-media></gallery-media>
      <text-field placeholder="This is a journal entry"></text-field>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue'
import TextField from '@/components/Fields/TextField.vue';
import GalleryMedia from '@/components/Media/GalleryMedia.vue';
import { useRouter } from 'vue-router';

export default  defineComponent({
  name: 'JournalEntryPage',
  components: {
    IonContent,
    IonPage,
    TextHeading,
    TextField,
    GalleryMedia
  },
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
