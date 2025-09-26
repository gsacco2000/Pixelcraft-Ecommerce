<template>
  <div :class="['style-switcher', { open: isOpen }]">
    <!-- Ingranaggio -->
    <div
      class="icon-wrapper s-icon switcher-icon"
      @click="toggleSwitcher"
      title="Impostazioni"
    >
      <div class="circle">
        <i class="fas fa-cog"></i>
      </div>
    </div>
    <h4>Scegli il tuo colore</h4>
    <div class="colors">
      <span
        v-for="color in colors"
        :key="color.class"
        :class="color.class"
        @click="setActiveColor(color.class)"
      >
        {{ color.name }}
      </span>
    </div>
    <!-- Switch dark/light -->
    <div
      class="icon-wrapper s-icon day-night-icon"
      @click="toggleDarkMode"
      :title="darkMode ? 'Tema chiaro' : 'Tema scuro'"
    >
      <div class="circle">
        <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StyleSwitcher",
  data() {
    return {
      isOpen: false,
      darkMode: false,
      activeColor: "blue",
      colors: [
        { class: "color-1", name: "Giulia" },
        { class: "color-2", name: "Jessica" },
        { class: "color-3", name: "Daisy" },
        { class: "color-4", name: "Pietro" },
      ],
      colorMap: {
        "color-1": "blue",
        "color-2": "beige",
        "color-3": "lilac",
        "color-4": "green",
      },
    };
  },
  mounted() {
    const savedColor = localStorage.getItem("themeColor") || "blue";
    const savedDark = localStorage.getItem("themeMode") === "dark";
    this.setActiveColor(savedColor);
    this.darkMode = savedDark;
    this.applyTheme();
    this.applyDarkMode();
    this.updateLogo();
  },
  methods: {
    toggleSwitcher() {
      this.isOpen = !this.isOpen;
    },
    setActiveColor(colorClass) {
      this.activeColor = this.colorMap[colorClass] || "blue";
      this.applyTheme();
      localStorage.setItem("themeColor", this.activeColor);
      this.isOpen = false;
      this.updateLogo();
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      this.applyDarkMode();
      localStorage.setItem("themeMode", this.darkMode ? "dark" : "light");
      this.updateLogo();
    },
    applyTheme() {
      const body = document.body;
      body.classList.remove("blue", "beige", "lilac", "green");
      body.classList.add(this.activeColor);
    },
    applyDarkMode() {
      document.body.classList.toggle("dark", this.darkMode);
    },
    updateLogo() {
      const logos = document.querySelectorAll("a.navbar-brand .logo");
      logos.forEach((l) => l.classList.remove("active"));
      const modeClass = this.darkMode ? "logo-dark" : "logo-light";
      logos.forEach((l) => {
        if (
          l.classList.contains(modeClass) &&
          l.classList.contains(`logo-${this.activeColor}`)
        ) {
          l.classList.add("active");
        }
      });
    },
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");

.style-switcher {
  position: fixed;
  right: 0;
  top: 220px;
  padding: 15px;
  width: 210px;
  background: var(--background, #fff);
  z-index: 101;
  border-radius: 5px;
  transition: all 0.3s ease;
  transform: translateX(100%);
  box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.16);
}
.style-switcher.open {
  transform: translateX(-25px);
}
@media (max-width: 767px) {
  .style-switcher {
    top: 320px;
  }
}

/* wrapper icone */
.s-icon {
  position: absolute;
  right: 100%;
  margin-right: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.14);
  border-radius: 50%;
  background: white;
  width: 44px;
  height: 44px;
  transition: background 0.3s;
  z-index: 102;
}

.s-icon:hover {
  background: #f0f0f0;
}

.switcher-icon {
  top: 0;
}
.day-night-icon {
  top: 85px; /* distanza verticale */
}

.circle {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: flex-start; /* allinea a sinistra del cerchio */
  padding-left: 7px; /* sposta icona verso destra */
  border-radius: 50%;
  background: white;
  box-shadow: 0 3px 14px rgba(0, 0, 0, 0.12);
}

.s-icon i {
  font-size: 18px;
  color: #101820;
  margin: 0;
  line-height: 1;
  display: block;
}

.style-switcher h4 {
  margin: 0 0 10px;
  color: var(--text-black-900, #222);
  font-family: "Bree Serif", serif;
  font-size: 16px;
  font-weight: 600;
}

.colors {
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.colors span {
  height: 30px;
  width: 100px;
  border-radius: 50px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 13px;
  padding-top: 5px;
  font-family: "Bree Serif", serif;
  color: black;
  cursor: pointer;
}

.colors span:hover {
  transition: all 0.3s ease;
  transform: scale(1.05);
}

.color-1 {
  background: #0085cc;
}
.color-2 {
  background: #d5a490;
}
.color-3 {
  background: #c99be2;
}
.color-4 {
  background: #90b791;
}
</style>
