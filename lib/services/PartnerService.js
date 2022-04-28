class PartnerService{
    static getAllStudents(estudents){
        return estudents;
    }
    static getStudentsWithCertification(estudents){
        const result = estudents.filter(e=>e.haveCertification).map(e=>e.email);
        return result;
    }
    static getStudentsMoreThan500(estudents){
        const result = estudents.filter(e=>e.credits>500);
        return result;
    }
    static getStudentsMoreThanNumber(estudents,number){
        const result = estudents.filter(e=>e.credits>number);
        return result;
    }

    static getStudentsWithCertificationV2(estudents,certification){
        const result = estudents.filter(e=>e.haveCertification==certification).map(e=>e.email);
        return result;
    }
    
}
module.exports = PartnerService;