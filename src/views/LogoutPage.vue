<template>
    <your-magic-page>
        <your-magic-content>
            <item-block :center="true">
                <text-heading :level="2">Logging you out...</text-heading>
            </item-block>
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
import WordPress from '@/services/wordpress';

export default  defineComponent({
  components: {
    YourMagicPage,
    YourMagicContent,
    ItemBlock,
    TextHeading
  },
  mounted() {
    WordPress.logout()
  }
});
</script>
