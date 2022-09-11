<template>
  <ion-item
    :lines="clickable ? 'full' : 'none'"
    :router-link="link ? link : null"
    :class="link ? 'clickable' : ''">
    <ion-label>
      <ion-item-subtitle>{{subtitle}}</ion-item-subtitle>
      <ion-item-title>{{title}}</ion-item-title>
      {{description}}
    </ion-label>
    <slot />
  </ion-item>
</template>

<script>
import { IonItem, IonLabel } from '@ionic/vue';
import { defineComponent } from 'vue'

export default defineComponent({
  components: { IonItem, IonLabel },
  props: ['subtitle', 'title', 'description', 'link'],
})
</script>

<style scoped>
.clickable {
  --ion-item-background: rgba(0, 0, 0, .25);
}
ion-item {
  --inner-padding-top: 1em;
  --inner-padding-bottom: 1em;
}
</style>