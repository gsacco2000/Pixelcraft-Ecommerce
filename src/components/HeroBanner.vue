<template>
  <div
    class="hero-container rounded"
    :style="{
      backgroundImage: `url('${backgroundImage}')`,
      '--hero-height': height,
    }"
  >
    <div class="overlay-box p-4">
      <h1 class="text-white fw-bold mb-3">{{ title }}</h1>
      <div class="text-white mb-0" v-html="description"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroBanner",
  props: {
    backgroundImage: String,
    title: String,
    description: String,
    height: {
      type: String,
      default: "600px",
    },
  },
};
</script>

<style scoped>
.hero-container {
  height: var(--hero-height);
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding-left: 3rem;
}

.overlay-box {
  max-width: 500px;
  background-color: rgba(30, 30, 30, 0.7);
  backdrop-filter: blur(8px);
  border-radius: 15px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
