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
      <v-img class="fotoPagina" src="../assets/exposiciones.jpg" cover> </v-img>
    </section>
    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12>
                <v-card class="elevation-0 transparent">
                  <v-card-text>
                    De las seis salas de exposiciones, en la mayor, de 800
                    metros cuadrados, existe una de las dos exposiciones
                    permanentes —un máximo de cinco años— con las obras
                    provenientes del Hermitage ruso agrupadas en grandes temas.
                    En una segunda sala, de 500 metros, se encuentra la
                    colección del propio museo, una novedad. La ilustración de
                    este proyecto no dudo en hacerlo con imágenes de obras como:
                    cuatro enormes esculturas metálicas de Plensa, varias de
                    Chillida y de Antonio López, un par de enormes cuadros de
                    Matisse (uno de ellos La danza del MoMA), además de tres de
                    Giacometti. Estas dos salas “son el núcleo de la oferta del
                    museo”. Además, cuenta con dos salas más para exposiciones
                    temporales, una “sala de talentos”, otra para la “pieza del
                    mes” y una última llamada “sala crítica” donde se analizan
                    en profundidad una de las obras expuestas, según el programa
                    museográfico elaborado por Total Museology. En la siguiente
                    imagen se pueden observar las exposiciones al aire libre.
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