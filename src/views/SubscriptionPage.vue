<template>
  <your-magic-page>
    <your-magic-content>
      <stack-list>
        <item-block>
          <circle-button @click="() => router.go(-1)" icon="back.png" />
        </item-block>
        <div style="display: flex; justify-content: center; align-items: center; flex-direction: column">
          <item-block subtitle="What's included in a" />
          <image-media src="YourMagicLogo.png" />
          <item-block subtitle="Subscription?" />
        </div>
        <item-block :center="true">
          <ion-slides :pager="true">
            <ion-slide>
              <div>
                <text-heading :level="2">Feature #1</text-heading>
                <paragraph-text>is a simple, secure, and private way to store your magic.</paragraph-text>
              </div>
            </ion-slide>
            <ion-slide>
              <div>
                <text-heading :level="2">Feature #2</text-heading>
                <paragraph-text>is a simple, secure, and private way to store your magic.</paragraph-text>
              </div>
            </ion-slide>
            <ion-slide>
              <div>
                <text-heading :level="2">Feature #3</text-heading>
                <paragraph-text>is a simple, secure, and private way to store your magic.</paragraph-text>
              </div>
            </ion-slide>
          </ion-slides>
        </item-block>
      </stack-list>
    </your-magic-content>
    <ion-footer>
      <item-block :background="true">
        <paragraph-text style="line-height: 1.25"><small>Here are all the terms and conditions. Subscription active immediately and billed monthly. No refunds. Here are all the terms and conditions. Subscription active immediately.</small></paragraph-text>
      </item-block>
      <text-button width="full" text="Subscribe for $30 monthly" />
    </ion-footer>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonSlides, IonSlide, IonFooter } from '@ionic/vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import YourMagicPage from '../components/Page/YourMagicPage.vue';
import StackList from '../components/Lists/StackList.vue';
import { useRouter } from 'vue-router';
import YourMagicContent from '@/components/Page/YourMagicContent.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import { Storage } from '@ionic/storage';
import ImageMedia from '@/components/Media/ImageMedia.vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import ParagraphText from '@/components/Text/ParagraphText.vue';
import TextButton from '@/components/Buttons/TextButton.vue';

export default  defineComponent({
  name: 'SettingsPage',
  data() {
    return {
      time: 'morning'
    }
  },
  components: {
    ItemBlock,
    YourMagicPage,
    StackList,
    YourMagicContent,
    CircleButton,
    ImageMedia,
    IonSlides,
    IonSlide,
    TextHeading,
    IonFooter,
    ParagraphText,
    TextButton
  },
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>

<style scoped>
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
