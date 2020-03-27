<template>
  <v-card class="mx-auto" max-width="800px">
      <v-card-title>Create new user</v-card-title>
      <v-form ref="form" lazy-validation class="px-3">
        <v-text-field v-model="username" label="Username" :rules="usernameRules"></v-text-field>
        <v-btn outlined color="indigo" class="mx-0 mt-3 mb-3" @click="Submit" :loading="loading">Submit</v-btn>
    </v-form>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
    data: () => {
        return {
            username:'',
            usernameRules: [
                v => !!v || 'Username is required'
            ],
            loading: false
        }
    },
    methods: {
        Submit(e) {
            e.preventDefault();

            if(this.$refs.form.validate()) {
                this.loading = true
                const user = {
                    username: this.username
                }
                axios.post('http://localhost:5000/users/add', user)
                     .then(res => console.log(res.data))
                window.location = '/home'
            }
        }
    }
}
</script>