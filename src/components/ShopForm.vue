<template>
  <section class="container my-5">
    <div class="row justify-content-center align-items-center">
      <!-- Left content -->
      <div class="col-md-6 mb-4">
        <h6 class="text-secondary">SIAMO QUI PER AIUTARTI</h6>
        <h1 class="fw-bold mb-3">
          <span class="contattaci">Contatta</span> il nostro servizio clienti
        </h1>
        <p class="mb-3">
          Hai bisogno di aiuto con un ordine o più informazioni? Contattaci!
        </p>
      </div>
      <!-- Form -->
      <div class="col-md-6 form">
        <div class="card shadow-sm p-4 rounded-4">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="name" class="form-label">Nome</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label for="reason" class="form-label">Motivo</label>
              <select
                id="reason"
                v-model="form.reason"
                class="form-select"
                required
              >
                <option value="" disabled>Seleziona...</option>
                <option>Problemi con ordine</option>
                <option>Informazioni su prodotti</option>
                <option>Altro</option>
              </select>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Messaggio</label>
              <textarea
                id="message"
                v-model="form.message"
                class="form-control"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100 fw-semibold">
              Invia richiesta
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SupportContactForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        reason: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      alert("Richiesta inviata! Ti contatteremo al più presto.");
      this.form = { name: "", email: "", reason: "", message: "" };
    },
  },
};
</script>

<style scoped>
.contattaci {
  color: var(--skin-color);
  font-style: italic;
}

div.card {
  background-color: var(--background);
  color: var(--text);
}

.btn-primary {
  background-color: var(--skin-color);
  border: none;
}

.btn-primary:hover {
  font-style: italic;
  background-color: var(--skin-color);
  border: none;
}
</style>
