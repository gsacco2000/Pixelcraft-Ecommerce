<template>
  <section class="hero-grid">
    <div class="hero-main">
      <div class="hero-image-wrapper">
        <img
          src="/img.shop/shop.hero_poster.jpeg"
          alt="Zip Hoodie"
          class="hero-image"
        />
        <div class="hero-caption blur-dark">
          <h2>Nuovi arrivi</h2>
          <h1>Scopri i nostri poster</h1>
          <button class="btn btn-outline-light mt-3">Vedi di più</button>
        </div>
      </div>
    </div>

    <div class="hero-side">
      <div class="side-grid">
        <div class="side-card side-card-lg">
          <img
            src="/img.shop/shop.hero_shirt.jpeg"
            alt="Men's Summer Sneaker"
            class="side-img"
          />
        </div>
        <div class="side-card side-card-sm">
          <img
            src="/img.shop/shop.hero_cup.jpeg"
            alt="Clothing.No18"
            class="side-img"
          />
        </div>
        <div class="side-card side-card-sm">
          <img
            src="/img.shop/shop.hero_tote.jpeg"
            alt="Bag.No1"
            class="side-img"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-grid {
  display: flex;
  gap: 2rem;
  padding-left: 3rem;
  padding-right: 3rem;
  align-items: stretch;
  margin-bottom: 3rem;
}
.hero-main {
  flex: 2 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
}
.hero-image-wrapper {
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  overflow: hidden;
  background: #f6ede8;
}
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 1.5rem;
}
.blur-dark {
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 40%;
  min-width: 260px;
  max-width: 500px;
  padding: 2.2rem 2rem 1.7rem 2.5rem;
  border-radius: 1.3rem;
  background: rgba(0, 0, 0, 0.33);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  color: #fff;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
}
.hero-caption h1 {
  font-size: 2.5rem;
  margin-bottom: 1.1rem;
  font-weight: 700;
}
.hero-caption h2 {
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 0.5rem;
}
.hero-caption button {
  margin-top: 2rem;
}
.hero-side {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
}
.side-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  gap: 1.1rem;
  width: 100%;
  height: 100%;
}
.side-card {
  background: #f6ede8;
  border-radius: 1.3rem;
  overflow: hidden;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  padding: 0;
  height: 100%;
}
.side-card-lg {
  grid-column: 1 / span 2;
}
.side-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 1.3rem;
  margin: 0;
}
@media (max-width: 900px) {
  .hero-grid {
    flex-direction: column;
    gap: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .side-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 0.7rem;
  }
  .blur-dark {
    left: auto;
    right: auto;
    margin: 0 1.2rem;
    min-width: 160px;
    max-width: 100vw;
    width: auto;
    padding: 1rem 1.1rem;
    border-radius: 1.3rem;
    transform: none;
    top: 15vw;
  }
  .hero-side {
    display: none !important;
  }
}
</style>
