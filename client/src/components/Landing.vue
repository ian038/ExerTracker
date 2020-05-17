<template>
  <nav>
    <v-app-bar dark color="light-blue" app>

      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-light">Exer</span>
        <span>Tracker</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tabs slot="extension">
        <v-tab v-for="link in links" :key="link.id" :to="link.link">{{link.name}}</v-tab>        
      </v-tabs>
    </v-app-bar>
  </nav>
</template>

<script>
  export default {
    name: 'Landing',
    data: () => ({
      links: [
        { id: 1, name: 'Sign Up', link: '/signup' },
        { id: 2, name: 'Sign In', link: '/signin' }
      ]
    })
  }
</script>
