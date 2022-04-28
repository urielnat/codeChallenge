const reader = require("./../utils/Reader");
const PartnerService = require("./../services/PartnerService");
const students =reader.readJsonFile("./visualPartners.json");

class PartnerController{
    static getAllStudents(){
        return PartnerService.getAllStudents(students);
    }
    static getStudentsWithCertification(){
        return PartnerService.getStudentsWithCertification(students);

    }
    static getStudentsMoreThan500(){
        return PartnerService.getStudentsMoreThan500(students);

    }

    static getStudentsMoreThanNumber(number){
        return PartnerService.getStudentsMoreThanNumber(students,number);

    }

    static getStudentsEvalCertification(certification){
        return PartnerService.getStudentsWithCertificationV2(students,certification);

    }

    
}

module.exports = PartnerController;