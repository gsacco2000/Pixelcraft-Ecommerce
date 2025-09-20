<template>
  <div
    id="heroCarousel"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
    style="height: 100vh"
  >
    <div class="carousel-inner h-100">
      <div class="carousel-item active h-100">
        <img
          src="https://i.pinimg.com/1200x/87/cd/31/87cd3166f8eebfcda8ac62dff8d45045.jpg"
          class="d-block w-100 h-100"
          alt="Slide 1"
          style="object-fit: cover"
        />
      </div>
      <div class="carousel-item h-100">
        <img
          src="https://i.pinimg.com/736x/69/f2/fb/69f2fbfaaa604a85a4b0a6e8f35519fd.jpg"
          class="d-block w-100 h-100"
          alt="Slide 2"
          style="object-fit: cover"
        />
      </div>
      <div class="carousel-item h-100">
        <img
          src="https://i.pinimg.com/1200x/b8/e6/e7/b8e6e78b9343722a7c25fc547a92985a.jpg"
          class="d-block w-100 h-100"
          alt="Slide 3"
          style="object-fit: cover"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#heroCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#heroCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
html,
body,
#app {
  height: 100%;
  margin: 0;
}

#heroCarousel {
  height: 100vh;
}

.carousel-item img {
  object-fit: cover;
}
</style>
