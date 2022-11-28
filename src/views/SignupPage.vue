<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.go(-1)" icon="back.png" />
      </item-block>
      <item-block>
        <div>
            <text-heading :level="1">Sign Up</text-heading>
            <paragraph-text>Welcome!</paragraph-text>
        </div>
      </item-block>
      <item-block :form="true" :background="true" label="First name">
        <text-field v-model="firstName"></text-field>
      </item-block>
      <item-block :form="true" :background="true" label="Email">
        <text-field v-model="email"></text-field>
      </item-block>
      <item-block :form="true" :background="true" label="Password">
        <text-field v-model="password"></text-field>
      </item-block>
    </your-magic-content>
    <ion-footer class="ion-no-border ion-transparent">
      <text-button width="full" @click="signup()" text="Sign Up" />
    </ion-footer>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonFooter } from '@ionic/vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import { useRouter } from 'vue-router';
import ItemBlock from '../components/Blocks/ItemBlock.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import TextButton from '@/components/Buttons/TextButton.vue'
import TextField from '@/components/Fields/TextField.vue'
import TextHeading from '@/components/Headings/TextHeading.vue'
import ParagraphText from '@/components/Text/ParagraphText.vue'
import CircleButton from '@/components/Buttons/CircleButton.vue'
import WordPress from '@/services/wordpress'

export default  defineComponent({
  components: {
    IonFooter,
    YourMagicPage,
    ItemBlock,
    YourMagicContent,
    TextButton,
    TextField,
    TextHeading,
    ParagraphText,
    CircleButton
},
data() {
  return {
    firstName: '',
    email: '',
    password: ''
  }
},
setup() {
    const router = useRouter();
    return { router };
},
methods: {
    signup() {
      WordPress.register({
        firstName: this.firstName,
        username: this.email,
        email: this.email,
        password: this.password
      })
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
