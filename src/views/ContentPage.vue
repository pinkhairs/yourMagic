<template>
  <your-magic-page>
    <your-magic-content>
      <text-button @click="() => router.go(-1)" text="Back"></text-button>
      <text-heading title="#1. Text" />
      <paragraph-text content="Example." />
      <text-heading title="#2. List Table" />
      <table-list />
      <quote-text author="Rumi" quote="What you seek is seeking you." />
      <text-heading title="#3. Buttons" />
      <text-button text="Button 1" />
      <text-button text="Button 2" />
      <text-heading title="#4. Image" />
      <ion-img src="https://via.placeholder.com/250x400" alt="The Card Name" />
      <text-heading title="#5. Gallery" />
      <gallery-media />
      <text-heading title="#6. Cover" />
      <cover-heading />
      <text-heading title="#7. Video" />
      <ion-img src="https://via.placeholder.com/1920x1080" alt="The Card Name" />
      <text-heading title="#8. Audio" />
      <audio-media></audio-media>
      <text-button text="Show Transcript" />
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonImg } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import ParagraphText from '@/components/Text/ParagraphText.vue';
import TableList from '@/components/Lists/TableList.vue';
import QuoteText from '@/components/Text/QuoteText.vue';
import TextButton from '@/components/Buttons/TextButton.vue';
import CoverHeading from '@/components/Headings/CoverHeading.vue';
import AudioMedia from '@/components/Media/AudioMedia.vue';
import GalleryMedia from '@/components/Media/GalleryMedia.vue';
import { useRouter } from 'vue-router';
import YourMagicPage from '../components/Page/YourMagicPage.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';

export default  defineComponent({
  name: 'ContentPage',
  components: {
    IonImg,
    TextHeading,
    ParagraphText,
    TableList,
    QuoteText,
    TextButton,
    CoverHeading,
    AudioMedia,
    GalleryMedia,
    YourMagicContent,
    YourMagicPage
},
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
