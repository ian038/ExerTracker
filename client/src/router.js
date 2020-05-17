import Vue from 'vue';
import Router from 'vue-router';

import CreateExercises from './components/CreateExercises.vue';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import EditExercises from './components/EditExercises.vue';
import ExercisesList from './components/ExercisesList.vue';
import Landing from './components/Landing.vue';

Vue.use(Router);

const routes = [
    { path: '/', component: Landing },
    { path: '/signin', component: SignIn, meta: { guest: true } },
    { path: '/signup', component: SignUp, meta: { guest: true } },
    { path: '/home', component: ExercisesList, meta: { requiresAuth: true } },
    { path: '/edit/:id', component: EditExercises, meta: { requiresAuth: true } },
    { path: '/create', component: CreateExercises, meta: { requiresAuth: true } }
]

const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if(localStorage.getItem('jwt') == null) {
            next({
                path: '/signin',
                params: { nextUrl: to.fullPath }
            })
        } else {
            next()
        }
    } else if(to.matched.some(record => record.meta.requiresAuth)) {
        if(localStorage.getItem('jwt') == null) {
            next()
        } else {
            next({
                path: '/home',
                params: { nextUrl: to.fullPath }
            })
        }
    } else {
        next()
    }
})


export default router
