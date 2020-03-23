import Vue from 'vue';
import VueRouter from 'vue-router';

import CreateExercises from './components/CreateExercises.vue';
import CreateUsers from './components/CreateUsers.vue';
import EditExercises from './components/EditExercises.vue';
import ExercisesList from './components/ExercisesList.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: ExercisesList },
    { path: '/edit/:id', component: EditExercises },
    { path: '/create', component: CreateExercises },
    { path: '/user', component: CreateUsers },
]

export default new VueRouter({
    routes
});

