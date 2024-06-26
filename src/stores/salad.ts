import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getToppings } from '../services/saladService'
import type { Topping } from '../models/Topping.model'

export const useSaladStore = defineStore('salad', () => {
  const toppings = ref<Topping[]>([])
  const chosenToppings = ref<Topping[]>([])
  const dressing = ref('')
  const base = ref('')
  const loading = ref(false)

  function setToppings(someToppings: Topping[]) {
    toppings.value = someToppings
  }

  function chooseToppings(aTopping: Topping) {
    chosenToppings.value.push(aTopping)
  }

  function setDressing(aDressing: string) {
    dressing.value = aDressing
  }

  function setBase(aBase: string) {
    base.value = aBase
  }

  async function loadToppings() {
    loading.value = true
    const someToppings = await getToppings()
    loading.value = false
    setToppings(someToppings)
  }

  return {
    toppings,
    chosenToppings,
    dressing,
    base,
    loading,
    setToppings,
    chooseToppings,
    setDressing,
    setBase,
    loadToppings
  }
})
