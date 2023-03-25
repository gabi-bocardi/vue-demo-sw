<template>
    <div className='programs'>
        <label>Choose Program:</label>
        <select className='appDropDowns' v-model='program'>
            <option value='UG'>Undergraduate</option>
            <option value='PG'>Postgraduate</option>
        </select>
    </div>
    <div>
        <EnrollmentForm :chosen-program='program'/>
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
            program: 'UG'
        };
    }
}
</script>