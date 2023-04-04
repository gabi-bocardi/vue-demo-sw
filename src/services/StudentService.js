import http from "../http-common";

class StudentService {

    get(sid){
        return http.get(`/students/${sid}`);
    }

    getRegisteredSections(sid){
        return http.get(`/students/${sid}/sections`);
    }

    getUnregisteredCourses(sid){
        return new Promise((resolve, reject) => {
            this.getRegisteredSections(sid)
                .then((response) => {
                    const registeredCourses = response.data.map((section) => section.course);
                    this.getAllCourses()
                        .then((response) => {
                            const allCourses = response.data;
                            console.log(allCourses);
                            const unregisteredCourses = allCourses.filter((course) => 
                                !(registeredCourses.map(rc => rc.id).includes(course.id))
                            );
                            if(unregisteredCourses){
                                response.data = unregisteredCourses;
                                resolve(response);
                            }
                        })
                        .catch((error) => {
                            reject(error);
                        });

                })
                .catch((error) => {
                    reject(error);
                }
            );
        });
    }

    getAllCourses(){
        return http.get(`/courses`);
    }

    register(sid, sectionId){
        const newReg = {
            "section.id": sectionId,
            "student.id": sid,
        }
        return http.post('/registrations', newReg);
    }
}

export default new StudentService();