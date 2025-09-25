<template>
  <div class="banner-image-container">
    <img src="/img.shop/banner.shop.png" alt="Banner" class="banner-image" />
  </div>
</template>

<style scoped>
.banner-image-container {
  width: 100vw;
  height: 100vh; /* altezza vista completa */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* contiene tutta l'immagine */
  display: block;
}

/* Nascondi su mobile */
@media (max-width: 767px) {
  .banner-image-container {
    display: none;
  }
}
</style>
