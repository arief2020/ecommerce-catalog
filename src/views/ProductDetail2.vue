<template>
  <div :class="[bgColor, { 'with-pattern': showPattern }]" class="container">
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
          <button @click="nextProduct" class="next-product">Next product</button>
        </div>
      </div>
      <div v-if="!data && loading"><ProductLoading /></div>
      <p v-if="error">Error: {{ error }}</p>
    </div>
    <div v-else-if="!availableProduct && loading === false">
      <ProductUnavailable @increase-count="increaseCount"/>
    </div>
    <div v-else>
        <ProductLoading />
    </div>
  </div>
</template>

<script setup>
import RatingComponent from '@/components/RatingComponent.vue';
import { useFetch } from '@/composable/useFetch';
import { computed, ref, watch } from 'vue';
import ProductUnavailable from './ProductUnavailable.vue';
import ProductLoading from './ProductLoading.vue';

const availableProduct = ref(false);
// const loading = ref(true);
// const data = ref(false);
const count = ref(1);
// const { error, fetchData } = useFetch();
const { data, error, loading, fetchData } = useFetch();

const bgColor = ref('bg-color-men');

// Conditional background pattern
const showPattern = computed(() => {
  return data.value?.category === "women's clothing" || data.value?.category === "men's clothing";
});

const updateBackgroundColor = () => {
  if (data.value?.category === "women's clothing") {
    bgColor.value = 'bg-color-women';
  } else if (data.value?.category === "men's clothing") {
    bgColor.value = 'bg-color-men';
  } else {
    bgColor.value = 'bg-product-unavailable';
  }
};

const checkCategories = () => {
  if (data.value?.category === "women's clothing" || data.value?.category === "men's clothing") {
    availableProduct.value = true;
  } else {
    availableProduct.value = false;
  }
};

// Fetch product and set initial background color
const loadProduct = async () => {
  await fetchData(`https://fakestoreapi.com/products/${count.value}`);
  updateBackgroundColor();
  checkCategories();
};

// Load the initial product
loadProduct();

const nextProduct = () => {
  if (count.value >= 20) {
    count.value = 1;
  } else {
    count.value++;
  }
};

// Watch for changes in count to fetch new product and update background color
watch(count, loadProduct);

const buyNow = () => {
  console.log(`Product ${data.value?.title} purchased!`);
};

const increaseCount = () => {
  count.value += 1;
};
</script>

<style scoped>
.cropped-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: left;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container.with-pattern::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: calc(65%);
  background-image: url('../assets/bg-pattern.svg');
  background-size: cover;
  z-index: 1;
}

.bg-color-men {
  background: linear-gradient(to bottom, #e6f0fa 65%, white 35%);
}

.bg-color-women {
  background: linear-gradient(to bottom, #fde2ff 65%, white 35%);
}

.bg-product-unavailable {
  background: linear-gradient(to bottom, #d8d7d7 65%, white 35%);
}

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

.product-no-category {
  position: relative;
  display: flex;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  width: 1034px;
  height: 580px;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  z-index: 2;
}

.product-unavailable-info {
  position: absolute;
  z-index: 3;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
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

.stars {
  font-size: 1rem;
  color: #f6ad55;
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
