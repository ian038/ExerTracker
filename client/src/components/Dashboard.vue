<template>
  <nav>
    <v-app-bar dark color="light-blue" app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Exer</span>
        <span>Tracker</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="error--text" light @click="Signout">
        <span>Sign Out</span>
        <v-icon class="material-icons" right>exit_to_app</v-icon>
      </v-btn>
      <v-tabs slot="extension">
        <v-tab v-for="link in links" :key="link.id" :to="link.link">{{link.name}}</v-tab>        
      </v-tabs>
    </v-app-bar>
      <v-navigation-drawer v-model="drawer" app>
        <v-list>
          <v-list-item-group color="primary">
          <v-list-item v-for="item in items" :key="item.id" :to="item.link">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
  </nav>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'Dashboard',

    data: () => ({
      drawer: false,
      links: [
        { id: 1, name: 'Exercises', link: '/home' },
        { id: 2, name: 'Create Exercise Log', link: '/create' }
      ],
      items: [
        { id: 1, name: 'Exercises', icon: 'mdi-home', link: '/home' },
        { id: 2, name: 'Sign Out', icon: 'exit_to_app', link: '/'}
      ]
    }),
    methods: {
      Signout() {
        if(typeof window !== 'undefined') {
          localStorage.removeItem('jwt')
          axios.get('api/auth/signout')
               .then(res => console.log(res))
               .catch(err => console.log(err))
          return this.$router.push('/')
       }
      }
    }
  }
</script>
