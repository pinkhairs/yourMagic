<template>
  <your-magic-page :time="time">
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.go(-1)" icon="back.png" />
      </item-block>
      <item-block>
        <text-heading :level="1" title="Tap to shuffle"></text-heading>
      </item-block>
    </your-magic-content>
    <ion-footer class="ion-no-border ion-transparent">
      <item-block lines="full" :form="true" :background="true">
        <text-field></text-field>
      </item-block>
      <text-button expand="full" @click="() => router.push('/reading')" text="Done" />
    </ion-footer>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonFooter } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import { useRouter } from 'vue-router';
import ItemBlock from '../components/Blocks/ItemBlock.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import TextField from '@/components/Fields/TextField.vue';
import TextButton from '@/components/Buttons/TextButton.vue'

export default  defineComponent({
  name: 'ReadingPage',
  data() {
    return {
      time: 'evening',
    };
  },
  components: {
    IonFooter,
    TextHeading,
    YourMagicPage,
    CircleButton,
    ItemBlock,
    YourMagicContent,
    TextField,
    TextButton
},
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
