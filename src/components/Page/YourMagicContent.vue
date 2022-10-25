<template>
  <ion-content :class="time" :fullscreen="true">
    <slot></slot>
  </ion-content>
</template>

<script>
import { defineComponent } from 'vue';
import { IonContent } from '@ionic/vue';

export default defineComponent({
  components: { IonContent },
  data() {
    return {
      time: 'morning'
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
  }
});
</script>

<style>
ion-content.morning {
  --color: #000;
  --border-color: #000 !important;
  --background: linear-gradient(360deg, #F6A904 0%, #FF92E1 100%);
}
ion-content.morning on-button {
  --border-color: #000 !important;
}
ion-content.morning ion-textarea {
  --border-color: #000 !important;
}
ion-content.morning ion-item {
  --border-color: #000 !important;
}
ion-content.morning ion-input {
  --color: #000 !important;
}
ion-content.afternoon {
  --color: #fff;
  --border-color: #000 !important;
  --ion-item-color: #fff;
  --ion-text-color: #fff;
  --background: linear-gradient(180deg, #5600E8 0%, #FF92E1 100%);
}
ion-content.afternoon ion-button {
  --border-color: #000 !important;
}
ion-content.afternoon ion-textarea {
  --border-color: #000 !important;
}
ion-content.afternoon ion-item {
  --border-color: #000 !important;
}
ion-content.afternoon ion-input {
  --color: #000 !important;
}
ion-content.evening {
  --color: #fff;
  --border-color: #999;
  --ion-item-color: #fff;
  --ion-text-color: #fff;
  --background: url('@/assets/images/evening.png') no-repeat center center fixed;
  background-size: cover;
}
ion-content.evening ion-button {
  --border-color: #999 !important;
}
ion-content.evening ion-textarea {
  --border-color: #999 !important;
}
ion-content.evening ion-item {
  --border-color: #999 !important;
}
ion-content.evening ion-input {
  --color: #000 !important;
}
</style>
