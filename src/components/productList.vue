<template>
  <div class="container mt-4">
    <h1 class="mb-4 text-center">Prodotti</h1>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="product in products" :key="product.id">
        <div class="card h-100">
          <img class="card-img-top" :src="product.image" :alt="product.name" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="text-primary fw-bold">{{ product.price }} €</p>
            <button class="btn btn-success mt-auto">
              Aggiungi al carrello
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Maglietta",
          description: "Maglietta cotone",
          price: 19.99,
          image: "https://via.placeholder.com/300x200",
        },
        {
          id: 2,
          name: "Smartphone",
          description: "Ultimo modello smartphone",
          price: 299.99,
          image: "https://via.placeholder.com/300x200",
        },
        {
          id: 3,
          name: "Romanzo",
          description: "Libro bestseller",
          price: 9.99,
          image: "https://via.placeholder.com/300x200",
        },
        {
          id: 4,
          name: "Felpa",
          description: "Felpa con cappuccio",
          price: 39.99,
          image: "https://via.placeholder.com/300x200",
        },
        {
          id: 5,
          name: "Cuffie",
          description: "Cuffie bluetooth",
          price: 59.99,
          image: "https://via.placeholder.com/300x200",
        },
        {
          id: 6,
          name: "Zaino",
          description: "Zaino da viaggio",
          price: 79.99,
          image: "https://via.placeholder.com/300x200",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
</style>
