<template>
    <div className='programs'>
        <label>Choose Program:</label>
        <select className='appDropDowns' v-model='program'>
            <option value='UG'>Undergraduate</option>
            <option value='PG'>Postgraduate</option>
        </select>
        <br>
        <br>
        <label>Reamaining Undergraduate seats: {{ ugSeats }}</label>
        <br>
        <br>
        <label> Reamaining Postgraduate seats: {{ pgSeats }}</label>
        <br>
        <br>
    </div>
    <div>
        <EnrollmentForm 
            :chosen-program='program' 
            :current-seats="program === 'UG' ? ugSeats : pgSeats"
            :setUpdatedSeats='setUpdatedSeats'
            />
    </div>
</template>
<script>
import EnrollmentForm from './EnrollmentForm.vue';

export default {
    name: 'chooseProgram',
    components: {
        EnrollmentForm,
    }, 
    data() {
        return {
            program: 'UG',
            ugSeats: 60,
            pgSeats:40,
        };
    },
    methods: {
        setUpdatedSeats(updatedSeats) {
            if(this.program == 'UG'){
                this.ugSeats = updatedSeats;
            }else{
                this.pgSeats = updatedSeats;
            }
        }
    }
}
</script>