<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCoreStore } from '../stores/core'
import { Status } from '@/models/Status.enum';
import { storeToRefs } from 'pinia';

const name = ref("")
const router = useRouter()
const store = useCoreStore()
const { orderId } = storeToRefs(store)
const { setName, setOrderId, setStatus } = store


function handleStartOrder() {
  if (!name.value) {
    return
  }
  setName(name.value)
  setOrderId(Math.floor(Math.random() * 1000000))
  setStatus(Status.New)

  router.push(`salad/${orderId.value}`)
}
</script>

<template>
  <h3>Add new transaction</h3>
  <form @submit.prevent="handleStartOrder">
    <div class="form-control">
      <label for="name">Name</label>
      <input v-model="name" type="text" placeholder="What is your name...">
    </div>
    <button type="submit" class="btn">Start order</button>
  </form>
</template>
