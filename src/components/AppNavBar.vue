<template>
  <header>
    <!-- Top bar con social icons -->
    <div class="topbar d-flex justify-content-end align-items-center px-3 py-1">
      <a
        class="icon_nav me-3"
        href="https://www.facebook.com/?locale=it_IT"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="vai al sito di facebook"
        title="Facebook"
      >
        <i class="fab fa-facebook"></i>
      </a>
      <a
        class="icon_nav me-3"
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="vai al sito di instagram"
        title="Instagram"
      >
        <i class="fab fa-instagram"></i>
      </a>
      <a
        class="icon_nav"
        href="https://www.behance.net/gallery/7755109/Be?locale=it_IT"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="vai al sito di behance"
        title="Behance"
      >
        <i class="fab fa-behance"></i>
      </a>
    </div>
    <nav class="navbar navbar-expand-md px-3">
      <router-link to="/" class="navbar-brand" aria-label="Homepage">
        <img
          src="/pixelcraft_light.png"
          alt="Logo Chiaro"
          class="logo logo-light logo-blue"
        />
        <img
          src="/pixelcraft_dark.png"
          alt="Logo Scuro"
          class="logo logo-dark logo-blue"
        />
        <img
          src="img.logo.style/pixelcraft_dark_beige.png"
          alt="Logo Scuro Beige"
          class="logo logo-dark logo-beige"
        />
        <img
          src="img.logo.style/pixelcraft_light_beige.png"
          alt="Logo Chiaro Beige"
          class="logo logo-light logo-beige"
        />
        <img
          src="img.logo.style/pixelcraft_dark_lilac.png"
          alt="Logo Scuro Lilla"
          class="logo logo-dark logo-lilac"
        />
        <img
          src="img.logo.style/pixelcraft_light_lilac.png"
          alt="Logo Chiaro Lilla"
          class="logo logo-light logo-lilac"
        />
        <img
          src="img.logo.style/pixelcraft_dark_green.png"
          alt="Logo Scuro Verde"
          class="logo logo-dark logo-green"
        />
        <img
          src="img.logo.style/pixelcraft_light_green.png"
          alt="Logo Chiaro Verde"
          class="logo logo-light logo-green"
        />
      </router-link>

      <button
        class="navbar-toggler hamburger hamburger--spin"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMenu"
        :class="{ 'is-active': menuOpen }"
      >
        <span class="hamburger-box"><span class="hamburger-inner"></span></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="mainNavbar"
        :class="{ show: menuOpen }"
        @click="closeMenuOnClick"
      >
        <ul class="navbar-nav ms-auto nav-links">
          <li class="nav-item">
            <router-link to="/" exact-active-class="active" class="nav-link"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" active-class="active" class="nav-link"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/portfolio" active-class="active" class="nav-link"
              >Portfolio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/journal" active-class="active" class="nav-link"
              >Journal</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/shop" active-class="active" class="nav-link"
              >Shop</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contatti" active-class="active" class="nav-link"
              >Contatti</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  mounted() {
    this.updateLogoFromStorage();
    window.addEventListener("themeChange", this.updateLogoFromStorage);
  },
  beforeUnmount() {
    window.removeEventListener("themeChange", this.updateLogoFromStorage);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenuOnClick(e) {
      if (e.target.classList.contains("nav-link") && window.innerWidth < 768) {
        this.menuOpen = false;
      }
    },
    updateLogoFromStorage() {
      const colorClass = localStorage.getItem("themeColor") || "blue";
      const isDark = localStorage.getItem("themeMode") === "dark";
      this.updateLogo(colorClass, isDark);
    },
    updateLogo(colorClass, isDark) {
      const logos = this.$el.querySelectorAll("a.navbar-brand .logo");
      logos.forEach((logo) => logo.classList.remove("active"));
      const modeClass = isDark ? "logo-dark" : "logo-light";
      logos.forEach((logo) => {
        if (
          logo.classList.contains(modeClass) &&
          logo.classList.contains(`logo-${colorClass}`)
        ) {
          logo.classList.add("active");
        }
      });
    },
  },
};
</script>

<style scoped>
.topbar {
  height: 30px;
  background-color: var(--skin-color); /* bootstrap light */
  color: var(--text);
  font-size: 1rem;
}

.icon_nav {
  color: #333;
  transition: color 0.3s;
}

.icon_nav:hover,
.icon_nav:focus {
  color: #007bff; /* bootstrap primary */
  text-decoration: none;
}
.logo {
  display: none;
  width: 4rem;
}

.logo.active {
  display: inline-block !important;
  width: 4rem !important;
}

/* Hamburger styles */
.navbar-toggler {
  width: 24px !important;
  height: 24px !important;
  margin-right: 16px !important;
  padding: 0 !important;
  border: none !important;
  background: transparent !important;
  box-shadow: none !important;
  cursor: pointer;
  position: relative;
  z-index: 10;
}

.hamburger-box {
  width: 24px !important;
  height: 24px !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  background-color: var(--skin-color) !important;
  height: 3px !important;
  border-radius: 3px !important;
  border: none !important;
  transition: all 0.3s !important;
}

.navbar-toggler.is-active .hamburger-inner {
  transform: rotate(45deg);
}

.navbar-toggler.is-active .hamburger-inner::before {
  transform: rotate(90deg);
  top: 0;
}

.navbar-toggler.is-active .hamburger-inner::after {
  opacity: 0;
  top: 0;
}
</style>
