<template>
  <ion-item>
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
  props: ['subtitle', 'title', 'description'],
})
</script>
