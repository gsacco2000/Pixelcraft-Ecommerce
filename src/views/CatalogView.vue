<template>
  <div>
    <HeroCatalog />
    <h2>Le novità del mese di Settembre</h2>
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
