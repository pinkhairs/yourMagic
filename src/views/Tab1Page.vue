<template>
  <your-magic-page>
    <stack-list>
      <item-block>
        <cover-heading time="morning" name="Bartholomew" />
      </item-block>
      <item-block :background="true" title="Get a reading" link="/new-reading">
        <fake-door-button />
      </item-block>
      <item-block :background="true" link="/content">
        <article-block title="The Hermit" subtitle="Card of the day" content="For the card of the day today we drew The Hermit." img="hermit.png" />
      </item-block>
      <item-block :background="true" link="/content">
        <article-block title="Virgo New Moon!" subtitle="Tarostrology" content="What do you want to write here? 🌝" img="virgo.png" />
      </item-block>
      <item-block router-link="/content" title="Prompts for Leo season">
        <speech-bubble-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</speech-bubble-text>
      </item-block>
      <item-block :background="true" link="/new-reading" subtitle="One two three" />
      <item-block :background="true" link="/new-reading" subtitle="Question #2" />
      <item-block :background="true" link="/new-reading" subtitle="Tarot question" />
    </stack-list>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArticleBlock from '@/components/Blocks/ArticleBlock.vue';
import FakeDoorButton from '@/components/Buttons/FakeDoorButton.vue';
import CoverHeading from '@/components/Headings/CoverHeading.vue';
import SpeechBubbleText from '@/components/Text/SpeechBubbleText.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import YourMagicPage from '../components/Page/YourMagicPage.vue';
import StackList from '../components/Lists/StackList.vue';

export default  defineComponent({
  name: 'Tab1Page',
  components: {
    FakeDoorButton,
    ArticleBlock,
    CoverHeading,
    SpeechBubbleText,
    ItemBlock,
    YourMagicPage,
    StackList
  }
});
</script>
