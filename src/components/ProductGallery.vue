<template>
  <div>
    <img
      :src="selectedImage"
      alt="Immagine prodotto"
      class="img-fluid mb-3"
      style="
        max-width: 400px;
        max-height: 400px;
        object-fit: contain;
        border-radius: 8px;
      "
    />
    <div class="d-flex gap-2">
      <img
        v-for="(src, index) in images"
        :key="index"
        :src="src"
        alt="Anteprima prodotto"
        class="img-thumbnail"
        :class="{ 'border-primary': selectedImage === src }"
        style="width: 80px; height: 80px; object-fit: cover; cursor: pointer"
        @click="selectedImage = src"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedImage: this.images.length ? this.images[0] : null,
    };
  },
};
</script>

<style scoped>
.border-primary {
  border: 2px solid #0d6efd !important;
}
</style>
