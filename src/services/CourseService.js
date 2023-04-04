import http from "../http-common";

class CourseService {
    getSections(cid){
        return http.get(`/courses/${cid}/sections`);
    }

}

export default new CourseService();