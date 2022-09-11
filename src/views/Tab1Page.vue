<template>
  <your-magic-page>
    <stack-list>
      <item-block>
        <cover-heading>Good afternoon, Amí</cover-heading>
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
      <item-block router-link="/content">
        <article-block />
      </item-block>
      <item-block router-link="/content">
        <text-heading title="Prompts for Leo season" />
      </item-block>
      <speech-bubble-text content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      <item-block router-link="/new-reading" title="One two three" />
      <item-block router-link="/new-reading" title="Question #2" />
      <item-block router-link="/new-reading" title="Tarot question" />
    </stack-list>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArticleBlock from '@/components/Blocks/ArticleBlock.vue';
import FakeDoorButton from '@/components/Buttons/FakeDoorButton.vue';
import CoverHeading from '@/components/Headings/CoverHeading.vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
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
    TextHeading,
    SpeechBubbleText,
    ItemBlock,
    YourMagicPage,
    StackList
  }
});
</script>
