<template>
  <article class="card mb-5" :style="minWidthStyle">
    <div
      v-if="showMinutiLettura && articolo.minutiLettura"
      class="d-flex align-items-center gap-2 p-2"
    >
      <img
        :src="articolo.img"
        :alt="articolo.alt"
        :width="50"
        class="rounded"
      />
      <small class="fst-italic text-muted mb-0">
        {{ articolo.minutiLettura }} min
      </small>
    </div>

    <div v-else>
      <img
        :src="articolo.img"
        :alt="articolo.alt"
        class="img-fluid rounded mb-1"
      />
    </div>

    <div v-if="showCategorie" class="px-2 mb-2">
      <span
        v-for="cat in articolo.categorie"
        :key="cat"
        class="badge me-1"
        :style="categoryStyle(cat)"
      >
        {{ cat }}
      </span>
    </div>

    <h5 class="card-title p-2">{{ articolo.titolo }}</h5>
    <p class="text-muted px-2">{{ articolo.data }} | {{ articolo.autore }}</p>

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
    showCategorie: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      categoryColors: {
        "FOOD & BEVERAGE": "#1976f2",
        "VISUAL STORYTELLING": "#e54848",
        "TRAVEL & IDENTITY": "#ffd700",
        DESIGN: "#ff9800",
        "COMMUNITY DESIGN": "#00ffff",
        SUSTAINABILITY: "#388e3c",
        "GRAPHIC DESIGN": "#9c27b0",
        "BRANDING TERRITORIALE": "#f4511e",
        "CULTURA LOCALE": "#7b1fa2",
        "SPAZIO PUBBLICO": "#00796b",
        "VISUAL COMMUNICATION": "#0288d1",
      },
    };
  },
  computed: {
    isInternalLink() {
      return this.articolo.link.startsWith("/");
    },
  },
  methods: {
    categoryStyle(cat) {
      const color = this.categoryColors[cat] || "#6c757d";
      return {
        backgroundColor: color,
        color: "#fff",
        fontWeight: "600",
      };
    },
  },
};
</script>
