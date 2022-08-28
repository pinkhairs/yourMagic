<template>
  <div>
    <div>
      Type a question...
    </div>
    <ion-button>&rarr;</ion-button>
  </div>
</template>

<script>
import { IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonButton }
});
</script>