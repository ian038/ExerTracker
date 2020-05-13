import Vue from 'vue';
import VueRouter from 'vue-router';

import CreateExercises from './components/CreateExercises.vue';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import EditExercises from './components/EditExercises.vue';
import ExercisesList from './components/ExercisesList.vue';
import Landing from './components/Landing.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/home', component: ExercisesList, meta: { requiresAuth: true } },
    { path: '/edit/:id', component: EditExercises, meta: { requiresAuth: true } },
    { path: '/create', component: CreateExercises, meta: { requiresAuth: true } },
    { path: '/signup', component: SignUp },
    { path: '/signin', component: SignIn },
    { path: '/', component: Landing, meta: { guest: true } }
]

const router = new VueRouter({
    mode: 'history',
    routes
})


export default router
