<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
  <v-card
    height="400"
    width="256"
    class="mx-auto"
  >
    <v-navigation-drawer app>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-titlapp>
                Application
              </v-list-item-titlapp>
              <v-list-item-subtitle>
                subtext
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
            dense
            nav
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="item.to"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
      return {
        items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Grid System', icon: 'mdi-image', to:'/grid-system' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
        right: null,
      }
  }
};
</script>
