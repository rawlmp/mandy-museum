<template>
  <v-app>
    <v-card height="100vh">
      <v-app-bar
        color="primary"
        dark
        shrink-on-scroll
        src="https://ep01.epimg.net/cultura/imagenes/2019/06/27/actualidad/1561656432_677341_1561656588_noticia_normal.jpg"
        scroll-target="#scrolling-techniques-2"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.3), rgba(128,208,199,.6)"
          ></v-img>
        </template>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>HERMITAGE Barcelona</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <div v-for="item in items" :key="item.title">
            <v-list-item
              v-if="!item.items"
              v-model="item.active"
              :to="item.route"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.action }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item>
            <v-list-group
              v-else
              v-model="item.active"
              :prepend-icon="item.action"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="child in item.items"
                :key="child.title"
                link
                :to="child.route"
                no-action
              >
                <v-list-item-content>
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </div>
        </v-list>
      </v-navigation-drawer>

      <v-sheet
        class="overflow-y-auto"
        max-height="700"
        id="scrolling-techniques-2"
      >
        <v-container style="height: 100vh">
          <router-view></router-view>
        </v-container>
      </v-sheet>
    </v-card>
    <Footer absolute />
  </v-app>
</template>

<script>
import { Footer } from "./components/Footer";
export default {
  name: "App",

  components: {
    Footer,
  },

  data: () => ({
    drawer: false,
    items: [
      {
        action: "mdi-home",
        active: true,
        title: "Inicio",
        route: "/",
      },
      {
        action: "mdi-bank",
        title: "Museo",
        route: "/museo",
      },
      {
        action: "mdi-account-group",
        items: [
          { title: "Bibioteca", route: "/biblioteca" },
          { title: "Talleres", route: "/talleres" },
          { title: "Exposiciones", route: "/exposiciones" },
        ],
        title: "Actividades",
      },
      {
        action: "mdi-silverware-fork-knife",
        route: "/restauracion",
        title: "Restauración",
      },
      {
        action: "mdi-bus",
        route: "/bus",
        title: "Bus Náutico",
      },
      {
        action: "mdi-ticket",
        route: "/reservas",
        title: "Reservas",
      },
      {
        action: "mdi-map-marker",
        route: "/ubicacion",
        title: "Ubicación",
      },
    ],
  }),
  computed: {
    mini() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return true;
        case "lg":
          return true;
        case "xl":
          return true;
        default:
          return false;
      }
    },
  },
};
</script>

<style lang="css">
.fotoPagina {
  height: 400px;
}
</style>
