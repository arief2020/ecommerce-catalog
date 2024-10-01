<template>
  <div class="product-no-category">
    <img src="../assets/sad-face.svg" alt="">
    <div class="product-unavailable-info">
      <p>This product is unavailable to show</p>
      <button @click="handleClick" class="next-product-no-available">Next product</button>
    </div>
  </div>
</template>

<script setup>

const emit = defineEmits(['increase-count']);

const handleClick = () => {
  emit('increase-count');
};



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

