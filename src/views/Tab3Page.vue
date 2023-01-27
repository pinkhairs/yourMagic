<template>
  <your-magic-page>
    <your-magic-content>
      <stack-list>
        <div class="top-row">
          <item-block title="Journal" />
          <div class="buttons">
            <circle-button @click="calendar = !calendar" icon="list.png" />
            <circle-button icon="hashtag.png" />
          </div>
        </div>
        <item-block>
          <calendar-month v-if="calendar" />
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
import CalendarMonth from '../components/Calendar/CalendarMonth.vue';
import CircleButton from '../components/Buttons/CircleButton.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';

export default  defineComponent({
  name: 'Tab3Page',
  data() {
    return {
      calendar: false
    }
  },
  components: {
    ItemBlock,
    YourMagicPage,
    StackList,
    CalendarMonth,
    CircleButton,
    YourMagicContent
}
});
</script>

<style scoped>
.top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: -15px;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -30px;
}
</style>