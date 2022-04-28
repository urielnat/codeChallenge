const PartnerController = require("./controllers/PartnerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "VisualPartner Api welcome!"});
});

app.listen(port, () => {
    console.log(`VisualPartner API in localhost:${port}`);
});

app.get("/v1/students",(req,res)=>{
    const students = PartnerController.getAllStudents();
    res.json(students);
});


app.get("/v1/students/certification", (request, response) => {
    const emails = PartnerController.getStudentsWithCertification();
    response.json({emails:emails});
});

app.get("/v1/students/aprove", (request, response) => {
    const students = PartnerController.getStudentsMoreThan500();
    response.json(students);
});

app.get("/v1/students/credits/:number", (request, response) => {
    const credits = request.params.number;
    const students = PartnerController.getStudentsMoreThanNumber(credits);
    response.json(students);
});

app.get("/v1/students/certification/:hascert", (request, response) => {
    const certification = request.params.hascert==="true";
    const students = PartnerController.getStudentsEvalCertification(certification);
    response.json(students);
});