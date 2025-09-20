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
          <router-link to="/" aria-label="Vai alla homepage" class="active">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/about" aria-label="Vai alla pagina about">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/portfolio" aria-label="Vai alla pagina portfolio">
            Portfolio
          </router-link>
        </li>
        <li>
          <router-link to="/journal" aria-label="Vai alla pagina journal">
            Journal
          </router-link>
        </li>
        <li>
          <router-link to="/shop" aria-label="Vai alla pagina shop">
            Shop
          </router-link>
        </li>
        <li>
          <router-link to="/contatti" aria-label="Vai alla pagina contatti">
            Contatti
          </router-link>
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
nav {
  background: var(--background);
  padding: var(--padding-medium);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

nav img {
  max-height: 30px;
}

.logo-dark {
  display: none;
}

body.dark .logo-light {
  display: none;
}

body.dark .logo-dark {
  display: inline;
}

nav ul.nav-links {
  display: none;
  flex-direction: column;
  list-style: none;
  position: absolute;
  top: 60px;
  right: 0;
  left: 0;
  background: var(--background);
  width: 100%;
  padding: 1rem 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  align-items: center;
  justify-content: center;
  text-align: center;
}

nav ul.nav-links.active {
  display: flex;
}

nav ul.nav-links li {
  margin: 0.5rem 0;
  width: 100%;
}

nav ul.nav-links li a {
  color: var(--text);
  text-decoration: none;
  font-weight: bolder;
  font-size: var(--font-p);
  padding: 5px 0;
  display: block;
  position: relative;
  transition: color 0.3s ease;
}

nav ul.nav-links li a:hover,
nav ul.nav-links li a:focus {
  color: var(--nav-bg);
}

nav ul.nav-links li a::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 50%;
  width: 40%;
  height: 3px;
  background-color: var(--nav-bg);
  transition: width 0.3s ease;
  transform: translateX(-50%);
  width: 0;
}

nav ul.nav-links li a:hover::after,
nav ul.nav-links li a:focus::after,
nav ul.nav-links li a.active::after {
  width: 40%;
}

.burger-menu,
.close-menu {
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--text);
  display: block;
  background: none;
  border: none;
  transition: opacity 0.3s ease;
}

nav ul.nav-links.active ~ .burger-menu {
  display: none !important;
  opacity: 0;
}

.close-menu {
  display: none;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 1100;
}

nav ul.nav-links.active ~ .close-menu {
  display: block;
}

@media (min-width: 768px) {
  nav ul.nav-links {
    display: flex !important;
    position: static;
    flex-direction: row;
    gap: 1rem;
    width: auto;
    box-shadow: none;
    padding: 0;
    justify-content: flex-end;
    list-style: none;
  }

  .burger-menu,
  .close-menu {
    display: none !important;
  }

  nav ul.nav-links li a {
    position: relative;
    padding: 5px 0;
  }

  nav ul.nav-links li a::after {
    left: 0;
    width: 0;
    transform: none;
    transition: width 0.3s ease;
  }

  nav ul.nav-links li a:hover::after,
  nav ul.nav-links li a:focus::after,
  nav ul.nav-links li a.active::after {
    width: 100%;
  }

  nav ul.nav-links li {
    margin: 0;
  }
}
</style>
