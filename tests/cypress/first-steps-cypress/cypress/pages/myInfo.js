class MyInfo {
    selectList(){
        const seletors  =  {
            firstNameInput: ".orangehrm-firstname",
            middleNameInput: ".orangehrm-middlename",
            lastNameInput: ".orangehrm-lastname",
            genericSelector: '.oxd-input',
            closeButtonDatePicker: '.--close',
            buttonSave: '.orangehrm-left-space',
            genericComboBox: '.oxd-select-text-input',
        };
        return seletors;
    }
    updateUserInfo(){
        cy.get(this.selectList().firstNameInput).clear().type('FirstName');
        cy.get(this.selectList().middleNameInput).clear().type('MiddleName');
        cy.get(this.selectList().lastNameInput).clear().type('LastName');     
        cy.get(this.selectList().genericSelector).eq(4).clear().type('999999999');
        cy.get(this.selectList().genericSelector).eq(5).clear().type('999999999');
        cy.get(this.selectList().genericSelector).eq(6).clear().type('license');
        cy.get(this.selectList().genericSelector).eq(7).clear().type('2025-10-16');
        cy.get(this.selectList().closeButtonDatePicker).click();
        cy.get(this.selectList().genericComboBox).eq(0).click();
        cy.get('[role="listbox"]').contains('[role="option"]', 'Brazilian').click();
        cy.get(this.selectList().genericComboBox).eq(1).click();
        cy.get('[role="listbox"]').contains('[role="option"]', 'Single').click();
        cy.get(this.selectList().genericSelector).eq(8).clear().type('2025-10-16');
        cy.get(this.selectList().closeButtonDatePicker).click();
        cy.contains('.--gender-grouped-field label', 'Female').click();
        cy.get(this.selectList().buttonSave).eq(0).click();
        cy.get('body').should('contain', 'Successfully');
        cy.get('.oxd-toast-close--success').click();    
    }
}
export default MyInfo;

