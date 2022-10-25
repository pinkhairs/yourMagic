<template>
  <your-magic-page>
    <your-magic-content>
      <stack-list>
        <item-block title="Library" />
        <item-block :background="true" link="/new-reading" subtitle="One two three" />
        <item-block :background="true" link="/new-reading" subtitle="Question #2" />
        <item-block :background="true" link="/new-reading" subtitle="Tarot question" />
      </stack-list>
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import YourMagicPage from '../components/Page/YourMagicPage.vue';
import StackList from '../components/Lists/StackList.vue';
import YourMagicContent from '@/components/Page/YourMagicContent.vue';

export default  defineComponent({
  name: 'Tab2Page',
  data() {
    return {
      time: 'morning'
    }
  },
  components: {
    ItemBlock,
    YourMagicPage,
    StackList,
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