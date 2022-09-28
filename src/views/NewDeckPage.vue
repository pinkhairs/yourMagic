<template>
  <your-magic-page>
    <your-magic-content>
      <text-button @click="() => router.back()" text="Back"></text-button>
      <gallery-media></gallery-media>
      <text-button @click="() => router.push('/deck')" text="Done"></text-button>
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GalleryMedia from '@/components/Media/GalleryMedia.vue';
import TextButton from '@/components/Buttons/TextButton.vue';
import { useRouter } from 'vue-router';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import YourMagicPage from '../components/Page/YourMagicPage.vue';

export default  defineComponent({
  name: 'NewDeckPage',
  components: {
    GalleryMedia,
    TextButton,
    YourMagicContent,
    YourMagicPage
},
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>
