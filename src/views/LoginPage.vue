<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.go(-1)" icon="back.png" />
      </item-block>
      <item-block>
        <div>
            <text-heading :level="1">Log In</text-heading>
            <paragraph-text>Welcome back!</paragraph-text>
        </div>
      </item-block>
      <item-block :form="true" :background="true" label="Username">
        <text-field v-model="email"></text-field>
      </item-block>
      <item-block :form="true" :background="true" label="Password">
        <text-field v-model="password"></text-field>
      </item-block>
      <item-block v-if="errors">
        <paragraph-text>{{errors}}</paragraph-text>
      </item-block>
      <item-block>
        <paragraph-text @click="() => router.push('/forgot-password')">Forgot your password?</paragraph-text>
      </item-block>
    </your-magic-content>
    <ion-footer class="ion-no-border ion-transparent">
      <text-button width="full" @click="login()" text="Log In" />
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
import Db from '@/services/db'

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
    email: '',
    password: '',
    errors: ''
  }
},
setup() {
    const router = useRouter();
    return { router };
},
methods: {
    login() {
      Db.getToken({
        username: this.email,
        password: this.password
      }).then((login) => {
        if (login) {
          this.$router.replace('/')
        } else {
          this.errors = 'Invalid username or password'
        }
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