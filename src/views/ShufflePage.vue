<template>
  <your-magic-page :time="time">
    <ion-content>
      <item-block>
        <circle-button @click="() => router.back()" icon="back.png" />
      </item-block>
      <item-block>
        <text-heading :level="1" title="Tap to shuffle"></text-heading>
      </item-block>
      <item-block>
        <image-media :center="true" src="cards.png" />
      </item-block>
    </ion-content>
    <ion-footer>
      <text-button expand="full" @click="() => router.push('/reading')" text="Ready &rarr;" />
    </ion-footer>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonContent, IonFooter } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import TextButton from '@/components/Buttons/TextButton.vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import { useRouter } from 'vue-router';
import ItemBlock from '../components/Blocks/ItemBlock.vue';
import ImageMedia from '../components/Media/ImageMedia.vue';

export default  defineComponent({
  name: 'ShufflePage',
  data() {
    return {
      time: 'evening',
    };
  },
  components: {
    IonContent,
    IonFooter,
    TextHeading,
    TextButton,
    YourMagicPage,
    CircleButton,
    ItemBlock,
    ImageMedia
},
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
