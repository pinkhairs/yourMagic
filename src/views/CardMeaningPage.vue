<template>
  <ion-page>
    <ion-content :fullscreen="true">
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
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonImg } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import SpeechBubbleText from '@/components/Text/SpeechBubbleText.vue';
import { useRouter } from 'vue-router';

export default  defineComponent({
  name: 'CardMeaningPage',
  components: {
    IonContent,
    IonPage,
    IonImg,
    TextHeading,
    SpeechBubbleText
  },
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
