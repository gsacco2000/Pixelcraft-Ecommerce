<template>
  <main>
    <!-- Carosello Hero -->
    <section class="hero">
      <div id="heroCarousel" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="img/img.contact/contact.hero.jpg"
              alt="persone che fanno brainstorming"
            />
            <div class="carousel-caption custom-blur-caption">
              <h1>Contattaci</h1>
              <p class="text-white">
                Hai un progetto in mente o vuoi semplicemente conoscerci meglio?
                <br />
                Siamo pronti ad ascoltarti e costruire insieme qualcosa di
                straordinario.
              </p>
              <router-link class="button btn btn-primary" to="/portfolio">
                Scopri i nostri lavori
              </router-link>
            </div>
          </div>
        </div>
        <div class="carousel-indicators">
          <button type="button" :class="{ active: true }"></button>
          <button type="button"></button>
          <button type="button"></button>
        </div>
      </div>
    </section>

    <!-- Contatti e Form -->
    <div class="container my-5 contatti">
      <div class="row g-4">
        <div class="col-md-5 titolo">
          <h1>Restiamo in contatto</h1>
          <p>Creiamo qualcosa di memorabile insieme.</p>
        </div>
        <div class="col-md-7 form-contatto">
          <h2>Scrivici un messaggio</h2>
          <form @submit.prevent="invioForm" class="needs-validation" novalidate>
            <div class="mb-3 mt-3 campo form-floating border p-2 rounded">
              <input
                v-model.trim="form.nome"
                type="text"
                class="form-control"
                id="nome"
                name="nome"
                placeholder=" "
                :class="{ 'is-invalid': errors.nome }"
              />
              <label for="nome">Ciao! Come ti chiami? *</label>
              <div class="invalid-feedback" v-if="errors.nome">
                {{ errors.nome }}
              </div>
            </div>

            <div class="mb-3 mt-3 campo form-floating border p-2 rounded">
              <select
                v-model="form.oggetto"
                class="form-select"
                id="oggetto"
                name="oggetto"
                :class="{ 'is-invalid': errors.oggetto }"
              >
                <option value="" disabled>Seleziona</option>
                <option value="collaborazione">Vi racconto la mia idea</option>
                <option value="preventivo">Vorrei un preventivo</option>
                <option value="altro">Altro</option>
              </select>
              <label for="oggetto">Cosa ti porta qui? *</label>
              <div class="invalid-feedback" v-if="errors.oggetto">
                {{ errors.oggetto }}
              </div>
            </div>

            <div class="mb-3 mt-3 campo form-floating border p-2 rounded">
              <textarea
                v-model.trim="form.messaggio"
                class="form-control"
                id="messaggio"
                name="messaggio"
                style="height: 150px"
                placeholder=" "
                :class="{ 'is-invalid': errors.messaggio }"
              ></textarea>
              <label for="messaggio">Come possiamo aiutarti? *</label>
              <div class="invalid-feedback" v-if="errors.messaggio">
                {{ errors.messaggio }}
              </div>
            </div>

            <div class="mb-3 mt-3 border p-2 rounded">
              <label for="file" class="form-label">
                Allega un file (opzionale)
              </label>
              <input
                @change="caricaFile"
                type="file"
                class="form-control"
                id="file"
                name="file"
                accept=".jpg,.jpeg,.png,.pdf"
              />
            </div>

            <div class="mb-3 mt-3 campo form-floating border p-2 rounded">
              <input
                v-model.trim="form.email"
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder=" "
                :class="{ 'is-invalid': errors.email }"
              />
              <label for="email">Qual è la tua email? *</label>
              <div class="invalid-feedback" v-if="errors.email">
                {{ errors.email }}
              </div>
            </div>

            <div class="mb-3 mt-3 campo form-floating border p-2 rounded">
              <input
                v-model.trim="form.telefono"
                type="tel"
                class="form-control"
                id="telefono"
                name="telefono"
                placeholder=" "
                :class="{ 'is-invalid': errors.telefono }"
              />
              <label for="telefono">
                Il tuo numero di telefono (opzionale)
              </label>
              <div class="invalid-feedback" v-if="errors.telefono">
                {{ errors.telefono }}
              </div>
            </div>

            <div class="form-check mb-3 mt-3 border p-2 rounded">
              <input
                v-model="form.privacy"
                class="form-check-input"
                type="checkbox"
                id="privacy"
                :class="{ 'is-invalid': errors.privacy }"
              />
              <label class="form-check-label" for="privacy">
                Ho letto e accetto l’<a href="#">informativa sulla privacy</a> *
              </label>
              <div class="invalid-feedback" v-if="errors.privacy">
                {{ errors.privacy }}
              </div>
            </div>

            <button class="btn btn-dark mt-3" type="submit">Invia</button>
          </form>
        </div>
      </div>

      <!-- Info sedi -->
      <section class="info row text-center mt-5">
        <div class="col-md-4 blocco">
          <h2>Sede di Torino</h2>
          <p>
            Corso Dante, 118<br />
            10126 Torino, Italia<br />
            <a href="mailto:info@pixelcraft.it">info@pixelcraft.it</a>
          </p>
        </div>
        <div class="col-md-4 blocco">
          <h2>Sede di Milano</h2>
          <p>
            Via Luisa Battistotti Sassi, 11<br />
            20133 Milano, Italia<br />
            <a href="mailto:milano@pixelcraft.it">milano@pixelcraft.it</a>
          </p>
        </div>
        <div class="col-md-4 blocco">
          <h2>Sede di Roma</h2>
          <p>
            Viale Gorizia, 24<br />
            00198 Roma, Italia<br />
            <a href="mailto:roma@pixelcraft.it">roma@pixelcraft.it</a>
          </p>
        </div>
      </section>
    </div>

    <!-- Mappa sede principale -->
    <section class="mappa container mb-5">
      <h2>Trova la nostra sede principale</h2>
      <div class="ratio ratio-16x9">
        <iframe
          title="Mappa della sede principale a Torino"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.420569427548!2d7.669276015569898!3d45.050160879098225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d1c7cb6d25d%3A0x1c3ffcb92eb7418a!2sCorso%20Dante%2C%20118%2C%2010126%20Torino%20TO!5e0!3m2!1sit!2sit!4v1714578912345"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "ContattiView",
  data() {
    return {
      form: {
        nome: "",
        oggetto: "",
        messaggio: "",
        email: "",
        telefono: "",
        privacy: false,
        file: null,
      },
      errors: {},
    };
  },
  methods: {
    caricaFile(event) {
      this.form.file = event.target.files[0];
    },
    invioForm() {
      this.errors = {};

      if (!this.form.nome.trim()) {
        this.errors.nome = "Il campo Nome è obbligatorio.";
      }
      if (!this.form.oggetto) {
        this.errors.oggetto = "Seleziona un'opzione su cosa ti porta qui.";
      }
      if (!this.form.messaggio.trim()) {
        this.errors.messaggio = "Il campo Messaggio è obbligatorio.";
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!this.form.email.trim() || !emailRegex.test(this.form.email)) {
        this.errors.email = "Inserisci un indirizzo email valido.";
      }
      if (this.form.telefono && !/^[0-9+\s-]{7,15}$/.test(this.form.telefono)) {
        this.errors.telefono = "Il numero di telefono non è valido.";
      }
      if (!this.form.privacy) {
        this.errors.privacy = "Devi accettare l'informativa sulla privacy.";
      }

      if (Object.keys(this.errors).length === 0) {
        alert("Messaggio inviato con successo! Grazie per averci contattato.");
        // Qui puoi aggiungere l'invio dati al server o reset del form
      }
    },
  },
};
</script>

<style scoped>
/* ====== CONTATTI CUSTOM ====== */

.titolo h1 {
  font-size: 2rem;
  margin-bottom: 0.9rem;
  color: var(--skin-color);
}

h2 {
  color: var(--skin-color);
  font-weight: bold;
}

.contatti {
  padding: var(--padding-large) 0;
}

.titolo p {
  font-size: var(--font-p);
  margin-bottom: 0.9rem;
}

/* Form */
.form-contatto h2 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.campo label {
  color: #666;
}

.checkbox-container a,
.blocco a {
  color: var(--text);
  text-decoration: underline;
}

form button {
  background-color: var(--text);
  color: var(--background);
  border: none;
  transition: background 0.3s;
}

form button:hover {
  background-color: #333;
}

/* Info sedi */
.info h2 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

/* Mappa */
.mappa h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

/* Bootstrap validation styles */
.is-invalid {
  border-color: #dc3545;
}
.invalid-feedback {
  color: #dc3545;
  font-size: 0.875em;
  margin-top: 0.25rem;
}
</style>
