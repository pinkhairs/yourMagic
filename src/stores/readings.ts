import { toRaw } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useReadingsStore = defineStore('readings', {
  state: () => ({
    readings: useStorage('readings', [] as any)
   }),
  getters: {
  },
  actions: {
    getArray(key: string) {
      return JSON.parse(localStorage.getItem(key) as string)
    },
    setArray(key: string, value: any) {
      localStorage.setItem(key, JSON.stringify(value))
    },
    addReading(question: any) {
      const readings: any = this.getArray('readings')
      readings.push(question)
      this.setArray('readings', readings)
    },
    addCardsToReading(reading: any, cards: any) {
      const readings: any = this.getArray('readings')
      readings.filter((value: any) => {
        value.id === reading
      })[0].cards = cards
      this.setArray('readings', readings)
    }
  }
})