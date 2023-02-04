<template>
  <your-magic-page>
    <your-magic-content>
      <stack-list>
        <item-block title="Library" />
        <item-block :background="true" link="/content" subtitle="Decks" />
        <item-block :key="i" v-for="(category, i) in categories" :background="true" link="/content" :subtitle="category.title" />
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
import Db from '@/services/db';

export default  defineComponent({
  name: 'Tab2Page',
  data() {
    return {
      categories: []
    }
  },
  components: {
    ItemBlock,
    YourMagicPage,
    StackList,
    YourMagicContent
  },
  mounted() {
    Db.loadAllCategories().then((results: any) => {
      this.categories = results.categories[0].subcategories;
    })
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