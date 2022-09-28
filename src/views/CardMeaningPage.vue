<template>
  <your-magic-page>
    <your-magic-content>
      <text-button @click="() => router.back()" text="Back"></text-button>
      <text-heading :level="2" title="Position" />
      <text-heading :level="3" title="The Card Name" />
      <ion-img src="https://via.placeholder.com/250x400" alt="The Card Name" />
      <speech-bubble-text content="Lorem ipsum dolor sit amet" />
      <speech-bubble-text content="Lorem ipsum dolor sit amet" />
      <speech-bubble-text content="Lorem ipsum dolor sit amet" />
      <speech-bubble-text content="Lorem ipsum dolor sit amet" />
      <speech-bubble-text content="Lorem ipsum dolor sit amet" />
      <speech-bubble-text content="Lorem ipsum dolor sit amet" />
      <speech-bubble-text content="Lorem ipsum dolor sit amet" />
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonImg } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import SpeechBubbleText from '@/components/Text/SpeechBubbleText.vue';
import { useRouter } from 'vue-router';
import YourMagicPage from '../components/Page/YourMagicPage.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';

export default  defineComponent({
  name: 'CardMeaningPage',
  components: {
    IonImg,
    TextHeading,
    SpeechBubbleText,
    YourMagicPage,
    YourMagicContent
},
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
