<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <text-button @click="() => router.back()" text="Back"></text-button>
      <ion-header>
        <text-heading :level="1" title="Journal" />
        <text-button text="Calendar"></text-button>
        <text-button text="#"></text-button>
      </ion-header>
      <text-heading :level="3" title="September" />
      <calendar-month month="September"></calendar-month>
      <text-heading :level="3" title="August" />
      <calendar-month month="August"></calendar-month>
      <text-heading :level="3" title="July" />
      <calendar-month month="July"></calendar-month>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonHeader } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import CalendarMonth from '@/components/Calendar/CalendarMonth.vue';
import TextButton from '@/components/Buttons/TextButton.vue';
import { useRouter } from 'vue-router';

export default  defineComponent({
  name: 'JournalPage',
  components: {
    IonContent,
    IonPage,
    IonHeader,
    TextHeading,
    CalendarMonth,
    TextButton
  },
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>