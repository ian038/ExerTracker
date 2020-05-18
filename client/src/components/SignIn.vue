<template>
    <v-app>
    <Landing />
    <v-container>
      <v-card class="mx-auto" max-width="600px">
      <v-card-title>Sign In</v-card-title>
      <v-form ref="form" lazy-validation class="px-3">
        <v-text-field v-model="username" label="Username" :rules="usernameRules"></v-text-field>
        <v-text-field v-model="password" label="Password" :rules="passwordRules" :type="show1 ? 'text' : 'password'" ></v-text-field>
        <v-btn outlined color="indigo" class="mx-0 mt-3 mb-3" @click="Submit" :loading="loading">Submit</v-btn>
    </v-form>
  </v-card>
    </v-container>
    </v-app>
</template>

<script>
import axios from 'axios';
import Landing from './Landing';

export default {
    components: {
        Landing
    },
    data: () => {
        return {
            username:'',
            usernameRules: [
                v => !!v || 'Username is required'
            ],
            show1: false,
            password:'',
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 6 || 'Minimum 6 characters'
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
                    username: this.username,
                    password: this.password
                }
               axios({
                    method: 'post',
                    url: 'http://localhost:5000/auth/signin',
                    headers: {
                        Accept: '*/*',
                        'Content-Type': 'application/json'
                    },
                    data: user
                })
                .then(res => {
                    localStorage.setItem('jwt', JSON.stringify(res))
                    if(localStorage.getItem('jwt') !== undefined) {
                        this.$router.push('/home')
                    }
                })
                .catch(err => console.log(err))
            }
        }
    }
}
</script>