<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <text-button @click="() => router.back()" text="Back"></text-button>
      <ion-grid>
        <ion-row>
          <ion-col size="6"><ion-img src="https://via.placeholder.com/400x400" /></ion-col>
          <ion-col size="6">
            <text-heading :level="1" title="Deck name" />
            <paragraph-text content="Amí Naeily"></paragraph-text>
          </ion-col>
        </ion-row>
      </ion-grid>
      <text-button text="Subscribe for $0.99" />
      <text-heading :level="2" title="About" />
      <paragraph-text content="A sugary deck" />
      <table-list></table-list>
    </ion-content>
  </ion-page>
</template>

<script>
import TextButton from '@/components/Buttons/TextButton.vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import TableList from '@/components/Lists/TableList.vue';
import ParagraphText from '@/components/Text/ParagraphText.vue';
import { IonImg, IonCol, IonRow, IonGrid, IonPage, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { IonImg, IonCol, IonRow, IonGrid, TextHeading, ParagraphText, TableList, TextButton, IonPage, IonContent },
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
