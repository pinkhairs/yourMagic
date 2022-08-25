<template>
  <div>
    <card-front v-if="flipped" title="The Fool" />
    <card-back v-else />
  </div>
</template>

<script>
import CardBack from '@/components/Cards/CardBack.vue';
import CardFront from '@/components/Cards/CardFront.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { CardBack, CardFront },
  props: ['flipped']
});
</script>