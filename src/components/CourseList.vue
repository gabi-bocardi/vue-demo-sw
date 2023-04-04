<template>
    <div>
       <h2> {{ title }}</h2>
       <ul v-if="sections.length">
            <li v-for="(sec, index) in sections" :key="index">
                {{ sec.course.code }} {{ sec.course.title }} (Section # {{ sec.sectionNumber  }})
            </li>
        </ul>
    </div>
</template>

<script>
import SectionService from '../services/StudentService.js'

export default {
    name: 'CourseList',
    data() {
        return {
            sid: 0,
            sections: [],
            title: "Registered Courses"
        }
    },
    props: {
        action: String
    },
    methods: {
        retrieveSections() {
            this.sid = localStorage.getItem('sid');
            console.log(this.sid);
            SectionService.getRegisteredSections(this.sid)
            .then(response => {
                this.sections = response.data;
                console.log(this.sections);
            })
            .catch(error => {
                console.log(error);
            });
        },
        refreshCourseList(){
            if(this.action === 'ShowRegisteredCourses'){
                this.title = 'Registered Courses';
            } else {
                this.title = 'Unregistered Courses';
            }
        }

    }, 
    mounted(){
        this.retrieveSections();

    }, 
    watch: {
        action(newAction, oldAction) {
            console.log("New" + newAction);
            console.log("Old" + oldAction);
            this.refreshCourseList();
        },
    }
}
</script>