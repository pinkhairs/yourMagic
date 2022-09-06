<template>
  <ion-grid>
    <ion-row>
      <ion-col size="4">
        <ion-img src="https://via.placeholder.com/250x400" alt="The Card Name" />
      </ion-col>
      <ion-col size="4">
        <ion-img src="https://via.placeholder.com/250x400" alt="The Card Name" />
      </ion-col>
      <ion-col size="4">
        <ion-img src="https://via.placeholder.com/250x400" alt="The Card Name" />
      </ion-col>
    </ion-row>
      <ion-row>
      <ion-col size="4">
        <ion-img src="https://via.placeholder.com/250x400" alt="The Card Name" />
      </ion-col>
      <ion-col size="4">
        <ion-img src="https://via.placeholder.com/250x400" alt="The Card Name" />
      </ion-col>
      <ion-col size="4">
        <ion-img src="https://via.placeholder.com/250x400" alt="The Card Name" />
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { IonGrid, IonCol, IonRow, IonImg } from '@ionic/vue';
  
  export default  defineComponent({
    name: 'ContentPage',
    components: {
      IonGrid,
      IonCol,
      IonImg,
      IonRow,
      
    }
  });
  </script>
  