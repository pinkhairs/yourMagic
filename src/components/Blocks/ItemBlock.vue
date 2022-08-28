<template>
  <ion-item :lines="clickable ? 'full' : 'none'">
    <ion-item-header>
      <ion-item-subtitle>{{subtitle}}</ion-item-subtitle>
      <ion-item-title>{{title}}</ion-item-title>
      {{description}}
    </ion-item-header>
    <slot />
  </ion-item>
</template>

<script>
import { IonItem, IonItemHeader, IonItemSubtitle, IonItemTitle } from '@ionic/vue';
import { defineComponent } from 'vue'

export default defineComponent({
  components: { IonItem, IonItemHeader, IonItemSubtitle, IonItemTitle },
  props: ['cilckable', 'subtitle', 'title', 'description'],
})
</script>
