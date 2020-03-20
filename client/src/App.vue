<template>
  <v-app>
    <v-content>
      <Navbar msg="ExerTracker"/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/navbar';

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
