<template>
  <div>
    <h1 v-if="time === 'morning'">Good <span class="offset"><image-media src="morning-star.png" /></span> morning, {{name}}</h1>
    <h1 v-if="time === 'afternoon'">Good <span class="offset"><image-media src="afternoon-star.png" /></span> afternoon, {{name}}</h1>
    <h1 v-if="time === 'evening'">Good <span class="offset"><image-media src="evening-moon.png" /></span> evening, {{name}}</h1>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import ImageMedia from '@/components/Media/ImageMedia.vue'
import Db from '@/services/db'

export default defineComponent({
  components: { ImageMedia },
  data() {
    return {
      time: 'morning',
      name: ''
    }
  },
  methods: {
    changeBackgroundColor() {
      let currentTime = new Date().getHours()
      let morningTimes = [6, 7, 8, 9, 10, 11]
      let afternoonTimes = [12, 13, 14, 15, 16, 17]
      if (morningTimes.includes(currentTime)) {
        this.time = 'morning'
      } else if (afternoonTimes.includes(currentTime)) {
        this.time = 'afternoon'
      } else {
        this.time = 'evening'
      }
    }
  },
  mounted() {
    this.changeBackgroundColor()
    Db.getUser().then((user) => {
        this.name = user.firstName
    })
  }
});
</script>

<style scoped>
h1 {
  vertical-align: middle;
  margin-top: -15px;
  padding-top: 0;
  font-size: 3.75rem;
}
.offset {
  position: relative;
  top: 15px;
}
</style>