<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.go(-1)" icon="back.png" />
      </item-block>
      <item-block>
        <text-heading :level="1" title="Tap to shuffle"></text-heading>
      </item-block>
      <item-block>
        <div id="shuffle" @click="reShuffle">
          <div :class="shuffle ? 'zero cardanimation' : 'cardanimation'"><span></span></div>
          <div :class="shuffle ? 'one cardanimation' : 'cardanimation'"><span></span></div>
          <div :class="shuffle ? 'two cardanimation' : 'cardanimation'"><span></span></div>
          <div :class="shuffle ? 'three cardanimation' : 'cardanimation'"><span></span></div>
          <div :class="shuffle ? 'four cardanimation' : 'cardanimation'"><span></span></div>
          <div :class="shuffle ? 'five cardanimation' : 'cardanimation'"><span></span></div>
        </div>
      </item-block>
      <div style="text-align: center">Tap to shuffle again.</div>
    </your-magic-content>
    <ion-footer>
      <text-button expand="full" @click="() => router.push({name: 'reading', params: { question: $route.params.question, spread: $route.params.spread }})" text="Ready &rarr;" />
    </ion-footer>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonFooter } from '@ionic/vue';
import TextHeading from '@/components/Headings/TextHeading.vue';
import TextButton from '@/components/Buttons/TextButton.vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import { useRoute, useRouter } from 'vue-router';
import ItemBlock from '../components/Blocks/ItemBlock.vue';
import YourMagicContent from '@/components/Page/YourMagicContent.vue';

export default  defineComponent({
  name: 'ShufflePage',
  data() {
    return {
      shuffle: true,
    };
  },
  components: {
    IonFooter,
    TextHeading,
    TextButton,
    YourMagicPage,
    CircleButton,
    ItemBlock,
    YourMagicContent
  },
  props: ['question', 'spread'],
  setup() {
    const router = useRouter();
    const route = useRoute();
    return { router, route };
  },
  methods: {
    reShuffle() {
      this.shuffle = false;
      setTimeout(() => {
        this.shuffle = true
      }, 0)
    }
  }
});
</script>

<style scoped>
.cardanimation{
  width:150px; 
  height:240px;
  background: url('@/assets/images/card-back@3x.png') center/cover no-repeat;
  position:absolute; 
  margin:auto; 
  left:0;
  right:0;
  top:40px;
  box-shadow: 0 0 64px -16px rgba(255,255,255,0.25), inset 0 0 64px -16px rgba(255,255,255,0.25);
  display:flex;
  border-radius: 4px;
}

span{
  font-size:4em;
  margin:auto;
  align-items:center;
}

.one{
  animation-name: shuffle; 
  animation-duration: 1s; 
  animation-iteration-count:5;  
  z-index:5;
}

.two{
  animation-name: shuffletwo; 
  animation-duration: 1s; 
  animation-iteration-count:5;  
  animation-delay:.8s; 
  z-index:4;
}

.three{
  animation-name: shufflethree; 
  animation-duration: 1s; 
  animation-iteration-count:5;  
  animation-delay:1.2s; 
  z-index:3;
}

.four{
  animation-name: shufflefour; 
  animation-duration: 1s; 
  animation-iteration-count:5;  
  animation-delay:1.6s; 
  z-index:4;
}

.five{
  animation-name: shufflefive; 
  animation-duration: 1s; 
  animation-iteration-count:5;  
  animation-delay:1.8s; 
  z-index:3;
}

#shuffle{
  justify-content:center;
  align-items:center;
  position: relative;
  overflow: auto;
  height: 375px;
  width: 100vw;
}


@keyframes shuffle {
0% {transform: translate(0,0); z-index:5;}
50% {transform: translate(2.4em,0) rotate(8deg); z-index:5;}
100% {transform: translate(0,0); z-index:1;}
}

@keyframes shuffletwo {
0% {transform: translate(0,0); z-index:4;}
50% {transform: translate(-2.4em,0) rotate(-5deg); z-index:4;}
100% {transform: translate(0,0); z-index:8;}
}

@keyframes shufflethree {
0% {transform: translate(0,0); z-index:3;}
50% {transform: translate(2.4em,0); z-index:1;}
100% {transform: translate(0,0); z-index:10;}
}

@keyframes shufflefour {
0% {transform: translate(0,0); z-index:4;}
50% {transform: translate(-2.2em,0) rotate(-3deg); z-index:1;}
100% {transform: translate(0,0); z-index:14;}
}

@keyframes shufflefive {
0% {transform: translate(0,0); z-index:3;}
50% {transform: translate(2.4em,0) rotate(4deg); z-index:1;}
100% {-webkit-transform: translate(0,0);transform: translate(0,0); z-index:16;}
} 


</style>