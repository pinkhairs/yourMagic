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
      <item-block>
        <circle-button @click="() => router.push('/journal-entry')" slot="end" icon="write.png" />
      </item-block>
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
    YourMagicContent
},
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
