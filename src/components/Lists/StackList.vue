<template>
  <ion-list>
    <slot></slot>
  </ion-list>
</template>

<script>
import { IonList } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonList },
});
</script>

<style scoped>
ion-list {
  --ion-item-background: none;
}
</style>