<template>
  <section class="container mt-5">
    <div class="row">
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
      <div class="col-md-6 mb-4">
        <div class="card p-4">
          <h4 class="mb-3">Aggiungi una recensione</h4>
          <form @submit.prevent="addReviewHandler" novalidate>
            <div class="mb-2 d-flex align-items-center" style="gap: 1.1rem">
              <label class="form-label mb-0" style="min-width: 114px">
                Valutazione
              </label>
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

    <div>
      <h4 class="mb-3 mt-5">Recensioni dei clienti</h4>
      <div
        v-for="review in reviews"
        :key="review.id"
        class="card p-3 mb-3 shadow-sm"
      >
        <div class="d-flex justify-content-between align-items-center mb-1">
          <div class="d-flex align-items-center" style="gap: 0.7rem">
            <strong>{{ review.name }}</strong>
            <StarRating :rating="review.rating" :readonly="true" />
          </div>
          <small class="text-muted">{{
            formatTimeAgo(review.createdAt)
          }}</small>
        </div>
        <div>{{ review.text }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import StarRating from "@/components/StarRating.vue";
import { mapGetters, mapActions } from "vuex";
import { formatDistanceToNow } from "date-fns";

export default {
  name: "ReviewsSection",
  components: { StarRating },
  data() {
    return {
      newReview: { name: "", email: "", rating: 5, text: "" },
    };
  },
  computed: {
    ...mapGetters(["allReviews"]),
    reviews() {
      return this.allReviews;
    },
    avgRating() {
      if (!this.reviews.length) return 0;
      return (
        this.reviews.reduce((acc, r) => acc + r.rating, 0) / this.reviews.length
      ).toFixed(1);
    },
  },
  methods: {
    ...mapActions(["addReviewAction"]),
    countStars(star) {
      return this.reviews.filter((r) => r.rating === star).length;
    },
    percStars(star) {
      const total = this.reviews.length;
      if (!total) return 0;
      return ((this.countStars(star) / total) * 100).toFixed(0);
    },
    formatTimeAgo(timestamp) {
      return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
    },
    addReviewHandler() {
      if (!this.newReview.name || !this.newReview.text) {
        alert("Compila campi obbligatori");
        return;
      }
      this.addReviewAction(this.newReview);
      this.newReview = { name: "", email: "", rating: 5, text: "" };
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 0.6rem;
}
.btn-success {
  background-color: var(--skin-color);
  border: none;
  font-weight: 600;
}
.btn-success:hover,
.btn-success:active {
  background-color: var(--skin-color);
  font-weight: 600;
  font-style: italic;
  border: none;
}
.progress-bar.bg-success {
  background-color: var(--skin-color) !important;
}
.star-rating {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  vertical-align: middle;
}
@media (max-width: 600px) {
  .star-rating {
    width: auto;
    min-width: 145px;
  }
}
</style>
