document.addEventListener("DOMContentLoaded", () => {
  // Elementi principali
  const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
  const styleSwitcher = document.querySelector(".style-switcher");
  const colorButtons = document.querySelectorAll(".colors span");
  const dayNight = document.querySelector(".day-night");

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

  // Inizializzazione tema e logo
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
      const mapClass = {
        "color-1": "blue",
        "color-2": "beige",
        "color-3": "lilac",
        "color-4": "green",
      };
      const colorClass = mapClass[btn.classList[0]];
      applyTheme(colorClass);
      localStorage.setItem("themeColor", colorClass);
      styleSwitcher.classList.remove("open");
      updateLogo(colorClass, document.body.classList.contains("dark"));
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
    const currentColor = localStorage.getItem("themeColor") || "blue";
    updateLogo(currentColor, isDark);
  });
});
