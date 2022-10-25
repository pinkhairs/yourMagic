<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.go(-1)" icon="back.png" />
      </item-block>
      <item-block title="New reading" description="First, type your question." />
      <item-block lines="full" :form="true" :background="true">
        <text-field  />
      </item-block>
      <item-block description="Now, choose a spread." />
      <div class="spacer-1"></div>
      <item-block title="Spreads" />
      <div class="spacer-2"></div>
      <item-block>
        <speech-bubble-text>For love & relationships.</speech-bubble-text>
      </item-block>
      <item-block link="/shuffle" :background="true">
        <spread-block />
      </item-block>
      <item-block link="/shuffle" :background="true">
        <spread-block />
      </item-block>
      <item-block>
        <speech-bubble-text>For career, work &amp; ambition.</speech-bubble-text>
      </item-block>
      <item-block link="/shuffle" :background="true">
        <spread-block />
      </item-block>
      <item-block link="/shuffle" :background="true">
        <spread-block />
      </item-block>
      <item-block link="/shuffle" :background="true">
        <spread-block />
      </item-block>
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextField from '@/components/Fields/TextField.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import { useRouter } from 'vue-router';
import SpeechBubbleText from '@/components/Text/SpeechBubbleText.vue';
import SpreadBlock from '@/components/Blocks/SpreadBlock.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';

export default  defineComponent({
  name: 'NewReadingPage',
  data() {
    return {
      time: 'afternoon'
    }
  },
  components: {
    TextField,
    ItemBlock,
    YourMagicPage,
    CircleButton,
    SpeechBubbleText,
    SpreadBlock,
    YourMagicContent
},
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

<style scoped>
.spacer-1 {
  margin-top: -40px;
}
.spacer-2 {
  margin-top: -30px;
}
</style>