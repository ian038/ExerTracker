import Vue from 'vue';
import VueRouter from 'vue-router';

import CreateExercises from './components/CreateExercises.vue';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import EditExercises from './components/EditExercises.vue';
import ExercisesList from './components/ExercisesList.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/home', component: ExercisesList },
    { path: '/edit/:id', component: EditExercises },
    { path: '/create', component: CreateExercises },
    { path: '/signup', component: SignUp },
    { path: '/signin', component: SignIn },
]

export default new VueRouter({
    mode:'history',
    routes
});

