<template>
    <div>
        <h1>Student List</h1>
        <ul v-if='items.length' >
            <li v-for='item in items' :key='item.id'>
                Student Detail: {{ item.fname }} {{ item.lname }} -- {{ item.program }}
            </li>
        </ul>
    </div>

</template>

<script>


export default{
    name: 'enrollList',
    props: {
        studentDetail: {
            fname: '',
            lname: '',
            program: '',
        }
    },
    data() {
        return {
            items: []
        }
    },
    watch: {
        studentDetail(newStudent){
            this.items.push(newStudent);
        }
    }
    
}
</script>