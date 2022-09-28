<template>
  <your-magic-page>
    <your-magic-content>
      <text-button @click="() => router.back()" text="Back"></text-button>
      <text-heading :level="3" title="How long should I wait?"></text-heading>
      <gallery-media></gallery-media>
      <text-field placeholder="This is a journal entry"></text-field>
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextHeading from '@/components/Headings/TextHeading.vue'
import TextField from '@/components/Fields/TextField.vue';
import GalleryMedia from '@/components/Media/GalleryMedia.vue';
import { useRouter } from 'vue-router';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import YourMagicPage from '../components/Page/YourMagicPage.vue';

export default  defineComponent({
  name: 'JournalEntryPage',
  components: {
    TextHeading,
    TextField,
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
