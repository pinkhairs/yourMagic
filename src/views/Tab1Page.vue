<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Components</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
            <ion-title size="large">Components</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <article-block />
      <spread-block />
      <text-button width="block" />
      <fake-door-button />
      <calendar-month />
      <card-container :flipped="true" />
      <text-field />
      <filter-list />
      <cover-heading />
      <text-heading title="Hi! How's it going?" />
      <paragraph-text content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <speech-bubble-text content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <shelf-list />
    </ion-content>
    <circle-button vertical="bottom" horizontal="end" />
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ArticleBlock from '@/components/Blocks/ArticleBlock.vue';
import SpreadBlock from '@/components/Blocks/SpreadBlock.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import TextButton from '@/components/Buttons/TextButton.vue';
import FakeDoorButton from '@/components/Buttons/FakeDoorButton.vue';
import CalendarMonth from '@/components/Calendar/CalendarMonth.vue';
import CardContainer from '../components/Cards/CardContainer.vue';
import TextField from '@/components/Fields/TextField.vue';
import FilterList from '@/components/Filter/FilterList.vue';
import CoverHeading from '@/components/Headings/CoverHeading.vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import ParagraphText from '@/components/Text/ParagraphText.vue';
import SpeechBubbleText from '@/components/Text/SpeechBubbleText.vue';
import ShelfList from '@/components/Lists/ShelfList.vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: {
    ArticleBlock,
    SpreadBlock,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    CircleButton,
    TextButton,
    FakeDoorButton,
    CalendarMonth,
    CardContainer,
    TextField,
    FilterList,
    CoverHeading,
    TextHeading,
    ParagraphText,
    SpeechBubbleText,
    ShelfList
  }
});
</script>
,
    SpeechBubbleText