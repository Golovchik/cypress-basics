import PatientPage from "../../support/page_object/PatientPage";

describe('patient', () => {
    it('create new patient', () => {
        const patientPage = new PatientPage();
        patientPage.open();
        
        patientPage.addPatientButton.click();
        patientPage.patientsForm.fill({
            name: 'Uladzislau Halouchyk', 
            mobile: '1234567890',
            email: 'Uladzislau@mail.by',
            symptoms: 'Problem with heart.',
            bloodGroup: 'B+'
        });
        patientPage.patientsForm.submitButton.click();
        
        patientPage.patientRow(7).should('have.text','Uladzislau Halouchyk');
    })
})