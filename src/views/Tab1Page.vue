<template>
  <your-magic-page>
    <your-magic-content>
      <div class="top-buttons">
        <circle-button link="/settings" icon="cog.png" />
        <circle-button link="/notifications" icon="bell.png" :alert="true" />
      </div>
      <stack-list>
        <item-block>
          <cover-heading :time="time" />
        </item-block>
        <item-block :background="true" :lines="true" subtitle="Get a reading">
          <fake-door-button />
          <div style="height: 15px"></div>
        </item-block>
        <item-block :background="true" link="/content">
        <article-block title="Tap to pull..." subtitle="Card of the day" content="" img="card-back.png" />
        </item-block>
      </stack-list>
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArticleBlock from '@/components/Blocks/ArticleBlock.vue';
import FakeDoorButton from '@/components/Buttons/FakeDoorButton.vue';
import CoverHeading from '@/components/Headings/CoverHeading.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import StackList from '@/components/Lists/StackList.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import YourMagicContent from '@/components/Page/YourMagicContent.vue';
import Db from '@/services/db';

export default  defineComponent({
  name: 'Tab1Page',
  data() {
    return {
      time: 'afternoon',
      firstName: ''
    }
  },
  components: {
    FakeDoorButton,
    ArticleBlock,
    CoverHeading,
    ItemBlock,
    YourMagicPage,
    StackList,
    CircleButton,
    YourMagicContent
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