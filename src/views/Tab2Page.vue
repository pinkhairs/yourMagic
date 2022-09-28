<template>
  <your-magic-page>
    <stack-list>
      <item-block router-link="/content" title="Library" />
      <item-block :background="true" link="/new-reading" subtitle="One two three" />
      <item-block :background="true" link="/new-reading" subtitle="Question #2" />
      <item-block :background="true" link="/new-reading" subtitle="Tarot question" />
    </stack-list>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import YourMagicPage from '../components/Page/YourMagicPage.vue';
import StackList from '../components/Lists/StackList.vue';

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
    StackList
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