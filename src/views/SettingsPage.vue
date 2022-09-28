<template>
  <your-magic-page>
    <your-magic-content>
      <text-button @click="() => router.back()" text="Back"></text-button>
      <ion-list>
        <item-block>
          <text-heading title="Settings" />
        </item-block>
        <speech-bubble-text content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <item-block title="Account" />
        <item-block title="Subscription" />
      </ion-list>
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import SpeechBubbleText from '@/components/Text/SpeechBubbleText.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import { useRouter } from 'vue-router';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import YourMagicPage from '../components/Page/YourMagicPage.vue';

export default  defineComponent({
  name: 'Tab2Page',
  components: {
    TextHeading,
    SpeechBubbleText,
    ItemBlock,
    YourMagicContent,
    YourMagicPage
},
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
