<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-list>
        <item-block>
          <text-heading title="Decks" />
        </item-block>
        <item-block>
          <text-heading title="Your decks" />
          <text-button slot="end" router-link="/new-deck" text="Add new" />
        </item-block>
        <ion-slides :options="sliderOptions">
          <ion-slide router-link="/deck">
            <ion-img src="https://via.placeholder.com/250x400" />
          </ion-slide>
          <ion-slide router-link="/deck">
            <ion-img src="https://via.placeholder.com/250x400" />
          </ion-slide>
          <ion-slide router-link="/deck">
            <ion-img src="https://via.placeholder.com/250x400" />
          </ion-slide>
          <ion-slide router-link="/deck">
            <ion-img src="https://via.placeholder.com/250x400" />
          </ion-slide>
          <ion-slide router-link="/deck">
            <ion-img src="https://via.placeholder.com/250x400" />
          </ion-slide>
          <ion-slide router-link="/deck">
            <ion-img src="https://via.placeholder.com/250x400" />
          </ion-slide>
          <ion-slide router-link="/deck">
            <ion-img src="https://via.placeholder.com/250x400" />
          </ion-slide>
        </ion-slides>
        <item-block>
          <text-heading title="Shop" />
        </item-block>
        <ion-slides :options="sliderOptions">
          <ion-slide router-link="/deck">
            <ion-img src="https://via.placeholder.com/250x400" />
          </ion-slide>
          <ion-slide router-link="/deck">
            <ion-img src="https://via.placeholder.com/250x400" />
          </ion-slide>
          <ion-slide router-link="/deck">
            <ion-img src="https://via.placeholder.com/250x400" />
          </ion-slide>
          <ion-slide router-link="/deck">
            <ion-img src="https://via.placeholder.com/250x400" />
          </ion-slide>
          <ion-slide router-link="/deck">
            <ion-img src="https://via.placeholder.com/250x400" />
          </ion-slide>
          <ion-slide router-link="/deck">
            <ion-img src="https://via.placeholder.com/250x400" />
          </ion-slide>
          <ion-slide router-link="/deck">
            <ion-img src="https://via.placeholder.com/250x400" />
          </ion-slide>
        </ion-slides>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonContent, IonSlides, IonSlide } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import TextButton from '@/components/Buttons/TextButton.vue';

export default  defineComponent({
  name: 'Tab3Page',
  data() {
    return {
      sliderOptions: {
        slidesPerView: 2.75,
        speed: 66
      }
    }
  },
  components: {
    IonContent,
    IonPage,
    TextHeading,
    ItemBlock,
    IonSlides,
    IonSlide,
    TextButton
  }
});
</script>
