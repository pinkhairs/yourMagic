<template>
  <your-magic-page :time="time">
    <div class="top-buttons">
      <circle-button @click="() => router.back()" icon="back.png"></circle-button>
    </div>
    <ion-item>
      <text-heading :level="1" title="Tap to shuffle"></text-heading>
    </ion-item>
    <ion-item>
      <ion-img src="https://via.placeholder.com/250x400" />
    </ion-item>
    <text-button @click="() => router.push('/reading')" text="Ready &rarr;" />
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonImg } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import TextButton from '@/components/Buttons/TextButton.vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import { useRouter } from 'vue-router';

export default  defineComponent({
  name: 'ShufflePage',
  components: {
    IonImg,
    TextHeading,
    TextButton,
    YourMagicPage
  },
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
