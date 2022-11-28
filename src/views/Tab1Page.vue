<template>
  <your-magic-page>
    <your-magic-content>
      <div class="top-buttons">
        <circle-button link="/settings" icon="cog.png" />
        <circle-button link="/notifications" icon="bell.png" :alert="true" />
      </div>
      <stack-list>
        <item-block>
          <cover-heading :time="time" :name="firstName" />
        </item-block>
        <item-block :background="true" subtitle="Get a reading" link="/new-reading">
          <fake-door-button />
        </item-block>
        <item-block :background="true" link="/content">
          <article-block title="The Hermit" subtitle="Card of the day" content="For the card of the day today we drew The Hermit." img="hermit.png" />
        </item-block>
        <item-block :background="true" link="/content">
          <article-block title="Virgo New Moon!" subtitle="Tarostrology" content="What do you want to write here? 🌝" img="virgo.png" />
        </item-block>
        <item-block subtitle="Prompts for Leo season">
          <speech-bubble-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</speech-bubble-text>
        </item-block>
        <item-block :background="true" link="/new-reading" description="One two three" />
        <item-block :background="true" link="/new-reading" description="Question #2" />
        <item-block :background="true" link="/new-reading" description="Tarot question" />
      </stack-list>
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ArticleBlock from '@/components/Blocks/ArticleBlock.vue';
import FakeDoorButton from '@/components/Buttons/FakeDoorButton.vue';
import CoverHeading from '@/components/Headings/CoverHeading.vue';
import SpeechBubbleText from '@/components/Text/SpeechBubbleText.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import StackList from '@/components/Lists/StackList.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import YourMagicContent from '@/components/Page/YourMagicContent.vue';
import WordPress from '@/services/wordpress';

export default  defineComponent({
  name: 'Tab1Page',
  data() {
    return {
      time: 'afternoon',
      firstName: ''
    }
  },
  components: {
    FakeDoorButton,
    ArticleBlock,
    CoverHeading,
    SpeechBubbleText,
    ItemBlock,
    YourMagicPage,
    StackList,
    CircleButton,
    YourMagicContent
  },
  mounted() {
    WordPress.getUser().then((user) => {
        this.firstName = user.firstName
    })
  }
});
</script>

<style scoped>
.top-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
}
</style>