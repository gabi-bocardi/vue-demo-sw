import { createRouter, createWebHistory } from "vue-router";
import StudentLogin from '../components/StudentLogin'
import EnrollmentForm from '../components/EnrollmentForm'

const routes = [
    {
        path: '/',
        alias: '/login',
        name: 'studentLogin',
        component: StudentLogin
    },
    {
        path: '/enrollment',
        name: 'enrollmentForm',
        component: EnrollmentForm
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;