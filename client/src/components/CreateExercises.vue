<template>
  <v-app>
    <Dashboard />
    <v-container>
      <v-card class="mx-auto" max-width="600px">
      <v-card-title>Create new exercise log</v-card-title>
      <v-form ref="form" lazy-validation class="px-3">
        <v-text-field v-model="username" label="Username" :rules="usernameRules"></v-text-field>
        <v-text-field v-model="description" label="Description" :rules="descriptionRules"></v-text-field>
        <v-text-field v-model="duration" label="Duration (in minutes)" :rules="durationRules"></v-text-field>
        <v-menu
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="dateFormatted"
              label="Date"
              hint="MM/DD/YYYY format"
              persistent-hint
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" no-title></v-date-picker>
        </v-menu>
        <v-btn outlined color="indigo" class="mx-0 mt-3 mb-3" @click="Submit" :loading="loading">Submit</v-btn>
    </v-form>
  </v-card>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios';
import Dashboard from './Dashboard';


export default {
  components: {
    Dashboard
  },
    data: vm => {
        return {
            username: '',
            usernameRules: [
                v => !!v || 'Username is required'
            ],
            description: '',
            descriptionRules: [
                v => !!v || 'Description is required'
            ],
            duration: 0,
            durationRules: [
                v => !!v || 'Duration is required'
            ],
            date: new Date().toISOString().substr(0, 10),
            dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
            loading: false
        }
    },
    computed: {
      formattedDate () {
        return this.formatDate(this.date)
      },
    },
    watch: {
      date () {
        this.dateFormatted = this.formatDate(this.date)
      },
    },
    methods: {
        Submit(e) {
            e.preventDefault();

            if(this.$refs.form.validate() && typeof window !== 'undefined') {
                this.loading = true
                const exercise = {
                    username: this.username,
                    description: this.description,
                    duration: this.duration,
                    date: this.date
                }
                const auth = JSON.parse(localStorage.getItem('jwt'))
                const { user, token } = auth.data

                axios({
                  method: 'post',
                  url: `http://localhost:5000/exercise/create/${user.id}`,
                  headers: {
                    Accept: '*/*',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                  },
                  data: exercise
                }).then(res => {
                  if(res) {
                    this.$router.push('/home')
                  }
                })
            }
        },
        formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
    }
}
</script>