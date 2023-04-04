import http from "../http-common";

class StudentService {

    get(sid){
        return http.get(`/students/${sid}`);
    }

    getRegisteredSections(sid){
        return http.get(`/students/${sid}/sections`);
    }
}

export default new StudentService();