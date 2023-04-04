<template>
    <div>
        <div>
            <router-link to="/" @click="logout">Logout</router-link>
        </div>
        <h1>Student Profile</h1>
        <p v-if="student">Hello {{ student.name }}</p>
        <div>
            <button id="showSection" @click="handleShowSectionBtnClick">{{ btnLabel }}</button>
        </div>
        <CourseList :action="action"/>
    </div>
</template>
<script>
import StudentService from '../services/StudentService.js'
import CourseList  from './CourseList.vue'
export default {
    name: 'StudentProfile',
    data() {
        return {
            student: null,
            btnLabel: "Show Unregistered Courses", 
            action: "showRegisteredCourses"
        }
    },
    components: {
        CourseList,
    },
    methods:{
        retrieveStudent() {
            let sid = localStorage.getItem('sid');
            console.log(sid);
            StudentService.get(sid)
            .then(response => {
                this.student = response.data;
                console.log(this.student);
            })
            .catch(error => {
                console.log(error);
            });
        },
        logout(event) {
            event.preventDefault();
            localStorage.removeItem('sid');
            this.$router.push({ name: 'StudentLogin' })
        },
        handleShowSectionBtnClick(event) {
            event.preventDefault();
            if(this.action === 'ShowRegisteredCourses'){
                this.action = 'ShowUnregisteredCourses';
                this.btnLabel = 'Show Registered Courses';
            } else {
                this.action = 'ShowRegisteredCourses';
                this.btnLabel = 'Show Unregistered Courses';
            } 
        }

    },
    mounted() { 
        this.retrieveStudent();
        
    }
}
</script>