<template>
    <v-app>
        <Dashboard />
        <v-container>
        <v-card class="mx-auto" width="1500px">
            <v-card-title>Logged Exercises</v-card-title>
            <v-simple-table>
            <thead>
                <tr>
                    <th>Username</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="exercise in exercises" :key="exercise.id">
                    <td>{{exercise.username}}</td>
                    <td>{{exercise.description}}</td>
                    <td>{{exercise.duration}}</td>
                    <td>{{exercise.date.substring(0, 10)}}</td>
                    <td><v-btn outlined class="mx-0 mt-3 mb-3" :href="'/edit/' + exercise.id">Edit</v-btn> | <v-btn outlined color="error" class="mx-0 mt-3 mb-3" @click="Delete(exercise.id)">Delete</v-btn></td>
                </tr>
            </tbody>
            </v-simple-table>
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
    data: () => {
        return {
            exercises: []
        }
    },
    methods: {
        Delete(id) {
            axios.delete('http://localhost:5000/exercise/' + id)
                 .then(res => console.log(res.data))
            this.exercises = this.exercises.filter(el => el._id !==  id)
            window.location = '/home'
        }
    },
    created() {
        axios.get('http://localhost:5000/exercise/home')
            .then(response => this.exercises = response.data
            ).catch(err => console.log(err))
    },
}

</script>