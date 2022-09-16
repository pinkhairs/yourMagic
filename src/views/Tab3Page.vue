<template>
  <your-magic-page :time="time">
    <stack-list>
      <div class="top-row">
        <item-block title="Journal" />
        <div class="buttons">
          <circle-button icon="list.png" />
          <circle-button icon="hashtag.png" />
        </div>
      </div>
      <item-block>
        <calendar-month />
      </item-block>
    </stack-list>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import YourMagicPage from '../components/Page/YourMagicPage.vue';
import StackList from '../components/Lists/StackList.vue';
import CalendarMonth from '../components/Calendar/CalendarMonth.vue';
import CircleButton from '../components/Buttons/CircleButton.vue';

export default  defineComponent({
  name: 'Tab3Page',
  data() {
    return {
      time: 'evening'
    }
  },
  components: {
    ItemBlock,
    YourMagicPage,
    StackList,
    CalendarMonth,
    CircleButton
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