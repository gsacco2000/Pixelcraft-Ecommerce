<template>
  <section class="keep-in-touch w-100 py-5">
    <div class="container" style="max-width: 1200px">
      <div class="row align-items-center g-4">
        <div class="col-12 col-md-6 text-section">
          <h2 class="fw-bold">
            Costruiamo esperienze<br />che lasciano il segno,<br /><span
              class="pixel"
              >un pixel alla volta.</span
            >
          </h2>
          <h3 class="subtitle mt-3 mb-4">Iscriviti alla nostra newsletter</h3>
        </div>
        <div class="col-12 col-md-6">
          <form
            class="form-section bg-light bg-opacity-10 rounded-4 p-4"
            @submit.prevent="submitForm"
          >
            <div class="row g-3">
              <div class="col-12 col-md-6">
                <input
                  type="text"
                  class="form-control"
                  v-model="name"
                  required
                  placeholder="Nome"
                  autocomplete="given-name"
                />
              </div>
              <div class="col-12 col-md-6">
                <input
                  type="text"
                  class="form-control"
                  v-model="surname"
                  required
                  placeholder="Cognome"
                  autocomplete="family-name"
                />
              </div>
              <div class="col-12">
                <input
                  type="email"
                  class="form-control"
                  v-model="email"
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppNewsletter",
  data() {
    return {
      name: "",
      surname: "",
      email: "",
    };
  },
  methods: {
    submitForm() {
      // Qui puoi gestire l’invio del form, ad esempio chiamare un’API o mostrare un messaggio
      alert(`Grazie per esserti iscritto, ${this.name}!`);
      // Reset form
      this.name = "";
      this.surname = "";
      this.email = "";
    },
  },
};
</script>

<style scoped>
/* KEEP IN TOUCH SECTION - FORM DI CONTATTO */
.keep-in-touch {
  background: var(--skin-color);
  color: var(--background);
  border-radius: 0;
}

.subtitle {
  font-weight: 600;
  font-size: 1.3rem;
}

.form-section {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.form-control {
  background: rgba(255, 255, 255, 0.1);
  color: var(--background);
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  height: 3rem;
}

.form-control::placeholder {
  color: #545454;
}

.btn-outline-light {
  border: 2px solid var(--background);
  color: var(--background);
  font-weight: 700;
  border-radius: 8px;
  background: none;
  transition: background 0.3s, color 0.3s;
}

.btn-outline-light:hover,
.btn-outline-light:focus {
  background: var(--light_blue);
  border-color: var(--light_blue);
  color: var(--nav-bg);
}

.pixel {
  color: var(--text);
  font-style: italic;
}
</style>
