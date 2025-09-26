<template>
  <div>
    <main>
      <HeroBanner
        backgroundImage="/img.home/home.caffe.jpg"
        title="Portfolio"
        :description="`
          <p>
            In ogni progetto mettiamo in campo creatività, competenze e
            strategia. Il nostro portfolio raccoglie una selezione di lavori che
            raccontano chi siamo: ogni brand, ogni sito, ogni campagna è frutto
            di una visione condivisa con il cliente e realizzata con cura
            artigianale.
          </p>
          <p>
            Dai rebranding aziendali ai lanci prodotto, dalla progettazione web
            alle produzioni multimediali, creiamo esperienze visive e
            comunicative che lasciano il segno. I nostri progetti spaziano tra
            settori industriali, moda, cultura ed eventi, dimostrando
            versatilità e attenzione ai dettagli.
          </p>
        `"
        height="650px"
      />

      <ProjectList :projects="projects" />

      <AppNewsletter />
    </main>
  </div>
</template>

<script>
import HeroBanner from "@/components/HeroBanner.vue";
import AppNewsletter from "@/components/AppNewsletter.vue";
import ProjectList from "@/components/ProjectList.vue";

export default {
  name: "PortfolioView",
  components: {
    HeroBanner,
    AppNewsletter,
    ProjectList,
  },
  data() {
    return {
      projects: [
        {
          title: "ISI Foundation",
          img: "/img.portfolio/portfolio.isiFoundation.jpg",
          alt: "ISI Foundation",
          description:
            "Un sistema grafico dinamico per il rebranding di un centro di ricerca scientifica.",
          link: "/case/isifoundation",
        },
        {
          title: "Open Sound Festival",
          img: "/img.portfolio/portfolio.openSoundFestival.jpg",
          alt: "Open Sound Festival",
          description:
            "Una campagna manifesto per un’esperienza di land music.",
          link: "/case/musicsound",
        },
        {
          title: "Tablì Lavazza",
          img: "/img.portfolio/portfolio.tabli.jpg",
          alt: "Tablì Lavazza",
          description: "Una tab al 100% di caffè, il futuro nella tazzina.",
          link: null,
        },
        {
          title: "Abbonamento Musei",
          img: "/img.portfolio/portfolio.abbonamentoMusei.jpg",
          alt: "Abbonamento Musei",
          description: "Una nuova identità per il museo più grande d’Italia.",
          link: null,
        },
        {
          title: "La Venaria Reale",
          img: "/img.portfolio/portfolio.laVenariaReale.jpg",
          alt: "La Venaria Reale",
          description: "La Reggia si apre a una naturale evoluzione visiva.",
          link: null,
        },
        {
          title: "Tenderly",
          img: "/img.portfolio/portfolio.tenderly.jpg",
          alt: "Tenderly",
          description:
            "La nuova campagna sull’importanza della tenerezza nella vita di tutti i giorni.",
          link: null,
        },
        {
          title: "Zignone",
          img: "/img.portfolio/portfolio.zignone.jpg",
          alt: "Zignone",
          description:
            "Una campagna in campagna per il futuro di un lanificio biellese.",
          link: null,
        },
        {
          title: "Effetto Piemonte",
          img: "/img.portfolio/portfolio.effettoPiemonte.jpg",
          alt: "Effetto Piemonte",
          description:
            "Un progetto visivo per raccontare un territorio in grafica.",
          link: null,
        },
        {
          title: "Officina Bontà",
          img: "/img.portfolio/portfolio.officinaBonta.jpg",
          alt: "Officina Bontà",
          description:
            "Il bio, buono e bello. Dal nome al pack, una nuova marca.",
          link: null,
        },
      ],
    };
  },
};
</script>
