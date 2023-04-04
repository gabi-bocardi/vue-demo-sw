import { createRouter, createWebHistory } from "vue-router";
import StudentLogin from '../components/StudentLogin'
import EnrollmentForm from '../components/EnrollmentForm'
import ChooseProgram from '../components/ChooseProgram'
import StudentProfile from "@/components/StudentProfile.vue";


const routes = [
    {
        path: '/',
        alias: '/login',
        name: 'StudentLogin',
        component: StudentLogin
    },
    {
        path: '/enrollment',
        name: 'EnrollmentForm',
        component: EnrollmentForm
    },
    {
        path: '/chooseProgram',
        name: 'ChooseProgram',
        component: ChooseProgram
    },
    {
        path:'/profile',
        name: 'StudentProfile',
        component: StudentProfile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;