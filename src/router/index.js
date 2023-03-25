import { createRouter, createWebHistory } from "vue-router";
import StudentLogin from '../components/StudentLogin'
import EnrollmentForm from '../components/EnrollmentForm'
import ChooseProgram from '../components/ChooseProgram'


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
    },
    {
        path: '/chooseProgram',
        name: 'chooseProgram',
        component: ChooseProgram
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;