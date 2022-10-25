<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.go(-1)" icon="back.png" />
      </item-block>
      <stack-list>
        <item-block title="Notifications" />
        <item-block :background="true" link="/content">
          <article-block title="Upgrade?" content="Placeholder text. Lorem ipsum dolor sit amet lorem." img="red-star.png" />
        </item-block>
        <item-block :background="true" link="/content">
          <article-block title="Virgo New Moon!" subtitle="Tarostrology" content="What do you want to write here? 🌝" img="virgo.png" />
        </item-block>
      </stack-list>
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import YourMagicPage from '../components/Page/YourMagicPage.vue';
import StackList from '../components/Lists/StackList.vue';
import CircleButton from '../components/Buttons/CircleButton.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import ArticleBlock from '../components/Blocks/ArticleBlock.vue';
import { useRouter } from 'vue-router';

export default  defineComponent({
  name: 'Tab1Page',
  data() {
    return {
      time: 'afternoon'
    }
  },
  components: {
    ItemBlock,
    YourMagicPage,
    StackList,
    CircleButton,
    YourMagicContent,
    ArticleBlock
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