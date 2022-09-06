<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <text-button @click="() => router.back()" text="Back"></text-button>
      <text-heading :level="1" title="Tap to shuffle"></text-heading>
      <ion-img src="https://via.placeholder.com/250x400" />
      <text-button @click="() => router.push('/reading')" text="Ready &rarr;" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonImg } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import TextButton from '@/components/Buttons/TextButton.vue';
import { useRouter } from 'vue-router';

export default  defineComponent({
  name: 'ShufflePage',
  components: {
    IonContent,
    IonPage,
    IonImg,
    TextHeading,
    TextButton,
  },
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
