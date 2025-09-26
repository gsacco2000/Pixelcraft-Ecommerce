<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <AppNavBar />
    <main class="flex-grow-1">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppNavBar from "@/components/AppNavBar.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppNavBar,
    AppFooter,
  },
};
</script>

<style scoped>
#app {
  /* min-vh-100 e flex già in classe, ma se vuoi puoi aggiungerle anche qui: */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex-grow: 1; /* prende tutto lo spazio verticale possibile per spingere footer in basso */
}
</style>
