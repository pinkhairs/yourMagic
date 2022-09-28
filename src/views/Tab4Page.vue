<template>
  <your-magic-page :time="time">
    <your-magic-content>
      <stack-list>
        <item-block title="Search">
          <search-bar placeholder="Search" />
          <p>e.g. fool, modern tarot, pixie</p>
        </item-block>
      </stack-list>
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import StackList from '@/components/Lists/StackList.vue';
import SearchBar from '../components/Fields/SearchBar.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';

export default  defineComponent({
  name: 'Tab1Page',
  data() {
    return {
      time: 'morning'
    }
  },
  components: {
    YourMagicPage,
    ItemBlock,
    StackList,
    SearchBar,
    YourMagicContent
}
});
</script>

<style scoped>
</style>