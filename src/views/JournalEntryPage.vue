<template>
  <your-magic-page :time="time">
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.go(-1)" icon="back.png" />
      </item-block>
      <item-block>
        <text-heading :level="1">{{$route.params.question}}</text-heading>
      </item-block>
    </your-magic-content>
    <ion-footer class="ion-no-border ion-transparent">
      <item-block lines="full" :form="true" :background="true">
        <textarea-field></textarea-field>
      </item-block>
      <text-button expand="full" @click="() => router.push('/reading')" text="Done" />
    </ion-footer>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonFooter } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import { useRouter } from 'vue-router';
import ItemBlock from '../components/Blocks/ItemBlock.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import TextareaField from '@/components/Fields/TextareaField.vue';
import TextButton from '@/components/Buttons/TextButton.vue'

export default  defineComponent({
  name: 'ReadingPage',
  data() {
    return {
      time: 'evening',
    };
  },
  components: {
    IonFooter,
    TextHeading,
    YourMagicPage,
    CircleButton,
    ItemBlock,
    YourMagicContent,
    TextareaField,
    TextButton
},
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>
