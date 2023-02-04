<template>
  <div style="display: grid; height: calc(100vh - 200px); width: 100vw; justify-content: center; align-items: center;">
    <div style="display: grid; justify-content: center; align-items: center" :class="cards.length === 1 ? 'single-card': ''">
      <div class="grid" :style="'width: 100vw; grid-template-columns: '+columns.join(' ')+'; grid-template-rows:'+rows.join(' ')">
        <div @click="() => { if (flipped[i]) {router.push({name: 'card-meaning', params:{deck, card: cards[i]}})} else {active++; flipped[i] = true} }" v-for="(position, i) in positions" :key="position.id" :class="i === active ? 'active card' : 'card'"
        :style="'grid-column-start: column-'+position.column+'; grid-row-start: row-'+position.row">
          <div :class="flipped[i] ? 'flip-container flipped' : 'flip-container'">
            <div class="flipper">
              <div class="back">
                <img :src="images[cards[i]]" />
              </div>
              <div class="front">
                <image-media src="card-back.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Db from '@/services/db';
import { useReadingsStore } from '@/stores/readings';
import ImageMedia from '@/components/Media/ImageMedia.vue';

export default defineComponent({
  components: { ImageMedia },
  data() {
    return {
      cards: [],
      images: [],
      positions: [],
      columns: [],
      rows: [],
      flipped: [],
      active: 0,
      deck: 'your-magic'
    }
  },
  params: ['spread'],
  setup() {
    const router = useRouter();
    const store = useReadingsStore();
    return { router, store };
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
    chooseCards() {
      this.positions.forEach(() => {
        this.flipped.push(false)
        this.cards.push(this.getRandomCard())
      })
    },
    getRandomCard() {
      let card = Math.floor(Math.random() * 79);
      while (this.cards.indexOf(card) !== -1) {
        card = Math.floor(Math.random() * 79);
      }
      this.getCardImages(card)
      return card
    },
    getCardImages(card) {
      Db.getIndividualCard({card, deck: this.deck}).then((response) => {
        this.images[card] = response.card['image']
      })
    },
    layOutSpread() {
        let columns = [];
        let rows = [];
        let lastColumn = 'a';
        let lastRow = '1';
        const possibleColumns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        const possibleRows = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        let gridColumns = [];
        let gridRows = [];
        let lastColumnIndex = 0
        let lastRowIndex = 0

        this.positions.forEach((position) => {
            columns.push(position.column)
            rows.push(position.row)
        })
        
        columns.forEach((column) => {
            lastColumnIndex = possibleColumns.indexOf(lastColumn);

            possibleColumns.forEach((possibleColumn, index) => {
                if (column === possibleColumn && lastColumnIndex < index) {
                    lastColumn = column
                    lastColumnIndex = index
                }
            })
        })
        
        rows.forEach((row) => {
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
    gap: 20px;
    display: grid;
    padding: 0 1em;
    margin-top: auto;
    margin-bottom: auto;
}
.single-card {
  padding: 0 2em;
}
.card {
  position: relative;
  text-align: center;
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
}/* entire container, keeps perspective */
.flip-container {
    perspective: 1000px;
  aspect-ratio: 2/3;
}
    /* flip the pane when hovered */
    .flip-container.flipped .flipper {
        transform: rotateY(180deg);
    }

/* flip speed goes here */
.flipper {
    transition: 1s;
    transform-style: preserve-3d;
    position: relative;
}

/* hide back of pane during swap */
.front, .back {
    backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.front img, .back img {
  width: 100%;
}

/* front pane, placed above back */
.front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateY(0deg);
}

/* back, initially hidden pane */
.back {
    transform: rotateY(180deg);
}
</style>
