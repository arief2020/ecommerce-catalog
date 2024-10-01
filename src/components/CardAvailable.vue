<template>
	<div v-if="availableProduct && loading === false" class="product-card">
      <div class="product-image">
        <img :src="data?.image || 'https://via.placeholder.com/150'" alt="Product Image" />
      </div>
      <div class="product-details">
        <h2 class="product-title">{{ data?.title }}</h2>
        <div class="product-rating-category">
          <p class="category">{{ data?.category }}</p>
          <RatingComponent :ratingValue="data?.rating?.rate" />
        </div>

        <p class="description">
          {{ data?.description }}
        </p>
        <div class="price">${{ data?.price }}</div>
        <div class="buttons">
          <button @click="buyNow" class="buy-now">Buy now</button>
          <button @click="$emit('next-product')" class="next-product">Next product</button>
        </div>
      </div>
      <div v-if="!data && loading"><CardLoading /></div>
      <p v-if="error">Error: {{ error }}</p>
    </div>
</template>


<script setup>
import RatingComponent from './RatingComponent.vue';
import { ref } from 'vue';
import CardLoading from './CardLoading.vue';

const availableProduct = ref(true);

const props = defineProps({
  data: Object,
  loading: Boolean,
})

const buyNow = () => {
  console.log(`Product ${props.data.title} purchased!`);
};

</script>

<style scoped>

.product-card {
  display: flex;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  width: 1034px;
  height: 580px;
  max-width: 100%;
  z-index: 2;
}

.product-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.product-image img {
  width: 301px;
  height: auto;
  object-fit: cover;
}

.product-details {
  padding: 20px 40px;
  padding-left: 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.product-title {
  font-size: 1.8rem;
  color: #1a202c;
}

.product-rating-category {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #00000033;
}

.category {
  color: #718096;
  margin-bottom: 10px;
}

.rating span {
  font-size: 0.9rem;
  margin-right: 5px;
}

.description {
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 20px;
  flex-grow: 1;
  border-bottom: 2px solid #00000033;
}

.price {
  font-size: 1.7rem;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  gap: 20px;
  margin-top: auto;
}

button {
  flex-grow: 1;
  padding: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
}

.buy-now {
  background-color: #2b6cb0;
  color: white;
}

.next-product {
  background-color: #e2e8f0;
  color: #2b6cb0;
}
</style>


