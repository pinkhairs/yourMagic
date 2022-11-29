<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <text-button slot="end" @click="() => router.push('/login')" text="Log In" />
      </item-block>
      <item-block :center="true">
        <text-heading :level="3">Welcome to</text-heading>
      </item-block>
      <item-block :center="true">
        <image-media src="YourMagicLogo.png" />
      </item-block>
      <item-block :center="true">
        <ion-slides :pager="true">
          <ion-slide>
            <div>
              <image-media src="slideplaceholder.png" />
              <text-heading :level="2">Your Magic</text-heading>
              <paragraph-text>is a simple, secure, and private way to store your magic.</paragraph-text>
            </div>
          </ion-slide>
          <ion-slide>
            <div>
              <image-media src="slideplaceholder.png" />
              <text-heading :level="2">Your Magic</text-heading>
              <paragraph-text>is a simple, secure, and private way to store your magic.</paragraph-text>
            </div>
          </ion-slide>
          <ion-slide>
            <div>
              <image-media src="slideplaceholder.png" />
              <text-heading :level="2">Your Magic</text-heading>
              <paragraph-text>is a simple, secure, and private way to store your magic.</paragraph-text>
            </div>
          </ion-slide>
        </ion-slides>
      </item-block>
    </your-magic-content>
    <ion-footer class="ion-no-border ion-transparent">
      <text-button width="full" @click="() => router.push('/signup')" text="Sign Up" />
    </ion-footer>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonFooter, IonSlides, IonSlide } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import { useRouter } from 'vue-router';
import ItemBlock from '../components/Blocks/ItemBlock.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import TextButton from '@/components/Buttons/TextButton.vue'
import ParagraphText from '@/components/Text/ParagraphText.vue'
import ImageMedia from '@/components/Media/ImageMedia.vue';

export default  defineComponent({
  name: 'OnboardingPage',
  components: {
    IonFooter,
    TextHeading,
    YourMagicPage,
    ItemBlock,
    YourMagicContent,
    TextButton,
    ImageMedia,
    IonSlides,
    IonSlide,
    ParagraphText
  },
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>

<style>
.swiper-pagination {
  bottom: 0 !important;
}
.swiper-wrapper {
  padding-bottom: 40px;
}
.swiper-pagination-bullet {
  background: #000000;
}
.swiper-pagination-bullet-active {
  box-shadow: 0 0 0 2px #000000;
  background-color: #ff93e2;
}
</style>
