<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <text-button @click="() => router.back()" text="Back"></text-button>
      <text-heading :level="1" title="Search" />
      <text-field></text-field>
      <paragraph-text content="Examples: fool, modern tarot, pixie" />
      <text-heading :level="2" title="Cards" />
      <ion-list>
        <item-block title="The Fool"></item-block>
        <item-block title="Card Name"></item-block>
      </ion-list>
      <text-heading :level="2" title="Books" />
      <ion-list>
        <item-block title="Book name"></item-block>
        <item-block title="Name #2"></item-block>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import TextField from '../components/Fields/TextField.vue';
import ParagraphText from '@/components/Text/ParagraphText.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import { useRouter } from 'vue-router';

export default  defineComponent({
  name: 'SearchPage',
  components: {
    IonContent,
    IonPage,
    TextHeading,
    TextField,
    ParagraphText,
    ItemBlock
  },
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
,
    ParagraphText