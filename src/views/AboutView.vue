<template>
  <HeroBanner
    backgroundImage="/img.about/about.hero.jpg"
    title="About"
    description="
      <p>Siamo i ragazzi di PixelCraft. Agenzia creativa fondata da Daisy Romaniello, Giulia Sacco, Pietro Salciarini e Jessica Scano. Attivi da 15 anni in Italia e all’estero con esperienza in industria meccanica di precisione, aerospaziale, metalmeccanica ed edile.</p>
      <p>Un team composto da project manager, copywriter, social media manager, art director, graphic designer, sviluppatori web, foto-videomaker e event producer.</p>
      "
  />

  <main class="mt-4">
    <TeamMemberCard
      v-for="member in team"
      :key="member.name"
      :member="member"
    />
    <div class="newsletter-container container-fluid px-0">
      <AppNewsletter />
    </div>
  </main>
</template>

<script>
import TeamMemberCard from "@/components/TeamMemberCard.vue";
import AppNewsletter from "@/components/AppNewsletter.vue";
import HeroBanner from "@/components/HeroBanner.vue";

export default {
  name: "AboutPage",
  components: {
    TeamMemberCard,
    AppNewsletter,
    HeroBanner,
  },
  data() {
    return {
      team: [
        {
          name: "Daisy Romaniello",
          role: "Founder & Project Manager",
          img: "/img.about/about.daisy.jpg",
          alt: "Daisy Romaniello",
          color: "color1",
          order: "left",
          socials: [
            {
              platform: "Instagram",
              url: "https://www.instagram.com/daisyromaniello/",
              iconClass: "fab fa-instagram",
            },
            {
              platform: "LinkedIn",
              url: "https://www.linkedin.com/in/daisyromaniello/",
              iconClass: "fab fa-linkedin",
            },
          ],
        },
        {
          name: "Giulia Sacco",
          role: "Art Director",
          img: "/img.about/about.giulia.jpg",
          alt: "Giulia Sacco",
          color: "color2",
          order: "right",
          socials: [
            {
              platform: "Instagram",
              url: "https://www.instagram.com/giu.scc/",
              iconClass: "fab fa-instagram",
            },
            {
              platform: "LinkedIn",
              url: "https://www.linkedin.com/in/giulia-sacco-b1a64830b/",
              iconClass: "fab fa-linkedin",
            },
          ],
        },
        {
          name: "Pietro Salciarini",
          role: "Web Developer",
          img: "/img.about/about.pietro.jpg",
          alt: "Pietro Salciarini",
          color: "color3",
          order: "left",
          socials: [
            {
              platform: "GitHub",
              url: "https://github.com/",
              iconClass: "fab fa-github",
            },
            {
              platform: "LinkedIn",
              url: "https://www.linkedin.com/in/pietro-salciarini-095b67356/",
              iconClass: "fab fa-linkedin",
            },
          ],
        },
        {
          name: "Jessica Scano",
          role: "Social Media Manager",
          img: "/img.about/about.jessica.jpg",
          alt: "Jessica Scano",
          color: "color4",
          order: "right",
          socials: [
            {
              platform: "Instagram",
              url: "https://www.instagram.com/jessica_scano/",
              iconClass: "fab fa-instagram",
            },
            {
              platform: "LinkedIn",
              url: "https://www.linkedin.com/in/jessica-scano-b35a56100/",
              iconClass: "fab fa-linkedin",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
main {
  max-width: 900px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

.newsletter-container {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
</style>
