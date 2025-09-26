<template>
  <footer class="footer py-4">
    <div class="container">
      <div class="row align-items-center gy-3">
        <div class="col-12 col-md-4 text-md-start text-center mb-2 mb-md-0">
          <strong>Pixel Craft</strong>
          <p class="mb-0 small" style="color: white; margin-top: 0.5rem">
            P.IVA 12345678901
          </p>
        </div>
        <div class="col-12 col-md-4 text-center mb-2 mb-md-0">
          <p class="mb-0" style="font-size: 0.98rem; color: white">
            © 2025 Pixel Craft. Tutti i diritti riservati.
          </p>
        </div>
        <div class="col-12 col-md-4 text-md-end text-center">
          <div class="footer-social d-inline-block mb-2 mb-md-0">
            <a
              href="https://web.telegram.org/a/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Contattaci su Telegram"
            >
              <i class="fab fa-telegram"></i>
            </a>
            <a
              href="https://www.whatsapp.com/?lang=it_IT"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Scrivici su WhatsApp"
            >
              <i class="fab fa-whatsapp"></i>
            </a>
          </div>
          <p class="mb-0 mt-2 mt-md-1" style="font-size: 1rem">
            Supporto:
            <a href="mailto:info@pixelcraft.com" class="footer-support-link"
              >info@pixelcraft.com</a
            >
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  background-color: #151515;
  color: var(--skin-color);
  letter-spacing: 0;
}

.footer strong {
  font-size: 1.4rem;
  font-weight: 700;
}

.footer-social i {
  margin: 0 0.5rem;
  font-size: 1.3rem;
  color: var(--skin-color);
  transition: color 0.3s;
  vertical-align: middle;
}

.footer-support-link {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: font-style 0.3s;
}
.footer-support-link:hover {
  font-style: italic;
}
</style>
