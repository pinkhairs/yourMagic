<template>
    <your-magic-page>
        <your-magic-content>
          <div style="display: grid; place-content: center; height: 100%">
            <item-block :center="true">
                <text-heading :level="2">See you later!</text-heading>
            </item-block>
          </div>
        </your-magic-content>
    </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Storage } from '@ionic/storage'
import router from '@/router';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import YourMagicContent from '@/components/Page/YourMagicContent.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import Db from '@/services/db';

export default  defineComponent({
  components: {
    YourMagicPage,
    YourMagicContent,
    ItemBlock,
    TextHeading
  },
  mounted() {
    Db.logout()
  }
});
</script>
