<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <text-button @click="() => router.back()" text="Back"></text-button>
      <text-heading title="New reading" :level="1"></text-heading>
      <text-field />
      <text-heading :level="3" title="Then choose a spread"></text-heading>
      <text-heading :level="2" title="Spreads"></text-heading>
      <ion-list>
        <item-block @click="() => router.push('/shuffle')">
          <spread-block></spread-block>
        </item-block>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonList } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import TextField from '@/components/Fields/TextField.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import SpreadBlock from '@/components/Blocks/SpreadBlock.vue';
import TextButton from '@/components/Buttons/TextButton.vue';
import { useRouter } from 'vue-router';

export default  defineComponent({
  name: 'NewReadingPage',
  components: {
    IonContent,
    IonPage,
    IonList,
    TextHeading,
    TextField,
    ItemBlock,
    SpreadBlock,
    TextButton
  },
  setup() {
    const router = useRouter();
    return { router };
  },
});
</script>

    