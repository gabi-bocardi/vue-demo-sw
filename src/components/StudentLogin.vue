<template>
    <div>
        <h4>Student Login</h4>
        <form>
            <div>
                <label for='studentId'>Student ID: </label>
                <input type='text' id='studentId' v-model='studentLoginRequest.studentId'>
            </div>
            <div>
                <label for='password'>Password: </label>
                <input type='password' id='password' v-model='studentLoginRequest.password'>
            </div>
        </form>
        <div>
            <button type='submit' @click='login'>Login</button>
        </div>
        <p>{{ message }}</p>
    </div>
</template>

<script>
import LoginService from '../services/LoginService'

export default {
    name: 'StudentLogin',
    data() {
        return {
            studentLoginRequest: { studentId: '', password: ''},
            message: '', 
        }
    },
    methods: {
        login() {
            LoginService.login(this.studentLoginRequest)
                .then(response => {
                    let student = response.data;
                    this.message = student;
                    localStorage.setItem('sid', student.id);
                    this.$router.push({ name: 'StudentProfile' })
                })
                .catch(error => {
                    console.log(error.response.data)
                    this.message = error.response.data;
                })
        }
    }, 
    mounted() {
        this.message = '';
    }

};
</script>
