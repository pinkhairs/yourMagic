<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.go(-1)" icon="back.png" />
      </item-block>
      <item-block>
        <text-heading :level="1">Account</text-heading>
      </item-block>
      <item-block :form="true" :background="true" label="First name">
        <text-field v-model="displayName"></text-field>
      </item-block>
      <item-block :form="true" :background="true" label="Username">
        <text-field v-model="username"></text-field>
      </item-block>
      <item-block :form="true" :background="true" label="Email (can’t change)">
        <text-field disabled :value="email"></text-field>
      </item-block>
      <item-block :form="true" :background="true" label="Password (if changing)">
        <text-field v-model="password"></text-field>
      </item-block>
      <item-block v-if="errors">
        <paragraph-text>{{errors}}</paragraph-text>
      </item-block>
    </your-magic-content>
    <ion-footer class="ion-no-border ion-transparent">
      <text-button width="full" @click="updateAccount()" text="Save Information" />
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
import CircleButton from '@/components/Buttons/CircleButton.vue'
import WordPress from '@/services/wordpress'
import { Storage } from '@ionic/storage'

export default  defineComponent({
  components: {
    IonFooter,
    YourMagicPage,
    ItemBlock,
    YourMagicContent,
    TextButton,
    TextField,
    TextHeading,
    CircleButton
},
data() {
  return {
    displayName: '',
    username: '',
    email: '',
    password: '',
    token: '',
    errors: ''
  }
},
setup() {
    const router = useRouter();
    return { router };
},
mounted() {
    WordPress.getUser().then((user) => {
        this.displayName = user.displayName
        this.username = user.login
        this.email = user.email
        this.password = user.password
        this.token = user.token
    })
},
methods: {
    updateAccount() {
      WordPress.updateAccount({displayName: this.displayName, username: this.username, password: this.password, token: this.token, email: this.email}).then((updateAccount) => {
        if (updateAccount) {
          this.errors = 'Successfully saved.'
        } else {
          this.errors = 'Double-check your info and try again.'
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
