<script setup>
import { useSaladStore } from '@/stores/salad';
import { storeToRefs } from 'pinia';

const store = useSaladStore()
const { toppings, loading } = storeToRefs(store)
const { LoadToppings } = store

onMounted(() => {
    LoadToppings()
})

</script>

<template>
    <h1>Salad View</h1>
    <p v-if="loading">Loading...</p>
    <ul>
        <li v-for="topping in toppings" :key="topping.id">
            {{ topping.name }} ({{ topping.price }} €)
        </li>
    </ul>
</template>
