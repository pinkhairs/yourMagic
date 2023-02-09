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
        <circle-button slot="end" @click="getAiText()" :icon="processingAi ? 'dots.png' : 'star.png'" />
        <textarea-field :autoGrow="true" v-model="entry" :rows="6"></textarea-field>
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
import Ai from '@/services/ai'
import { Configuration, OpenAIApi } from 'openai'


export default  defineComponent({
  name: 'ReadingPage',
  data() {
    return {
      guid: '',
      entry: '',
      title: '',
      processingAi: false
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
    },
    getAiText() {
      this.processingAi = true
      const prompt = 'Write a divinatory tarot prediction for a relationship inquiry. The querent asked, "Are we still friends?" The prediction should have mention someone being hurt (because the Past is represented by the Three of Swords), defensiveness (because the Seven of Wands is in the Present position), and a hopeful outcome (because the Future is represented by the Ten of Cups). End on a positive note, and remind the querent of their ability to persevere in any situation, as well as their character strengths of generosity and exuberance. The querent is asking for 1 sentence to prompt their thought; you must answer in a short, complete sentence. Answer in the first person using the word "I," as if you were the querent analyzing this reading for their own journal entry. This is the starting text that the querent has filled out: '+this.entry
      const configuration = new Configuration({
        apiKey: Ai.apiKey,
      });
      const openai = new OpenAIApi(configuration);
      openai.createCompletion({
        model: "text-davinci-003",
        prompt,
        temperature: 1,
        best_of: 1,
        max_tokens: 24
      }).then((response: any) => {
        this.processingAi = false
        this.entry += response.data.choices[0].text
      });
    }
  }
});
</script>
