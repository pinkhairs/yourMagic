<template>
  <ion-item
    v-if="link"
    :lines="lines ? 'full' : 'none'"
    :router-link="link"
    :class="{link, background}">
    <ion-label position="stacked" v-if="title || subtitle || description">
      <text-heading :level="2" v-if="subtitle">{{subtitle}}</text-heading>
      <text-heading :level="1" v-if="title">{{title}}</text-heading>
      <div class="description" v-if="description">{{description}}</div>
    </ion-label>
    <div class="spacer"></div>
    <slot />
  </ion-item>
  <ion-item
    v-else
    :lines="'none'"
    :class="{lines, background, form}">
    <ion-label position="stacked" v-if="title || subtitle || description">
      <text-heading :level="2" v-if="subtitle">{{subtitle}}</text-heading>
      <text-heading :level="1" v-if="title">{{title}}</text-heading>
      <div class="description" v-if="description">{{description}}</div>
    </ion-label>
    <div class="spacer"></div>
    <slot />
  </ion-item>
</template>

<script>
import { IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue'
import TextHeading from '../Headings/TextHeading.vue';

export default defineComponent({
  components: { IonItem, IonLabel, TextHeading },
  props: ['subtitle', 'title', 'description', 'link', 'background', 'lines', 'form'],
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
ion-item:not(.background) {
  --background: none;
}
ion-item.background {
  --ion-item-background: rgba(86, 0, 232, 0.3);
}
ion-item.background.form {
  --ion-item-background: rgba(255, 255, 255, 0.7);
}
.spacer {
  height: 10px;
}
.description {
  font-size: 18px;
}
.lines {
  --border-width: 2px 0;
  --border-color: #000;
  margin-bottom: -2px;
  --box-shadow: none;
}
.lines:last-child {
  margin-bottom: 0;
}
.lines .item-inner {
  --border-color: rgba(0,0,0,0) !important;
  --border-style: none !important;
}
</style>