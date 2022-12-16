<template>
  <your-magic-page>
    <your-magic-content>
      <item-block>
        <circle-button @click="() => router.replace('/')" icon="back.png" />
      </item-block>
      <div style="height: 100vh; display: grid; position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
        <div class="grid" :style="'grid-template-columns: '+columns.join(' ')+'; grid-template-rows:'+rows.join(' ')">
          <div @click="() => { active++; router.push({name: 'card-meaning', params: {card: cards[i]}}) }" v-for="(position, i) in positions" :key="position.id" :class="i === active ? 'active card' : 'card'"
          :style="'grid-column-start: column-'+position.column+'; grid-row-start: row-'+position.row">

          </div>
        </div>
      </div>
    </your-magic-content>
    <ion-footer class="ion-no-border ion-transparent">
      <item-block>
        <circle-button @click="() => router.push({name: 'journal-entry', params: {question: $route.params.question, spread: $route.params.spread}})" slot="end" icon="write.png" />
      </item-block>
    </ion-footer>
  </your-magic-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonFooter } from '@ionic/vue';
import YourMagicPage from '@/components/Page/YourMagicPage.vue';
import CircleButton from '@/components/Buttons/CircleButton.vue';
import { useRouter } from 'vue-router';
import ItemBlock from '../components/Blocks/ItemBlock.vue';
import YourMagicContent from '../components/Page/YourMagicContent.vue';
import Db from '@/services/db';

export default  defineComponent({
  name: 'ReadingPage',
  data() {
    return {
      cards: [] as number[],
      positions: [],
      columns: [],
      rows: [],
      flipped: [] as number[],
      active: 0
    };
  },
  components: {
    IonFooter,
    YourMagicPage,
    CircleButton,
    ItemBlock,
    YourMagicContent
},
  setup() {
    const router = useRouter();
    return { router };
  },
  mounted() {
    this.getSpreadData()
  },
  methods: {
    getSpreadData() {
      Db.getIndividualSpread({spread: this.$route.params.spread}).then((response) => {
        this.positions = response.cards
        this.layOutSpread()
        this.chooseCards()
      });
    },
    getQuestion(questionId: any) {
      return
    },
    chooseCards() {
      this.positions.forEach(() => {
        this.flipped.push(0)
        this.cards.push(this.getRandomCard())
      })
    },
    getRandomCard() {
      let card = Math.floor(Math.random() * (79 - 0) + 0);
      while (this.cards.indexOf(card) !== -1) {
        card = Math.floor(Math.random() * (79 - 0) + 0);
      }
      return card
    },
    layOutSpread() {
        let columns:any = [];
        let rows:any = [];
        let lastColumn = 'a';
        let lastRow = '1';
        const possibleColumns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        const possibleRows = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        let gridColumns: any = [];
        let gridRows: any = [];
        let lastColumnIndex = 0
        let lastRowIndex = 0

        this.positions.forEach((position:any) => {
            columns.push(position.column)
            rows.push(position.row)
        })
        
        columns.forEach((column: any) => {
            lastColumnIndex = possibleColumns.indexOf(lastColumn);

            possibleColumns.forEach((possibleColumn, index) => {
                if (column === possibleColumn && lastColumnIndex < index) {
                    lastColumn = column
                    lastColumnIndex = index
                }
            })
        })
        
        rows.forEach((row: any) => {
            lastRowIndex = possibleRows.indexOf(lastRow);

            possibleRows.forEach((possibleRow, index) => {
                if (row === possibleRow && lastRowIndex < index) {
                    lastRow = row
                    lastRowIndex = index
                }
            })
        })

        for (let i = 0; i <= lastColumnIndex; i++) {
            gridColumns.push('[column-'+possibleColumns[i]+'] 1fr');
        }
        for (let i = 0; i <= lastRowIndex; i++) {
            gridRows.push('[row-'+possibleRows[i]+'] 1fr');
        }
        this.columns = gridColumns;
        this.rows = gridRows;
    }
  }
});
</script>

<style scoped>
.grid {
    gap: 6px;
    display: grid;
    padding: 0 1em;
    margin-top: auto;
    margin-bottom: auto;
}
.card {
    background: url('@/assets/images/card-back.png');
    border-radius: 6px;
    text-align: center;
    aspect-ratio: 1/1.5;
    margin-top: auto;
    margin-bottom: auto;
    width: 100%;
    box-shadow: 0 0 40px -3px rgba(255,255,255,.5);
    animation: slideInFromLeft 2s;
}
.active {
  animation: slideInFromLeft 2s, glow 1s infinite alternate; 
}
@keyframes glow {
  from {
    box-shadow: 0 0 10px 0 #ff92e1, inset 0 0 30px -10px #ff92e1;
  }
  to {
    box-shadow: 0 0 15px 10px #ff92e1, inset 0 0 10px 5px #ff92e1;
  }
}
@keyframes slideInFromLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>