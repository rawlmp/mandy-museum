<template>
  <v-main>
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap align-center>
          <v-flex xs12>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline text-xs-center">{{ $route.name }}</div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section>
      <v-layout wrap class="my-5" align-center justify-center>
        <v-flex xs8 offset-xs-2>
          <v-card class="elevation-0 transparent">
            <v-card-text>
              <form>
                <v-text-field
                  v-model="name"
                  :counter="10"
                  label="Nombre y Apellido"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="Correo Electrónico"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="phone"
                  :error-messages="emailErrors"
                  label="Teléfono"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="reason"
                  :error-messages="emailErrors"
                  label="Motivo de la reserva"
                  required
                ></v-text-field>
                <v-btn class="mr-4" @click="send"> Enviar </v-btn>
              </form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </section>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    name: "",
    email: "",
    phone: "",
    reason: "",
  }),
  methods: {
    send() {
      alert("Gracias por su información");
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>