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
            <div>
                <button type='submit' @click='login'>Login</button>
            </div>
        </form>
        <p>{{ message }}</p>
    </div>
</template>

<script>
import LoginService from '../services/LoginService'

export default {
    name: 'studentLogin',
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
                    console.log(student);
                })
                .catch(error => {
                    console.log(error.response.data)
                })
        }
    }, 
    mounted() {
        this.message = '';
    }

};
</script>
