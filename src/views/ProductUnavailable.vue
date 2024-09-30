<template>
  <div class="product-no-category">
    <svg
      width="1028"
      height="439"
      viewBox="0 0 880 439"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M221.295 114.085C221.295 99.5795 226.49 87.1321 236.879 76.7429C247.268 66.3537 259.716 61.1591 274.222 61.1591C288.727 61.1591 301.175 66.3537 311.564 76.7429C321.953 87.1321 327.148 99.5795 327.148 114.085C327.148 128.591 321.953 141.038 311.564 151.428C301.175 161.817 288.727 167.011 274.222 167.011C264.616 167.011 255.795 164.561 247.759 159.661C239.722 154.956 233.253 148.585 228.352 140.548C223.648 132.707 221.295 123.886 221.295 114.085ZM556.494 114.085C556.494 99.5795 561.689 87.1321 572.078 76.7429C582.467 66.3537 594.915 61.1591 609.42 61.1591C623.926 61.1591 636.374 66.3537 646.763 76.7429C657.152 87.1321 662.347 99.5795 662.347 114.085C662.347 128.591 657.152 141.038 646.763 151.428C636.374 161.817 623.926 167.011 609.42 167.011C599.815 167.011 590.994 164.561 582.957 159.661C574.92 154.956 568.452 148.585 563.551 140.548C558.847 132.707 556.494 123.886 556.494 114.085Z"
        fill="black"
        fill-opacity="0.1"
      />
      <path
        d="M454.045 227.21C528.142 227.21 596.26 236.815 658.399 256.026C720.734 275.432 778.071 303.071 830.409 338.943V400.102C811.003 385.989 787.088 372.757 758.665 360.408C730.438 348.254 699.368 337.571 665.456 328.358C631.74 319.145 596.848 311.892 560.78 306.599C524.712 301.503 489.134 298.955 454.045 298.955C407.392 298.955 360.053 303.463 312.027 312.48C264.001 321.497 219.406 333.651 178.241 348.94C137.077 364.23 103.557 381.284 77.6818 400.102V338.943C130.02 303.071 187.259 275.432 249.398 256.026C311.733 236.815 379.949 227.21 454.045 227.21Z"
        fill="black"
        fill-opacity="0.1"
      />
      <path
        d="M133 38.5C235.4 53.7 299.333 28.5 318.5 14"
        stroke="black"
        stroke-opacity="0.1"
        stroke-width="25"
      />
      <path
        d="M739 38.3236C636.324 53.4142 572.218 28.3956 553 14"
        stroke="black"
        stroke-opacity="0.1"
        stroke-width="25"
      />
    </svg>
    <div class="product-unavailable-info">
      <p>This product is unavailable to show</p>
      <button @click="handleClick" class="next-product-no-available">Next product</button>
    </div>
  </div>
</template>

<script setup>
import { useFetch } from '@/composable/useFetch'
import { ref, watch } from 'vue'

// const availableProduct = ref(false)

const count = ref(1)
const { data, fetchData } = useFetch()

const bgColor = ref('bg-color-men')

const updateBackgroundColor = () => {
  if (data.value?.category === "women's clothing") {
    bgColor.value = 'bg-color-women'
  } else {
    bgColor.value = 'bg-color-men'
  }
}

// Fetch product and set initial background color
const loadProduct = async () => {
  await fetchData(`https://fakestoreapi.com/products/${count.value}`)
  updateBackgroundColor()
}

// Load the initial product
loadProduct()
const emit = defineEmits(['increase-count']);

// Function to emit the increase-count event
const handleClick = () => {
  emit('increase-count');
};

// Watch for changes in count to fetch new product and update background color
watch(count, loadProduct)


</script>

<style scoped>

/* Adding the SVG pattern to the blue background */
.container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: calc(65%);
  background-image: url('../assets/bg-pattern.svg');
  /* background-repeat:repeat; */
  background-size: cover;
  z-index: 1;
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
  z-index: 2; /* To make sure the product card stays on top of the pattern */
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
  z-index: 3; /* Z-index lebih tinggi dari SVG */
  text-align: center;
  top: 50%; /* Menempatkan di tengah secara vertikal */
  left: 50%; /* Menempatkan di tengah secara horizontal */
  transform: translate(-50%, -50%); /* Agar tepat di tengah */
  /* background-color: rgba(255, 255, 255, 0.8); Opsional: memberikan latar belakang dengan transparansi */
  padding: 20px; /* Memberikan padding agar tidak terlalu mepet */
  border-radius: 10px; /* Opsional: memberikan sedikit radius */
}

.product-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.product-image img {
  width: 301px;
  height: 383px;
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
  /* padding: 21px 125px; */
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

.next-product-no-available{
    /* background-color: black; */
    border: 1px solid #000000;
    width: 100%;
  color: #000000;
}
</style>

