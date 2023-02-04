<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.replace('/')" icon="back.png" />
      </item-block>
      <reading-block />
    </your-magic-content>
    <ion-footer class="ion-no-border ion-transparent">
      <item-block>
        <circle-button @click="() => router.push({name: 'journal-entry', params: {question: $route.params.question, spread: $route.params.spread}})" slot="end" icon="write.png" />
      </item-block>
    </ion-footer>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonFooter } from '@ionic/vue';
import { useRouter, useRoute } from 'vue-router';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import ItemBlock from '../components/Blocks/ItemBlock.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import ReadingBlock from '@/components/Blocks/ReadingBlock.vue';

export default  defineComponent({
  name: 'ReadingPage',
  components: {
    IonFooter,
    YourMagicPage,
    CircleButton,
    ItemBlock,
    ReadingBlock,
    YourMagicContent
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    return { router, route };
  }
});
</script>