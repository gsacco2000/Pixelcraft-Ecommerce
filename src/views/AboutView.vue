<template>
  <main class="container my-5">
    <!-- Daisy -->
    <div class="row team-row align-items-stretch g-0 mb-4">
      <div class="col-12 col-md-6 order-md-1 p-0">
        <img
          src="/img.about/about.daisy.jpg"
          alt="Daisy Romaniello"
          class="img-cover w-100 h-100"
        />
      </div>
      <div
        class="col-12 col-md-6 order-md-2 d-flex color-block color1 p-4"
        :class="colorClass('color1')"
      >
        <div class="w-100 text-center">
          <h2>Daisy Romaniello</h2>
          <p>Founder &amp; Project Manager</p>
          <div class="social-icons">
            <a
              href="https://www.instagram.com/daisyromaniello/"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/daisyromaniello/"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fab fa-linkedin"></i
            ></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Giulia -->
    <div class="row team-row align-items-stretch g-0 mb-4">
      <div class="col-12 col-md-6 order-md-2 p-0">
        <img
          src="/img.about/about.giulia.jpg"
          alt="Giulia Sacco"
          class="img-cover w-100 h-100"
        />
      </div>
      <div
        class="col-12 col-md-6 order-md-1 d-flex color-block color2 p-4"
        :class="colorClass('color2')"
      >
        <div class="w-100 text-center">
          <h2>Giulia Sacco</h2>
          <p>Art Director</p>
          <div class="social-icons">
            <a
              href="https://www.instagram.com/giu.scc/"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/giulia-sacco-b1a64830b/"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fab fa-linkedin"></i
            ></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Pietro -->
    <div class="row team-row align-items-stretch g-0 mb-4">
      <div class="col-12 col-md-6 order-md-1 p-0">
        <img
          src="/img.about/about.pietro.jpg"
          alt="Pietro Salciarini"
          class="img-cover w-100 h-100"
        />
      </div>
      <div
        class="col-12 col-md-6 order-md-2 d-flex color-block color3 p-4"
        :class="colorClass('color3')"
      >
        <div class="w-100 text-center">
          <h2>Pietro Salciarini</h2>
          <p>Web Developer</p>
          <div class="social-icons">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fab fa-github"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/pietro-salciarini-095b67356/"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fab fa-linkedin"></i
            ></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Jessica -->
    <div class="row team-row align-items-stretch g-0 mb-4" id="jessica">
      <div class="col-12 col-md-6 order-md-2 p-0">
        <img
          src="/img.about/about.jessica.jpg"
          alt="Jessica Scano"
          class="img-cover w-100 h-100"
        />
      </div>
      <div
        class="col-12 col-md-6 order-md-1 d-flex color-block color4 p-4"
        :class="colorClass('color4')"
      >
        <div class="w-100 text-center">
          <h2>Jessica Scano</h2>
          <p>Social Media Manager</p>
          <div class="social-icons">
            <a
              href="https://www.instagram.com/jessica_scano/"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fab fa-instagram"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/jessica-scano-b35a56100/"
              target="_blank"
              rel="noopener noreferrer"
              ><i class="fab fa-linkedin"></i
            ></a>
          </div>
        </div>
      </div>
    </div>

    <section class="keep-in-touch w-100 py-5">
      <div class="container" style="max-width: 1200px">
        <div class="row align-items-center g-4">
          <div class="col-12 col-md-6 text-section">
            <h2 class="fw-bold">
              Costruiamo esperienze<br />
              che lasciano il segno,<br />
              <span class="pixel">un pixel alla volta.</span>
            </h2>
            <h3 class="subtitle mt-3 mb-4">Iscriviti alla nostra newsletter</h3>
          </div>
        </div>
      </div>

      <div class="w-100 px-0">
        <form
          class="form-section bg-light bg-opacity-10 rounded-4 p-4"
          method="post"
        >
          <div class="row g-3">
            <div class="col-12 col-md-6">
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                required
                placeholder="Nome"
                autocomplete="given-name"
              />
            </div>
            <div class="col-12 col-md-6">
              <input
                type="text"
                class="form-control"
                id="surname"
                name="surname"
                required
                placeholder="Cognome"
                autocomplete="family-name"
              />
            </div>
            <div class="col-12">
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                required
                placeholder="Email"
                autocomplete="email"
              />
            </div>
            <div class="col-12 d-flex justify-content-center">
              <button
                type="submit"
                class="btn btn-outline-light fw-bold py-2 px-4"
              >
                Iscriviti
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "AboutPage",
  data() {
    return {
      activeColor: "color1", // default color
    };
  },
  methods: {
    colorClass(color) {
      return color;
    },
  },
};
</script>

<style scoped>
.transparent-box {
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  min-width: 300px;
  background-color: rgba(87, 86, 86, 0.5);
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.img-cover {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.color-block {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--background);
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
  display: inline-flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
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
  .team-row {
    align-items: stretch;
  }

  .team-row > .col-md-6 {
    aspect-ratio: 1 / 1;
  }

  .team-row > .col-md-6 .color-block {
    padding: var(--padding-medium);
  }
}

@media (max-width: 767.98px) {
  .team-row + .team-row {
    margin-top: 1rem;
  }
}

.img-cover,
.color-block {
  transition: all 0.15s ease;
}
</style>
