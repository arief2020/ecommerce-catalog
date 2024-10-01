<template>
  <div :class="[bgColor, { 'with-pattern': showPattern }]" class="container">
    
    <CardAvailable v-if="availableProduct && loading === false" :data="data" :loading="loading"  @next-product="nextProduct" />
    
    <CardUnavailable @increase-count="nextProduct" v-else-if="!availableProduct && loading === false"/>
    
    <CardLoading v-else/>

  </div>
</template>

<script setup>
// import RatingComponent from '@/components/RatingComponent.vue';
import { useFetch } from '@/composable/useFetch';
import { computed, ref, watch } from 'vue';
// import ProductUnavailable from './ProductUnavailable.vue';
import CardAvailable from '@/components/CardAvailable.vue';
import CardLoading from '@/components/CardLoading.vue';
import CardUnavailable from '@/components/CardUnavailable.vue';

const availableProduct = ref(false);

const count = ref(1);
// const { data, error, loading, fetchData } = useFetch();
const { data, loading, fetchData } = useFetch();

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
// start test
const loadProduct = async () => {
  await fetchData(`https://fakestoreapi.com/products/${count.value}`);
  updateBackgroundColor();
  checkCategories();
};
//end test

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



</script>

<style scoped>
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

</style>
