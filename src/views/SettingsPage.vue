<template>
  <your-magic-page>
    <your-magic-content>
      <stack-list>
        <item-block>
          <circle-button @click="() => router.go(-1)" icon="back.png" />
        </item-block>
        <item-block title="Settings" />
        <item-block :background="true" link="/account" subtitle="Account" />
        <item-block :background="true" link="/notifications-settings" subtitle="Notifications" />
        <item-block :background="true" link="/subscription" subtitle="Your Subscription" />
        <item-block link="/logout" subtitle="Logout" />
      </stack-list>
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import YourMagicPage from '../components/Page/YourMagicPage.vue';
import StackList from '../components/Lists/StackList.vue';
import { useRouter } from 'vue-router';
import YourMagicContent from '@/components/Page/YourMagicContent.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import { Storage } from '@ionic/storage';

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
    CircleButton
  },
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>

<style scoped>
.top-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
}
</style>