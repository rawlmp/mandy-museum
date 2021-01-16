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
      <v-img class="fotoPagina" src="../assets/biblioteca.jpg" cover> </v-img>
    </section>
    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12>
                <v-card class="elevation-0 transparent">
                  <v-card-text>
                    Habilitada en la parte pública una biblioteca para poder
                    realizar actividades de lectura, trabajo u otras opciones de
                    ocio y descanso.
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