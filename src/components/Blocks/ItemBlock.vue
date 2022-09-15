<template>
  <ion-item
    :lines="link ? 'full' : 'none'"
    :router-link="link ? link : null"
    :class="{link, background}">
    <div class="item-native"></div>
    <ion-label position="stacked" v-if="title || subtitle || description">
      <text-heading :level="3" v-if="subtitle">{{subtitle}}</text-heading>
      <text-heading :level="2" v-if="title">{{title}}</text-heading>
      <div v-if="description">{{description}}</div>
    </ion-label>
    <slot />
  </ion-item>
</template>

<script>
import { IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue'
import TextHeading from '../Headings/TextHeading.vue';

export default defineComponent({
  components: { IonItem, IonLabel, TextHeading },
  props: ['subtitle', 'title', 'description', 'link', 'background'],
  computed: {
    clickable() {
      return this.link ? true : false;
    }
  }
})
</script>

<style scoped>
.link {
  --border-width: 2px 0;
  --border-color: #000;
  margin-bottom: -2px;
}
ion-item {
  --inner-padding-top: 0.5em;
  --inner-padding-bottom: 1.25em;
  --padding-inline-start: 0 !important;
  --padding-inline-end: 0 !important;
}
.background {
  --ion-item-background: rgba(86, 0, 232, 0.3);
}
</style>