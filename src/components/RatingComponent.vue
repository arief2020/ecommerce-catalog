<template>
  <div class="rating">
    <span class="rating-value">{{ rating }}/5</span>
    <div class="stars">
      <div
        v-for="(star, index) in totalStars"
        :key="index"
        class="star"
      >
        <!-- Full blue if the star is fully filled -->
        <div
          v-if="index < filledStars"
          class="full-star"
        ></div>

        <!-- Partially filled star for the fractional part -->
        <div
          v-else-if="index === filledStars && fractionalPart > 0"
          class="partial-star"
          :style="{ width: `${fractionalPart * 100}%` }"
        ></div>

        <!-- Empty star for the remaining stars -->
        <div
          v-else
          class="empty-star"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Props: rating value passed from parent
const props = defineProps({
  ratingValue: {
    type: Number,
    required: true,
    default: 0, // Default rating value
  },
});

// Total number of stars
const totalStars = 5;

// Filled stars count (only the integer part of the rating)
const filledStars = computed(() => Math.floor(props.ratingValue));

// Fractional part of the rating for partial star fill
const fractionalPart = computed(() => props.ratingValue - filledStars.value);

// Format the rating to one decimal place for display
const rating = computed(() => props.ratingValue.toFixed(1));
</script>

<style scoped>
.rating {
  display: flex;
  align-items: center;
  gap: 10px;
}

.rating-value {
  font-size: 1rem;
  margin-right: 5px;
  color: #4a4a4a;
}

.stars {
  display: flex;
  gap: 5px;
}

.star {
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #1f3a93; /* Dark blue for the border */
  overflow: hidden;
}

.full-star {
  width: 100%;
  height: 100%;
  background-color: #1f3a93; /* Dark blue for filled stars */
}

.partial-star {
  height: 100%;
  background-color: #1f3a93; /* Dark blue for partially filled stars */
  position: absolute;
  left: 0;
  top: 0;
}

.empty-star {
  width: 100%;
  height: 100%;
  background-color: white; /* White for empty stars */
}
</style>
