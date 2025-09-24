<template>
  <article class="card mb-5" :style="minWidthStyle">
    <img
      :src="articolo.img"
      :alt="articolo.alt"
      :width="showMinutiLettura ? 50 : null"
      class="img-fluid rounded mb-1"
    />
    <h5 class="card-title p-2">{{ articolo.titolo }}</h5>
    <p class="text-muted px-2">{{ articolo.data }} | {{ articolo.autore }}</p>
    <div
      v-if="showMinutiLettura && articolo.minutiLettura"
      class="p-2 fst-italic small"
    >
      {{ articolo.minutiLettura }} min di lettura
    </div>
    <div v-if="!showMinutiLettura" class="mt-auto ms-2 mb-3 px-2">
      <router-link
        v-if="isInternalLink"
        :to="articolo.link"
        class="btn btn-primary p-1 fw-bold"
      >
        Continua a leggere
      </router-link>
      <a v-else :href="articolo.link" class="btn btn-primary p-1 fw-bold"
        >Continua a leggere</a
      >
    </div>
  </article>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    articolo: {
      type: Object,
      required: true,
    },
    showMinutiLettura: {
      type: Boolean,
      default: false,
    },
    minWidthStyle: {
      type: Object,
      default: () => ({ minWidth: "270px" }),
    },
  },
  computed: {
    isInternalLink() {
      return this.articolo.link.startsWith("/");
    },
  },
};
</script>
