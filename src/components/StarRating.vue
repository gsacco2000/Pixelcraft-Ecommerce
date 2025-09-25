<template>
  <div class="star-rating" style="display: inline-flex; gap: 4px">
    <svg
      v-for="star in stars"
      :key="star.index"
      @click="selectRating(star.value)"
      :class="{ 'cursor-pointer': !readonly }"
      :fill="star.value <= currentRating ? activeColor : inactiveColor"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="none"
      style="user-select: none"
      :aria-label="`Rated ${star.value} stars`"
      role="img"
    >
      <path
        d="M12 .587l3.668 7.571L24 9.423l-6 5.882 1.417 8.262L12 18.897l-7.417 4.67L6 15.305 0 9.423l8.332-1.265z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    activeColor: {
      type: String,
      default: "#ffdd00",
    },
    inactiveColor: {
      type: String,
      default: "#ddd",
    },
    maxStars: {
      type: Number,
      default: 5,
    },
    increment: {
      type: Number,
      default: 1,
    },
  },
  emits: ["update:rating"],
  data() {
    return {
      currentRating: this.rating,
    };
  },
  computed: {
    stars() {
      let stars = [];
      let steps = 1 / this.increment;
      for (let i = 1; i <= this.maxStars * steps; i++) {
        stars.push({
          index: i,
          value: i * this.increment,
        });
      }
      return stars;
    },
  },
  watch: {
    rating(newVal) {
      this.currentRating = newVal;
    },
  },
  methods: {
    selectRating(value) {
      if (this.readonly) return;
      this.currentRating = value;
      this.$emit("update:rating", value);
    },
  },
};
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}

path {
  color: var(--skin-color);
}
</style>
