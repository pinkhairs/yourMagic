<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.go(-1)" icon="back.png" />
      </item-block>
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import YourMagicPage from '../components/Page/YourMagicPage.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';

export default  defineComponent({
  name: 'CardMeaningPage',
  components: {
    YourMagicPage,
    YourMagicContent,
    ItemBlock,
    CircleButton
},
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
