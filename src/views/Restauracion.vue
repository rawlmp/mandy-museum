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
      <v-img class="fotoPagina" src="../assets/restauracion.jpg" cover> </v-img>
    </section>
    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12>
                <v-card class="elevation-0 transparent">
                  <v-card-text>
                    En la planta baja puedes disfrutar de la cafetería con
                    terraza exterior al igual que en la primera planta. En la
                    última planta del edificio -azotea- encontrarás el Gran
                    Restaurante-café, una sala VIP de (60m2) y dos terrazas con
                    vistas al mar.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
  </v-main>
</template>

<script>
export default {};
</script>

<style>
</style>