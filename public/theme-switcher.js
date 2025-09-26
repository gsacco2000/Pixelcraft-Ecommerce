document.addEventListener("DOMContentLoaded", () => {
  // Elementi principali
  const styleSwitcherToggle = document.querySelector(".styleSwitcher-toggle");
  const styleSwitcher = document.querySelector(".styleSwitcher");
  const colorButtons = document.querySelectorAll(".colors span");
  const dayNight = document.querySelector(".dayNight");

  // Funzioni di utilità
  function applyTheme(colorClass) {
    document.body.classList.remove("blue", "beige", "lilac", "green");
    document.body.classList.add(colorClass);
  }

  function applyDarkMode(isDark) {
    const icon = dayNight.querySelector("i");
    if (isDark) {
      document.body.classList.add("dark");
      icon.classList.replace("fa-moon", "fa-sun");
    } else {
      document.body.classList.remove("dark");
      icon.classList.replace("fa-sun", "fa-moon");
    }
  }

  function updateLogo(colorClass, isDark) {
    const logos = document.querySelectorAll("a.navbar-brand .logo");
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
  }

  // Inizializzazione
  const savedTheme = localStorage.getItem("themeColor") || "blue";
  const savedDarkMode = localStorage.getItem("themeMode") === "dark";

  applyTheme(savedTheme);
  applyDarkMode(savedDarkMode);
  updateLogo(savedTheme, savedDarkMode);

  // Eventi UI
  styleSwitcherToggle?.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
  });

  colorButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const map = {
        "color-1": "blue",
        "color-2": "beige",
        "color-3": "lilac",
        "color-4": "green",
      };
      const c = map[btn.classList[0]];
      applyTheme(c);
      localStorage.setItem("themeColor", c);
      styleSwitcher.classList.remove("open");
      updateLogo(c, document.body.classList.contains("dark"));
      // Emette evento globale
      window.dispatchEvent(new CustomEvent("themeChange"));
    });
  });

  dayNight?.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");
    const icon = dayNight.querySelector("i");
    if (isDark) {
      icon.classList.replace("fa-moon", "fa-sun");
      localStorage.setItem("themeMode", "dark");
    } else {
      icon.classList.replace("fa-sun", "fa-moon");
      localStorage.setItem("themeMode", "light");
    }
    const current = localStorage.getItem("themeColor") || "blue";
    updateLogo(current, isDark);
    // Emette evento globale
    window.dispatchEvent(new CustomEvent("themeChange"));
  });
});
