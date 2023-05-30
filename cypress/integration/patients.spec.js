describe('patients', () => {
    it('should create a patient', () => {
        cy.visit('https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/dashboard');
        
        cy.get('.patients').click();
        cy.get('.patient-operations > .e-control').click();
        cy.get('#textbox_0').type('Uladzislau Halouchyk');
        cy.get('#BloodGroup > .e-float-input').click();
        cy.get('[data-value="AB-"]').click();
        cy.get('.email-container').type('Uladzislau@mail.by');
        cy.get('#textbox_44').type('Problem with heart.');
        cy.get('#PatientMobile').type('1234567890');
        cy.get('.new-patient-dialog buttone.primary').click();

        cy.get('tr[aria-rowindex="7"]')
            .should('conatain.text','Uladzislau Halouchyk')
            .should('conatain.text','AB-');
    })
})