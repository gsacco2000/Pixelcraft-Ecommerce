<template>
  <div id="app">
    <AppNavBar />
    <router-view />
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
