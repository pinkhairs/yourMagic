<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <text-button @click="() => router.back()" text="Back"></text-button>
      <ion-list>
        <item-block>
          <text-heading title="Settings" />
        </item-block>
        <speech-bubble-text content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <item-block title="Account" />
        <item-block title="Subscription" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import SpeechBubbleText from '@/components/Text/SpeechBubbleText.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import { useRouter } from 'vue-router';

export default  defineComponent({
  name: 'Tab2Page',
  components: {
    IonContent,
    IonPage,
    TextHeading,
    SpeechBubbleText,
    ItemBlock
  },
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
