<template>
  <div :class="{lines}">
    <ion-item
      v-if="link"
      :lines="lines ? 'full' : 'none'"
      @click="() => router.push(link)"
      :class="{link, background, center}">
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
      :class="{background, form, center}">
      <ion-label position="stacked" v-if="title || subtitle || description">
        <text-heading :level="2" v-if="subtitle">{{subtitle}}</text-heading>
        <text-heading :level="1" v-if="title">{{title}}</text-heading>
        <div class="description" v-if="description">{{description}}</div>
      </ion-label>
      <div class="spacer"></div>
      <ion-label class="inline-label" position="inline" v-if="form && label">{{label}}</ion-label>
      <slot />
    </ion-item>
  </div>
</template>

<script>
import { IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue'
import TextHeading from '../Headings/TextHeading.vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { IonItem, IonLabel, TextHeading },
  props: ['subtitle', 'title', 'description', 'link', 'background', 'lines', 'form', 'center', 'label'],
  computed: {
    clickable() {
      return this.link ? true : false;
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  }
})
</script>

<style scoped>
ion-label.inline-label {
  --color: #000;
  font-weight: 700;
}
.link {
  --border-width: 2px 0;
  margin-bottom: -2px;
}
ion-item {
  --inner-padding-top: 0.5em;
  --padding-inline-start: 0 !important;
  --padding-inline-end: 0 !important;
  --border-color: var(--border-color);
  --inner-padding-bottom: 0.5em !important;
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
  border: #000 2px solid;
  border-left: 0;
  border-right: 0;
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
.center {
  display: grid;
  place-content: center;
}
.spacer {
  height: 10px;
}
</style>