<template>
  <div class="hello">
	<br/>
    <h1>{{ msg }}</h1>
    <h1>Ini Store: {{ index }}</h1>
	<button @click="increment()">+</button>
	<button @click="decrement()">-</button>
	<div>
		{{product.id}} 
		<p>{{product.title}}</p>
		<p>{{product.description}}</p>
		<p>{{product.price}}</p>
		<p>{{product.category}}</p>
		 <img :src="product.image" :alt="product.title" height="500px">
	</div>
  </div>
</template>

<script setup>
import { useProductDetailStore } from "@/stores/product";
import { ref, onMounted, computed } from "vue";

const store = useProductDetailStore();
const msg = ref("Welcome to my Pinia Product Store");

const index = computed(() => {
  return store.index;
});

const increment = () => {
  store.incrementIndex();
};
const decrement = () => {
  store.decrementIndex();
};

const product = computed(() => {
  return store.product;
});
onMounted(() => {
  store.fetchProduct();
});
</script>