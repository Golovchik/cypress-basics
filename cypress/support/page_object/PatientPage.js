import PatientsForm from "./components/PatientsForm";

class PatientPage {
    patientsForm = new PatientsForm();
    get addPatientButton() {
        return cy.get('.patient-operations > .e-control');
    }
    open() {
        cy.visit('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/patients');    
    }
    patientRow(index) {
        return cy.get(`[aria-rowindex="${index}"] > .e-templatecell`)
    }
}

export default PatientPage;