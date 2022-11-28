<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.go(-1)" icon="back.png" />
      </item-block>
      <item-block>
        <div>
            <text-heading :level="1">Reset Password</text-heading>
            <paragraph-text>Just enter your email...</paragraph-text>
        </div>
      </item-block>
      <item-block>
        <ion-label position="stacked">Email</ion-label>
        <text-field></text-field>
      </item-block>
    </your-magic-content>
    <ion-footer class="ion-no-border ion-transparent">
      <text-button width="full" @click="resetPw()" text="Reset Password" />
    </ion-footer>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonFooter, IonLabel } from '@ionic/vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import { useRouter } from 'vue-router';
import ItemBlock from '../components/Blocks/ItemBlock.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import TextButton from '@/components/Buttons/TextButton.vue'
import TextField from '@/components/Fields/TextField.vue'
import TextHeading from '@/components/Headings/TextHeading.vue'
import ParagraphText from '@/components/Text/ParagraphText.vue'
import CircleButton from '@/components/Buttons/CircleButton.vue'

export default  defineComponent({
  components: {
    IonFooter,
    YourMagicPage,
    ItemBlock,
    YourMagicContent,
    TextButton,
    TextField,
    IonLabel,
    TextHeading,
    ParagraphText,
    CircleButton
},
setup() {
    const router = useRouter();
    return { router };
},
methods: {
    resetPw() {
        this.router.push('/');
    }
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
