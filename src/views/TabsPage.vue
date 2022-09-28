<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab-1" href="/tabs/tab-1">
          <ion-icon :icon="star" />
        </ion-tab-button>
          
        <ion-tab-button tab="tab-2" href="/tabs/tab-2">
          <ion-icon :icon="book" />
        </ion-tab-button>
        
        <ion-tab-button tab="tab-3" href="/tabs/tab-3">
          <ion-icon :icon="calendarClear" />
        </ion-tab-button>
        
        <ion-tab-button tab="tab-4" href="/tabs/tab-4">
          <ion-icon :icon="search" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonRouterOutlet } from '@ionic/vue';
import { star, book, calendarClear, search } from 'ionicons/icons';

export default defineComponent({
  name: 'TabsPage',
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet },
  setup() {
    return {
      star, 
      book, 
      calendarClear,
      search
    }
  }
});
</script>

<style scoped>
ion-tab-bar {
  --background: rgba(255,146,225,.95);
  --color: #000;
  --border: 2px solid #000;
  --color-selected: #000;
}
ion-tab-button {
  outline: 2px #000 solid;
}
ion-tab-button.tab-selected {
  --background: rgba(246,169,4,.95);
}
</style>