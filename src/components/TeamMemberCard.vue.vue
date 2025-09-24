<template>
  <div
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
</template>

<script>
export default {
  name: "TeamMemberCard",
  props: {
    member: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
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
  min-height: 320px;
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
