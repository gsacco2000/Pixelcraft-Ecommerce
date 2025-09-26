<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <AppNavBar />

    <!-- Inserisci lo style switcher come componente globale -->
    <StyleSwitcher />

    <main class="flex-grow-1">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppNavBar from "@/components/AppNavBar.vue";
import AppFooter from "@/components/AppFooter.vue";
import StyleSwitcher from "@/components/StyleSwitcher.vue";

export default {
  components: {
    AppNavBar,
    AppFooter,
    StyleSwitcher, // registra il componente qui
  },
};
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  flex-grow: 1;
}
</style>
