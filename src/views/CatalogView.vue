<template>
  <div>
    <HeroCatalog />
    <h1>I nostri prodotti</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from "../components/productList.vue";
import HeroCatalog from "../components/HeroCatalog.vue";

export default {
  components: {
    ProductList,
    HeroCatalog,
  },
};
</script>
