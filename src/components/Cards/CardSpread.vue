<template>
    <div class="grid" :style="'grid-template-columns: '+columns.join(' ')+'; grid-template-rows:'+rows.join(' ')">
        <div v-for="card in cards" :key="card.id" class="card"
        :style="'grid-column-start: column-'+card.column+'; grid-row-start: row-'+card.row">

        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
props: ['cards'],
data() {
    return {
        columns: [],
        rows: []
    }
},
methods: {
    layOutSpread() {
        let columns = [];
        let rows = [];
        let lastColumn = 'a';
        let lastRow = 1;
        const possibleColumns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
        const possibleRows = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        let gridColumns = [];
        let gridRows = [];
        let lastColumnIndex = 0
        let lastRowIndex = 0

        this.cards.forEach((card) => {
            columns.push(card.column)
            rows.push(card.row)
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

        this.columns = gridColumns
        this.rows = gridRows

        const numberOfColumns = possibleColumns.indexOf(lastColumn) + 1;
        const numberOfRows = possibleRows.indexOf(lastRow) + 1;
    }
},
mounted() {
    this.layOutSpread()
}
});
</script>
<style scoped>
.grid {
    gap: 3px;
    display: grid;
    width: 72px;
}
.card {
    background-color: rgba(255,255,255,.5);
    border-radius: 3px;
    text-align: center;
    aspect-ratio: 1/1.5;
}
</style>