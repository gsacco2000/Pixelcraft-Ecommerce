<template>
  <main>
    <div
      v-for="member in team"
      :key="member.name"
      class="row team-row align-items-stretch g-0 mb-4"
      :class="{ 'flex-row-reverse': member.order === 'right' }"
    >
      <div class="col-12 col-md-6">
        <img
          :src="member.img"
          :alt="member.alt"
          class="img-cover w-100 h-100 rounded-start"
          loading="lazy"
        />
      </div>
      <div
        class="col-12 col-md-6 d-flex p-4 text-center color-block rounded-end"
        :class="member.color"
      >
        <div class="w-100 d-flex flex-column justify-content-center">
          <h2>{{ member.name }}</h2>
          <p>{{ member.role }}</p>
          <div
            class="social-icons d-inline-flex gap-3 justify-content-center align-items-center mt-3"
          >
            <a
              v-for="social in member.socials"
              :key="social.platform"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`${social.platform} ${member.name}`"
            >
              <i :class="social.iconClass"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer newsletter a tutta larghezza -->
    <div class="newsletter-container container-fluid px-0">
      <AppNewsletter />
    </div>
  </main>
</template>

<script>
import AppNewsletter from "@/components/AppNewsletter.vue";

export default {
  name: "AboutPage",
  components: {
    AppNewsletter,
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

.team-row {
  justify-content: center;
  margin-bottom: 1.5rem;
  background: var(--skin-color);
  border-radius: 0.75rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.team-row > .col-md-6 {
  max-width: 450px;
  padding: 0;
  min-height: 320px; /* garantisce altezza minima per vedibilità immagine */
}

.img-cover {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.15s ease;
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}

.color-block {
  display: flex !important;
  align-items: center;
  justify-content: center !important;
  color: var(--background);
  flex-direction: column;
  padding: 2rem;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
}

.color1,
.color2,
.color3,
.color4 {
  background-color: var(--skin-color);
}

.color-block h2 {
  font-size: 1.7rem;
  margin-bottom: 0.5rem;
}

.social-icons {
  margin-top: 0.75rem;
}

.social-icons a {
  font-size: 1.35rem;
  color: var(--background);
  transition: transform 0.18s ease, opacity 0.18s ease;
}

.social-icons a:hover {
  transform: scale(1.15);
  opacity: 0.9;
}

@media (min-width: 768px) {
  .team-row.flex-row-reverse {
    flex-direction: row-reverse;
  }
  .team-row > .col-md-6 {
    aspect-ratio: 1 / 1;
  }
}

@media (max-width: 767.98px) {
  main {
    max-width: 100%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  .team-row {
    margin-bottom: 1rem;
    border-radius: 0.5rem;
  }
  .team-row > .col-md-6 {
    max-width: 100%;
    aspect-ratio: auto;
    border-radius: 0;
    min-height: auto;
  }
  .img-cover,
  .color-block {
    border-radius: 0;
  }
}
</style>
