<template>
  <div class="skeleton-container">
    <div class="skeleton-image shimmer"></div>
    <div class="skeleton-details">
      <div class="skeleton-title shimmer"></div>
      <div class="skeleton-rating-category shimmer"></div>
      <div class="skeleton-description shimmer"></div>
      <div class="skeleton-price shimmer"></div>
      <div class="skeleton-buttons shimmer"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.skeleton-container {
  display: flex;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  width: 1034px;
  height: 580px;
  max-width: 100%;
}

.skeleton-image {
  width: 301px;
  height: 301px;
  background-color: #e0e0e0;
  margin: 40px;
  border-radius: 10px;
}

.skeleton-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
}

.skeleton-title,
.skeleton-rating-category,
.skeleton-description,
.skeleton-price,
.skeleton-buttons {
  background-color: #e0e0e0;
  border-radius: 5px;
  margin-bottom: 20px;
}

.skeleton-title {
  width: 60%;
  height: 25px;
}

.skeleton-rating-category {
  width: 40%;
  height: 20px;
}

.skeleton-description {
  flex-grow: 1;
  height: 100px;
}

.skeleton-price {
  width: 30%;
  height: 30px;
}

.skeleton-buttons {
  width: 100%;
  height: 50px;
}

/* Shimmer effect */
.shimmer {
  background: linear-gradient(to right, #e0e0e0 0%, #f0f0f0 50%, #e0e0e0 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style>
