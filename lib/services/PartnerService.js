class PartnerService{
    static getAllStudents(estudents){
        return estudents;
    }
    static getStudentsWithCertification(estudents){
        const result = estudents.filter(e=>e.haveCertification);
        return result;
    }
    static getStudentsMoreThan500(estudents){
        const result = estudents.filter(e=>e.credits>500);
        return result;
    }
}
module.exports = PartnerService;