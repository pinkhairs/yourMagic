<template>
  <calendar
    :attributes="attributes"
    is-expanded
    :min-date="Date.parse('June 1, 2022')"
    :max-date="Date.parse('June 30, 2022')"
  />
</template>

<script>
import { Calendar } from 'v-calendar';
import { defineComponent } from 'vue';
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
            new Date(2022, 5, 1), // Jan 1st
            new Date(2022, 5, 10), // Jan 10th
            new Date(2022, 5, 22), // Jan 22nd
            new Date(2022, 5, 4), // Jan 4th
            new Date(2022, 5, 10), // Jan 10th
            new Date(2022, 5, 15), // Jan 15th
            new Date(2022, 5, 12), // Jan 12th
            new Date(2022, 5, 26), // Jan 26th
            new Date(2022, 5, 15), // Jan 15th
          ],
        },
      ],
    };
  },
});
</script>
