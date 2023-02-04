<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.go(-1)" icon="back.png" />
      </item-block>
      <item-block>
        <img style="width: 55%; margin: 0 auto;" :src="image" />
      </item-block>
      <item-block :center="true" :subtitle="name" />
      <item-block>
        {{ meaning }}
      </item-block>
    </your-magic-content>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import YourMagicPage from '../components/Page/YourMagicPage.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import ItemBlock from '@/components/Blocks/ItemBlock.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import Db from '@/services/db';

export default  defineComponent({
  name: 'CardMeaningPage',
  data() {
    return {
      name: '',
      meaning: '',
      image: ''
    }
  },
  components: {
    YourMagicPage,
    YourMagicContent,
    ItemBlock,
    CircleButton
  },
  props: ['card', 'deck'],
  setup() {
    const router = useRouter();
    return { router };
  },
  mounted() {
    Db.getIndividualCard({card: this.card, deck: this.deck}).then((response) => {
      this.name = response.card['name']
      this.meaning = response.card['meaning']
      this.image = response.card['image']
    })
  }
});
</script>
