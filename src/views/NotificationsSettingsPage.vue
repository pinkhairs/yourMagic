<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.go(-1)" icon="back.png" />
      </item-block>
      <item-block>
        <text-heading :level="1">Notifications</text-heading>
      </item-block>
      <item-block :form="true" :background="true" label="Get notifications">
        <ion-toggle v-model="notificationSetting" @ionChange="savePreference({notifications: notificationSetting})" mode="ios" slot="end"></ion-toggle>
      </item-block>
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonToggle } from '@ionic/vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import { useRouter } from 'vue-router';
import ItemBlock from '../components/Blocks/ItemBlock.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import TextHeading from '@/components/Headings/TextHeading.vue'
import CircleButton from '@/components/Buttons/CircleButton.vue'
import Db from '@/services/db'
import { Storage } from '@ionic/storage'

export default  defineComponent({
  components: {
    IonToggle,
    YourMagicPage,
    ItemBlock,
    YourMagicContent,
    TextHeading,
    CircleButton,
},
data() {
  return {
    firstName: '',
    username: '',
    email: '',
    password: '',
    token: '',
    errors: '',
    id: 0,
    notificationSetting: false
  }
},
setup() {
    const router = useRouter();
    return { router };
},
mounted() {
    Db.getUser().then((user) => {
        this.id = user.id
    })
    Db.getPreference('notifications').then((preference) => {
        this.notificationSetting = preference
    })
},
methods: {
    savePreference(preferences: any) {
      Db.savePreference(preferences, this.id)
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
