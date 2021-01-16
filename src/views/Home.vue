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
      <v-img class="fotoPagina" src="../assets/home.jpg" cover> </v-img>
    </section>
    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12>
                <v-card class="elevation-0 transparent">
                  <v-card-text>
                    Presentamos el nuevo museo Hermitage en Barcelona creado por
                    Toyo Ito de la mano del arquitecto Shuichi Kobari, situado
                    en la nueva bocana del puerto de Barcelona, junto al Hotel
                    W, un edificio sostenible que utiliza la energía del mar,
                    preparado para el cambio climático y las pandemias y que
                    ayuda a mitigar la polución. En definitiva, un edificio que
                    está muy pensado para el lugar escogido, junto al mar de
                    Barcelona.
                  </v-card-text>
                  <v-card-text>
                    A parte de sus características arquitectónicas, es un
                    edificio cultural abierto a los barceloneses, a disposición
                    de todos los ciudadanos y por supuesto, a los turistas. Para
                    ello, se ha realizado un vestíbulo principal (planta baja)
                    al que se puede acceder desde diferentes entradas, situadas
                    en las tres plazas públicas a distintos niveles que lo
                    rodean. De esta forma, se han conectado dentro del propio
                    equipamiento para que este se convierta en lugar de paso.
                    Así, los usuarios pueden pasear por su interior
                    independientemente de si visitan o no el museo. La
                    concepción del inmueble sin esquinas y con los cantos
                    redondeados facilita el flujo constante de viandantes.
                  </v-card-text>
                  <v-card-text>
                    El edificio contiene una parte pública, de acceso libre,
                    donde se encuentra la biblioteca en la que se realizan
                    actividades y talleres para el público en general. Se han
                    producido tres plazas públicas que están en el entorno: una
                    en la planta principal -la cultural-, otra en la que se
                    dispone del restaurante -el mirador- y la última en la parte
                    superior, que es ajardinada y en la que se realizan las
                    exposiciones al aire libre.
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