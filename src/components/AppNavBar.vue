<template>
  <header>
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
        aria-controls="mainNavbar"
        :aria-expanded="menuOpen.toString()"
        aria-label="Toggle navigation"
        @click="toggleMenu"
        :class="{ 'is-active': menuOpen }"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="mainNavbar"
        :class="{ show: menuOpen }"
      >
        <ul class="navbar-nav ms-auto nav-links">
          <li class="nav-item">
            <router-link
              to="/"
              exact-active-class="active"
              class="nav-link"
              @click="closeMenu"
            >
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              active-class="active"
              class="nav-link"
              @click="closeMenu"
            >
              About
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/portfolio"
              active-class="active"
              class="nav-link"
              @click="closeMenu"
            >
              Portfolio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/journal"
              active-class="active"
              class="nav-link"
              @click="closeMenu"
            >
              Journal
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/shop"
              active-class="active"
              class="nav-link"
              @click="closeMenu"
            >
              Shop
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/contatti"
              active-class="active"
              class="nav-link"
              @click="closeMenu"
            >
              Contatti
            </router-link>
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
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    window.removeEventListener("themeChange", this.updateLogoFromStorage);
    document.removeEventListener("click", this.handleClickOutside);
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    handleClickOutside(event) {
      const navbar = this.$el.querySelector(".navbar");
      if (!navbar.contains(event.target)) {
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
  background-color: var(--skin-color);
  color: var(--text);
  font-size: 1rem;
}

.icon_nav {
  color: #333;
  transition: color 0.3s;
}

.logo {
  display: none;
  width: 4rem;
}

.logo.active {
  display: inline-block !important;
  width: 4rem !important;
}

@media (max-width: 767px) {
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--background);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transition: all 0.35s ease;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    font-weight: bold;
  }

  .navbar-collapse.show {
    max-height: 500px;
    opacity: 1;
    visibility: visible;
  }

  .navbar-nav {
    padding: 1rem 0;
    flex-direction: column;
  }

  .nav-item {
    text-align: center;
    width: 100%;
  }

  .nav-link {
    padding: 0.75rem 1rem !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: block;
    color: var(--text) !important;
  }

  .nav-link:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .nav-item:last-child .nav-link {
    border-bottom: none;
  }
}

@media (min-width: 768px) {
  .navbar-collapse {
    display: flex !important;
    max-height: none !important;
    position: static !important;
    box-shadow: none !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .nav-link {
    color: var(--text) !important;
    font-weight: bold;
  }
}

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
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -1.5px;
  position: absolute;
  width: 24px;
  height: 3px;
  background-color: var(--skin-color, #333) !important;
  border-radius: 3px !important;
  transition: all 0.3s ease !important;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
  position: absolute;
  width: 24px;
  height: 3px;
  background-color: var(--skin-color, #333) !important;
  border-radius: 3px !important;
  transition: all 0.3s ease !important;
}

.hamburger-inner::before {
  top: -8px;
}

.hamburger-inner::after {
  bottom: -8px;
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
  bottom: 0;
}

nav ul.nav-links li a {
  position: relative;
}

nav ul.nav-links li a::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 50%;
  width: 0;
  height: 3px;
  background-color: var(--skin-color);
  transition: width 0.3s ease;
  transform: translateX(-50%);
}

nav ul.nav-links li a:hover::after,
nav ul.nav-links li a:focus::after,
nav ul.nav-links li a.active::after {
  width: 40%;
}

@media (max-width: 767px) {
  nav ul.nav-links li a::after {
    bottom: 5px;
    height: 3px;
  }

  nav ul.nav-links li a:hover::after,
  nav ul.nav-links li a:focus::after,
  nav ul.nav-links li a.active::after {
    width: 30%;
  }
}

@media (min-width: 768px) {
  .navbar-collapse {
    display: flex !important;
    max-height: none !important;
    position: static !important;
    box-shadow: none !important;
    opacity: 1 !important;
    visibility: visible !important;
    overflow: visible !important;
  }
}
</style>
