<template>
  <div
    class="card position-relative p-3 shadow-sm"
    style="width: 20rem; border-radius: 1rem"
  >
    <!-- Badge NEW e sconto -->
    <div
      class="position-absolute top-0 start-0 m-2 z-2"
      v-if="product.isNew || product.discount"
    >
      <span v-if="product.isNew" class="badge bg-success mb-1">New</span><br />
      <span v-if="product.discount" class="badge bg-danger"
        >-{{ product.discount }}%</span
      >
    </div>

    <!-- Icona cuore -->
    <button
      class="btn btn-light p-1 position-absolute top-0 end-0 m-2 z-2"
      aria-label="Salva preferito"
      @click="$emit('toggle-favorite', product.id)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="currentColor"
        class="bi bi-heart"
        viewBox="0 0 16 16"
      >
        <path
          d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385C3.21 10.119 6.623 12.584 8 13.5c1.377-.916 4.79-3.381 6.286-6.062.955-1.885.837-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143a3.12 3.12 0 0 1 .176.193 3.123 3.123 0 0 1 .175-.193C12.721-3.042 23.333 4.867 8 15z"
        />
      </svg>
    </button>

    <img
      :src="product.image"
      class="card-img-top mx-auto d-block"
      style="width: 90%; margin-top: 20px"
      :alt="product.name"
    />
    <div class="card-body text-center">
      <h6 class="card-title mb-1">{{ product.name }}</h6>
      <div class="mb-2">
        <span class="fw-bold text-primary" style="font-size: 1.2em"
          >€{{ product.price.toFixed(2) }}</span
        >
        <span
          v-if="product.oldPrice"
          class="text-muted text-decoration-line-through"
          style="font-size: 1em"
        >
          €{{ product.oldPrice.toFixed(2) }}
        </span>
      </div>
      <button class="btn btn-success" @click="$emit('add-to-cart', product.id)">
        Aggiungi al carrello
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.z-2 {
  z-index: 2;
}
</style>
