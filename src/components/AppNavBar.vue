<template>
  <header class="fullwidth">
    <a
      class="icon_nav"
      href="https://www.facebook.com/?locale=it_IT"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="vai al sito di facebook"
    >
      <i class="fab fa-facebook"></i>
    </a>
    <a
      class="icon_nav"
      href="https://www.instagram.com/"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="vai al sito di instagram"
    >
      <i class="fab fa-instagram"></i>
    </a>
    <a
      class="icon_nav"
      href="https://www.behance.net/gallery/7755109/Be?locale=it_IT"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="vai al sito di behance"
    >
      <i class="fab fa-behance"></i>
    </a>

    <nav class="navbar">
      <router-link to="/" aria-label="Vai alla homepage" class="logo-link">
        <img src="/pixelcraft_light.png" alt="Logo" class="logo logo-light" />
        <img
          src="/pixelcraft_dark.png"
          alt="Logo in dark mode"
          class="logo logo-dark"
        />
      </router-link>

      <ul
        class="nav-links"
        aria-label="Menu di navigazione"
        :class="{ active: menuOpen }"
      >
        <li>
          <router-link
            to="/"
            aria-label="Vai alla homepage"
            exact-active-class="active"
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            to="/about"
            aria-label="Vai alla pagina about"
            active-class="active"
            >About</router-link
          >
        </li>
        <li>
          <router-link
            to="/portfolio"
            aria-label="Vai alla pagina portfolio"
            active-class="active"
            >Portfolio</router-link
          >
        </li>
        <li>
          <router-link
            to="/journal"
            aria-label="Vai alla pagina journal"
            active-class="active"
            >Journal</router-link
          >
        </li>
        <li>
          <router-link
            to="/shop"
            aria-label="Vai alla pagina shop"
            active-class="active"
            >Shop</router-link
          >
        </li>
        <li>
          <router-link
            to="/contatti"
            aria-label="Vai alla pagina contatti"
            active-class="active"
            >Contatti</router-link
          >
        </li>
      </ul>

      <button
        class="burger-menu"
        aria-label="Apri il menu"
        @click="toggleMenu"
        v-if="!menuOpen"
      >
        <i class="fas fa-bars"></i>
      </button>

      <button
        class="close-menu"
        aria-label="Chiudi il menu"
        @click="toggleMenu"
        v-if="menuOpen"
      >
        <i class="fas fa-times"></i>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppNavBar",
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* rimane uguale il css così com’è */
</style>
