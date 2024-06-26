import { ref } from 'vue'
import { defineStore } from 'pinia'
import { Status } from '../models/Status.enum'

export const useCoreStore = defineStore('core', () => {
  const name = ref('')
  const orderId = ref(0)
  const status = ref<Status>(Status.New)

  function setName(newName: string) {
    name.value = newName
  }

  function setOrderId(newId: number) {
    orderId.value = newId
  }

  function setStatus(newStatus: Status) {
    status.value = newStatus
  }

  return { name, orderId, status, setName, setOrderId, setStatus }
})
