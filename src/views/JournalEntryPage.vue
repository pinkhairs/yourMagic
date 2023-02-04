<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.go(-1)" icon="back.png" />
      </item-block>
      <item-block :center="true">
        <text-heading :level="3">{{title}}</text-heading>
      </item-block>
      <reading-block style="transform: scale(0.5); transform-origin: top;" />
    </your-magic-content>
    <ion-footer class="ion-no-border ion-transparent">
      <item-block lines="full" :form="true" :background="true">
        <circle-button slot="end" icon="star.png" />
        <textarea-field v-model="entry" :rows="6"></textarea-field>
        <div v-html="entry.replace(/\n/g, '<br>')" ref="entryHTML" style="display: none"></div>
      </item-block>
      <text-button width="full" @click="saveReading()" text="Save" />
    </ion-footer>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent, toRaw } from 'vue';
import { IonFooter } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import { useRouter, useRoute } from 'vue-router';
import ItemBlock from '../components/Blocks/ItemBlock.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import TextareaField from '@/components/Fields/TextareaField.vue';
import ReadingBlock from '@/components/Blocks/ReadingBlock.vue';
import TextButton from '@/components/Buttons/TextButton.vue';
import Db from '@/services/db';
import { useReadingsStore } from '@/stores/readings';

export default  defineComponent({
  name: 'ReadingPage',
  data() {
    return {
      guid: '',
      entry: '',
      title: ''
    };
  },
  components: {
    IonFooter,
    TextHeading,
    YourMagicPage,
    TextButton,
    CircleButton,
    ItemBlock,
    YourMagicContent,
    TextareaField,
    ReadingBlock
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    return { router, route };
  },
  mounted() {
    const readings = toRaw(useReadingsStore().readings)
    const reading = toRaw(readings.find((reading: any) => reading.id === this.$route.params.question))
    this.title = reading.question
    this.guid = reading.id
  },
  methods: {
    saveReading() {
      const user = Db.getUser().then((user) => {
        Db.saveReading({
          guid: this.guid,
          title: this.title,
          content: (this.$refs['entryHTML'] as any).innerHTML,
          user_id: user.id
        })
      })
    }
  }
});
</script>
