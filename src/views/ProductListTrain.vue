<template>
  <div class="hello">
	<br/>
    <h1>{{ msg }}</h1>
    <h1>Made By Getters</h1>
    <div v-for="product in products" :key="product.id">
      {{ product.id }} ===== {{ product.title }} {{ product.address }}
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "@/stores/products";
import { ref, onMounted, computed } from "vue";
// import { useUserStore } from "../stores/useUserStore.js";
const store = useProductStore();
const msg = ref("Welcome to my Pinia Product Store");

const products = computed(() => {
  return store.products;
});
onMounted(() => {
  store.fetchProducts();
});
</script>