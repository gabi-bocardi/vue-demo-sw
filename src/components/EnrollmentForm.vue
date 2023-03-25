<template>
    <div>
        <form className='enrolForm'>
            <h1>{{chosenProgram}} Student Details</h1>
            <label>First name:</label>
            <input type="text" name="fname" v-model='fname' />
            <br />
            <label>Last name:</label>
            <input type="text" name="lname" v-model='lname' />
            <br />
            <br />
            <input type='submit' value='Submit' @click='handleSubmit'/>
            <br />
            <label id='studentMsg' className='message'>{{ welcomeMessage }}</label>
        </form>
    </div>
</template>


<script>
export default {
    name: 'enrollmentForm',
    props: ['chosenProgram', 'currentSeats', 'setUpdatedSeats'],
    data() {
        return {
            welcomeMessage:'',
            fname:'',
            lname:'',
        }
    },
    methods: {
        handleSubmit(event){
            event.preventDefault();
            this.welcomeMessage=`Welcome ${this.fname} ${this.lname}`;
            this.setUpdatedSeats(this.currentSeats-1);
        }
    }

}
</script>

<style scoped>
    h1{
        color: red;
    }

</style>
