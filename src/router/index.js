import { createRouter, createWebHistory } from "vue-router";
import StudentLogin from '../components/StudentLogin'

const routes = [
    {
        path: '/',
        alias: '/login',
        name: 'studentLogin',
        component: StudentLogin
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;