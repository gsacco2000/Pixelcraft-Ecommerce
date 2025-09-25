<template>
  <section class="container mt-5">
    <div class="row">
      <!-- Statistiche media voto -->
      <div class="col-md-6 mb-4">
        <div class="card p-4">
          <h4 class="mb-2">Valutazione media</h4>
          <div class="d-flex align-items-end">
            <span class="display-5 me-2">{{ avgRating }}</span>
          </div>
          <small class="text-muted">{{ reviews.length }} recensioni</small>

          <div
            v-for="n in [5, 4, 3, 2, 1]"
            :key="n"
            class="d-flex align-items-center my-1"
          >
            <span class="me-2" style="width: 2em">{{ n }}</span>
            <div class="flex-fill me-2">
              <div class="progress" style="height: 8px">
                <div
                  class="progress-bar bg-success"
                  :style="{ width: percStars(n) + '%' }"
                />
              </div>
            </div>
            <span class="text-muted" style="width: 2em">{{
              countStars(n)
            }}</span>
          </div>
        </div>
      </div>

      <!-- Form recensione -->
      <div class="col-md-6 mb-4">
        <div class="card p-4">
          <h4 class="mb-3">Aggiungi una recensione</h4>
          <form @submit.prevent="addReview" novalidate>
            <div class="mb-2">
              <label class="form-label">Valutazione</label>
              <StarRating v-model:rating="newReview.rating" />
            </div>
            <div class="mb-2">
              <label class="form-label">Nome *</label>
              <input
                v-model="newReview.name"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="mb-2">
              <label class="form-label">Email</label>
              <input
                v-model="newReview.email"
                type="email"
                class="form-control"
              />
            </div>
            <div class="mb-2">
              <label class="form-label">Recensione *</label>
              <textarea
                v-model="newReview.text"
                class="form-control"
                required
              ></textarea>
            </div>
            <button class="btn btn-success w-100" type="submit">
              Invia recensione
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Lista recensioni -->
    <div>
      <h4 class="mb-3 mt-5">Recensioni dei clienti</h4>
      <div
        v-for="review in reviews"
        :key="review.id"
        class="card p-3 mb-3 shadow-sm"
      >
        <div class="d-flex justify-content-between align-items-center mb-1">
          <div>
            <strong>{{ review.name }}</strong>
            <span class="ms-2 text-warning">
              <StarRating :rating="review.rating" :readonly="true" />
            </span>
          </div>
          <small class="text-muted">{{ review.date }}</small>
        </div>
        <div>{{ review.text }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import StarRating from "@/components/StarRating.vue";

export default {
  name: "ReviewsSection",
  components: {
    StarRating,
  },
  data() {
    return {
      reviews: [
        {
          id: 1,
          name: "Alice",
          email: "",
          rating: 5,
          text: "Prodotto eccellente!",
          date: "25/09/2025",
        },
        // altre recensioni demo
      ],
      newReview: {
        name: "",
        email: "",
        rating: 5,
        text: "",
      },
    };
  },
  computed: {
    avgRating() {
      if (!this.reviews.length) return 0;
      const sum = this.reviews.reduce((acc, rev) => acc + rev.rating, 0);
      return (sum / this.reviews.length).toFixed(1);
    },
  },
  methods: {
    countStars(star) {
      return this.reviews.filter((r) => r.rating === star).length;
    },
    percStars(star) {
      const total = this.reviews.length;
      if (!total) return 0;
      return ((this.countStars(star) / total) * 100).toFixed(0);
    },
    addReview() {
      if (!this.newReview.name || !this.newReview.text) {
        alert("Compila campi obbligatori");
        return;
      }
      this.reviews.unshift({
        id: Date.now(),
        ...this.newReview,
        date: new Date().toLocaleDateString(),
      });
      this.newReview = { name: "", email: "", rating: 5, text: "" };
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 0.6rem;
}
</style>
