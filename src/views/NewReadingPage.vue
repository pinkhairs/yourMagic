<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.go(-1)" icon="back.png" />
      </item-block>
      <item-block title="New reading" description="First, type your question." />
      <item-block lines="full" :form="true" :background="true">
        <textarea-field v-model="question" autofocus />
      </item-block>
      <item-block description="Now, choose a spread." />
      <div class="spacer-1"></div>
      <item-block title="Spreads" />
      <div class="spacer-2"></div>
      <div :key="spread.title" v-for="spread in spreads">
        <item-block>
          <speech-bubble-text>{{spread.description}}</speech-bubble-text>
        </item-block>
        <item-block :key="i" @click="() => setQuestion(question, post.ID)" :lines="true" :background="true" v-for="(post, i) in spread.posts">
          <spread-block :title="post.post_title" :description="post.post_content" :cards="post.cards" />
        </item-block>
      </div>
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextareaField from '@/components/Fields/TextareaField.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import { useRouter } from 'vue-router';
import SpeechBubbleText from '@/components/Text/SpeechBubbleText.vue';
import SpreadBlock from '@/components/Blocks/SpreadBlock.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import Db from '@/services/db';

export default  defineComponent({
  name: 'NewReadingPage',
  data() {
    return {
      question: '',
      spreads: []

    }
  },
  components: {
    TextareaField,
    ItemBlock,
    YourMagicPage,
    CircleButton,
    SpeechBubbleText,
    SpreadBlock,
    YourMagicContent
  },
  setup() {
    const router = useRouter()
    return { router }
  },
  mounted() {
    this.getSpreads()
  },
  methods: {
    getSpreads() {
      Db.loadAllSpreads().then((response) => {
        this.spreads = response.spreads
      });
    },
    setQuestion(question: any, spread: any) {
      const q = {question, id: Date.now()}
      Db.addQuestion(q).then(() => {
        this.router.push({name: 'shuffle', params: {question: q.id, spread: spread}})
      })
    }
  }
});
</script>

<style scoped>
.spacer-1 {
  margin-top: -40px;
}
.spacer-2 {
  margin-top: -30px;
}
</style>