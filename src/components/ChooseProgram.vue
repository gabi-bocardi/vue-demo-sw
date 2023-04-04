<template>
    <div className='programs'>
        <label>Choose Program:</label>
        <select className='appDropDowns' v-model='program'>
            <option value='UG'>Undergraduate</option>
            <option value='PG'>Postgraduate</option>
        </select>
        <br>
        <br>
        <label>Remaining Undergraduate seats: {{ ugSeats }}</label>
        <br>
        <br>
        <label> Remaining Postgraduate seats: {{ pgSeats }}</label>
        <br>
        <br>
    </div>
    <div>
        <EnrollmentForm 
            :chosen-program='program' 
            :current-seats="program === 'UG' ? ugSeats : pgSeats"
            :setUpdatedSeats='setUpdatedSeats'
            :setStudentDetail='setStudentDetail'
            />
    </div>
    <div>
        <EnrollList :studentDetail='studentDetail'/>
    </div>
</template>
<script>
import EnrollmentForm from './EnrollmentForm.vue';
import EnrollList from './EnrollList.vue';

export default {
    name: 'ChooseProgram',
    components: {
        EnrollmentForm,
        EnrollList,
    }, 
    data() {
        return {
            program: 'UG',
            ugSeats: 60,
            pgSeats:40,
            studentDetail: {},
        };
    },
    methods: {
        setUpdatedSeats(updatedSeats) {
            if(this.program == 'UG'){
                this.ugSeats = updatedSeats;
            }else{
                this.pgSeats = updatedSeats;
            }
        },
        setStudentDetail(studentDetail){
            this.studentDetail = studentDetail;

        }
    }
}
</script>