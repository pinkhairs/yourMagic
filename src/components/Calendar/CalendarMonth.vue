<template>
  <calendar
    :attributes="attributes"
    is-expanded
    :min-date="Date.parse(month + ' 1, 2022')"
    :max-date="Date.parse(month + ' 30, 2022')"
  />
</template>

<script>
import { Calendar } from 'v-calendar';
import { capitalize, defineComponent } from 'vue';
import 'v-calendar/dist/style.css';

export default defineComponent({
  components: {
    Calendar
  },
  data() {
    return {
      attributes: [
        {
          dot: 'blue',
          dates: [
            new Date(2022, 9, 1), // Jan 1st
            new Date(2022, 9, 10), // Jan 10th
            new Date(2022, 9, 22), // Jan 22nd
            new Date(2022, 8, 4), // Jan 4th
            new Date(2022, 8, 10), // Jan 10th
            new Date(2022, 8, 15), // Jan 15th
            new Date(2022, 7, 12), // Jan 12th
            new Date(2022, 7, 26), // Jan 26th
            new Date(2022, 7, 15), // Jan 15th
          ],
        },
      ],
    };
  },
  props: ['month']
});
</script>
