<template>
    <div>
       <h2> {{ title }}</h2>
       <ul v-if="sections.length">
            <li v-for="(sec, index) in sections" :key="index">
                {{ sec.course.code }} {{ sec.course.title }} (Section # {{ sec.sectionNumber  }})
            </li>
        </ul>
        <ul v-if="courses.length">
            <li v-for="(course, index) in courses" :key="index">
                <router-link to="" :id="index" @click="handleCourseClick">{{ course.code }} {{ course.title }}</router-link>
                <div v-if="chosenCourse === course">
                    <select id="selectSection" v-model="chosenSectionId">
                        <option v-for="(section, index) in availableSections" :key="index" :value="section.id">
                            {{ section.sectionNumber }}
                        </option>
                    </select>
                    <button :id="index" @click="handleRegister">Register</button>
                </div> 
            </li>
        </ul>
    </div>
</template>

<script>
import StudentService from '../services/StudentService.js'
import CourseService from '../services/CourseService.js'
export default {
    name: 'CourseList',
    data() {
        return {
            sid: 0,
            sections: [],
            title: "Registered Courses",
            courses: [],
            chosenCourse: {},
            chosenSectionId: 0,
            availableSections: [],
        }
    },
    props: {
        action: String
    },
    methods: {
        retrieveSections() {
            this.sid = localStorage.getItem('sid');
            StudentService.getRegisteredSections(this.sid)
            .then(response => {
                this.sections = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        refreshCourseList(){
            if(this.action === 'ShowRegisteredCourses'){
                this.title = 'Registered Courses';
                this.courses = [];
                this.retrieveSections();
            } else {
                this.title = 'Unregistered Courses';
                this.sections = [];
                StudentService.getUnregisteredCourses(this.sid)
                    .then(response => {
                        this.courses = response.data;
                    })
                    .catch(error => {
                        console.log(error);
                    });
            
            }
        },
        handleCourseClick(event){
            event.preventDefault();
            this.availableSections = [];
            this.chosenCourse = this.courses[event.target.id];
            console.log(this.chosenCourse);
            CourseService.getSections(this.chosenCourse.id)
                .then(response => {
                    this.availableSections = response.data;
                    console.log(this.availableSections);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        handleRegister(event){
            event.preventDefault();
            console.log("chosenSectionId ", this.chosenSectionId);
            StudentService.register(this.sid, this.chosenSectionId)
                .then(response => {
                    const newRegistration = response.data;
                    console.log("newRegistration ", newRegistration);
                    this.refreshCourseList();
                })
                .catch(error => {
                    console.log(error);
                });
        }

    }, 
    mounted(){
        this.retrieveSections();

    }, 
    watch: {
        action() {
            this.refreshCourseList();
        },
    }
}
</script>