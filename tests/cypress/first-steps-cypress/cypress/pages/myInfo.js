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
            genericRoleBox: '[role="listbox"]',
            genderRadioButton: '.--gender-grouped-field label',
        };
        return seletors;
    }
    fillPersonalDetails(firstname, middlename, lastname){
        cy.get(this.selectList().firstNameInput).clear().type(firstname);
        cy.get(this.selectList().middleNameInput).clear().type(middlename);
        cy.get(this.selectList().lastNameInput).clear().type(lastname);     
    }
    fillEmploymentDetails(employeeId, otherId, LicenseNumber, dateExpireLicense){
        cy.get(this.selectList().genericSelector).eq(4).clear().type(employeeId);
        cy.get(this.selectList().genericSelector).eq(5).clear().type(otherId);
        cy.get(this.selectList().genericSelector).eq(6).clear().type(LicenseNumber);
        cy.get(this.selectList().genericSelector).eq(7).clear().type(dateExpireLicense);
        cy.get(this.selectList().closeButtonDatePicker).click();
        cy.get(this.selectList().genericComboBox).eq(0).click();
        cy.get(this.selectList().genericRoleBox).contains('[role="option"]', 'Brazilian').click();
        cy.get(this.selectList().genericComboBox).eq(1).click();
        cy.get(this.selectList().genericRoleBox).contains('[role="option"]', 'Single').click();
        cy.get(this.selectList().genericSelector).eq(8).clear().type('2025-10-16');
        cy.get(this.selectList().closeButtonDatePicker).click();
        cy.contains(this.selectList().genderRadioButton, 'Female').click();


    }
    saveUserInfo(){    
        cy.get(this.selectList().buttonSave).eq(0).click();
        cy.get('body').should('contain', 'Successfully');
        cy.get('.oxd-toast-close--success').click();    
    }
}
export default MyInfo;

