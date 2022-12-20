import { defineStore } from 'pinia'

export const useReadingsStore = defineStore('readings', {
  state: () => ({
    readings: [] as any
   }),
  getters: {
  },
  actions: {
    addReading(question: any) {
      this.readings.push(question)
      console.log(this.readings)
    },
    addCardsToReading(reading: any, cards: any) {
      this.readings.filter((value: any) => {
        value.id === reading
      })[0].cards = cards
    }
  }
})