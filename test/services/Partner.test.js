const PartnerService = require("./../../lib/services/PartnerService");
const reader = require("./../../lib/utils/Reader");

const partners = reader.readJsonFile("./visualPartners.json");


describe("Pruebas de unidad servicio partner service",()=>{
    test("1.- prueba funcion get all",()=>{

        const students=PartnerService.getAllStudents(partners);
        expect(students).not.toBeUndefined();
        expect(students.length).toBe(51);
        
    });

    test("2.- prueba funcion get students with cetification",()=>{

        const students=PartnerService.getStudentsWithCertification(partners);
        expect(students).not.toBeUndefined();
        expect(students.length).toBe(29);
        
    });


    test("3.- prueba funcion get students with credits more than 500",()=>{

        const students=PartnerService.getStudentsMoreThan500(partners);
        expect(students).not.toBeUndefined();
        expect(students.length).toBe(27);
        
    });
  
});