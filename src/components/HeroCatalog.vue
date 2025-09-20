<template>
  <div class="container py-4">
    <div class="row gx-4 gy-4 align-items-stretch">
      <!-- Colonna sinistra con carosello -->
      <div class="col-12 col-lg-7 d-flex">
        <div
          class="hero-banner p-4 bg-light rounded-4 flex-fill w-100 d-flex flex-column"
        >
          <div
            id="carouselExampleIndicators"
            class="carousel slide flex-fill"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                v-for="(slide, index) in slides"
                :key="index"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                :data-bs-slide-to="index"
                :class="{ active: index === 0 }"
                :aria-current="index === 0 ? 'true' : undefined"
                :aria-label="'Slide ' + (index + 1)"
              ></button>
            </div>
            <div class="carousel-inner h-100">
              <div
                v-for="(slide, index) in slides"
                :key="'slide' + index"
                :class="['carousel-item', { active: index === 0 }]"
                style="height: 100%"
              >
                <img
                  :src="slide.image"
                  class="d-block w-100"
                  :alt="slide.caption"
                  style="object-fit: contain; max-height: 400px"
                />
                <div
                  class="carousel-caption d-none d-md-block text-start bg-dark bg-opacity-50 rounded px-3 py-2"
                  style="max-width: 60%"
                >
                  <small>{{ slide.text }}</small>
                  <h3 class="fw-bold m-0">{{ slide.caption }}</h3>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Colonna destra con blocchi prodotti -->
      <div class="col-12 col-lg-5 d-flex flex-column h-100">
        <div class="flex-grow-1 d-flex flex-column h-100">
          <div class="row h-100 gx-4 gy-4">
            <div class="col-12">
              <div
                class="bg-light rounded-4 p-3 h-100 d-flex align-items-center"
              >
                <img
                  src="URL_SCARPA"
                  alt="Men's Summer Sneaker"
                  style="height: 90px; margin-right: 1rem"
                />
                <div>
                  <div class="fw-bold h5 mb-0">Men's Summer Sneaker</div>
                  <small class="text-secondary">Big Sale Off This Week</small>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div
                class="bg-light rounded-4 p-3 h-100 d-flex align-items-center"
              >
                <img
                  src="URL_GIACCA"
                  alt="Clothing.No18"
                  style="height: 54px; margin-right: 1rem"
                />
                <div>
                  <div class="fw-bold">Clothing.No18</div>
                  <small class="text-secondary">Sale Off 20% All Store</small>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div
                class="bg-light rounded-4 p-3 h-100 d-flex align-items-center"
              >
                <img
                  src="URL_BORSA"
                  alt="Bag.No1"
                  style="height: 54px; margin-right: 1rem"
                />
                <div>
                  <div class="fw-bold">Bag.No1</div>
                  <small class="text-secondary">Big Sale No Limited</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          image:
            "https://i.pinimg.com/1200x/87/cd/31/87cd3166f8eebfcda8ac62dff8d45045.jpg",
          caption: "ZIP HOODIE",
          text: "New Arrivals",
        },
        {
          image:
            "https://i.pinimg.com/736x/69/f2/fb/69f2fbfaaa604a85a4b0a6e8f35519fd.jpg",
          caption: "New Hoodie Style",
          text: "Latest trend",
        },
        {
          image:
            "https://i.pinimg.com/1200x/b8/e6/e7/b8e6e78b9343722a7c25fc547a92985a.jpg",
          caption: "Summer Wear",
          text: "Check now",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero-banner {
  min-height: 350px;
  background: #f7f7f7;
  position: relative;
}
</style>
