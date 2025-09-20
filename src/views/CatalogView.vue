<template>
  <div class="Catalog">
    <h1>Pagina catalogo</h1>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CatalogView",
});
</script>

<script setup>
import { onMounted } from "vue";
onMounted(() => {
  //prendi i dati da api

  console.log("MOUNTED");
});
</script>
