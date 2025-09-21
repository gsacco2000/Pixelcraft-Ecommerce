<template>
  <section class="hero-grid">
    <div class="hero-main">
      <div class="hero-image-wrapper">
        <img
          src="/img.shop/shop.shampoo.jpg"
          alt="Zip Hoodie"
          class="hero-image"
        />
        <div class="hero-caption blur-dark">
          <h2>New Arrivals</h2>
          <h1>ZIP HOODIE</h1>
          <p>
            Posuere sociis eu libero vivamus convallis eros pede torquent
            vestibulum aenean.
          </p>
          <button class="btn btn-outline-light mt-3">Discover Now</button>
        </div>
      </div>
    </div>

    <div class="hero-side">
      <div class="side-grid">
        <div class="side-card side-card-lg">
          <img
            src="/img.shop/shop.sneaker.jpg"
            alt="Men's Summer Sneaker"
            class="side-img"
          />
          <div class="side-caption">
            <h3>Men's Summer Sneaker</h3>
            <p>Big Sale Off This Week</p>
          </div>
        </div>
        <div class="side-card side-card-sm blur-dark">
          <img
            src="/img.shop/shop.no18.jpg"
            alt="Clothing.No18"
            class="side-img"
          />
          <div class="side-caption">
            <h4>Clothing.No18</h4>
            <p>Sale Off 20% All Store</p>
          </div>
        </div>
        <div class="side-card side-card-sm blur-dark">
          <img src="/img.shop/shop.bagno1.jpg" alt="Bag.No1" class="side-img" />
          <div class="side-caption">
            <h4>Bag.No1</h4>
            <p>Big Sale No Limited</p>
          </div>
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
  right: 5%;
  bottom: 10%;
  padding: 1rem 2rem 1.3rem 2rem;
  border-radius: 1.5rem;
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.hero-caption h1 {
  font-size: 2.2rem;
  margin-bottom: 0.7rem;
}
.hero-caption h2 {
  font-size: 1.4rem;
}
.hero-caption p {
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
}
.hero-side {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}
.side-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 1.5rem;
  width: 100%;
  height: 100%;
}
.side-card-lg {
  grid-column: 1 / span 2;
  background: #f6ede8;
  border-radius: 1.3rem;
  overflow: hidden;
  position: relative;
  height: 29vh;
  min-height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  padding-bottom: 1.3rem;
  width: 100%;
}
.side-card-sm {
  min-width: 0;
  min-height: 120px;
  background: #f6ede8;
  border-radius: 1.3rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  padding-bottom: 1.1rem;
}
.blur-dark.side-card-sm {
  padding: 0.5rem 1rem;
  justify-content: center;
}
.side-img {
  width: 100%;
  height: 65%;
  object-fit: cover;
  border-radius: 1.3rem 1.3rem 0 0;
  margin-bottom: 0.5rem;
  display: block;
}
.side-caption {
  width: 100%;
  color: #222;
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
  }
}
</style>
