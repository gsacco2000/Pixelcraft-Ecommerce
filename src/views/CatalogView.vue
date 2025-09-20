<template>
  <div>
    <h1>I nostri prodotti</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from "../components/productList.vue";

export default {
  components: {
    ProductList,
  },
};
</script>
