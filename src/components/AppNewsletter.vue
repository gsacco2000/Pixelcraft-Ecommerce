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
/* Inserisci qui eventuali stili personalizzati */
</style>
