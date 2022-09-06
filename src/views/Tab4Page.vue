<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-list>
        <item-block>
          <text-heading title="More" />
        </item-block>
        <item-block router-link="/journal" title="Journal" />
        <item-block router-link="/search" title="Search" />
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';

export default  defineComponent({
  name: 'Tab4Page',
  components: {
    IonContent,
    IonPage,
    TextHeading,
    ItemBlock
  }
});
</script>
