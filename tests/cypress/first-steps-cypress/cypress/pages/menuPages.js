class MenuPages {
    selectorList() {
        const selectors = {
            infoMenu: "[href='/web/index.php/pim/viewMyDetails']",
        };
        return selectors;
    }
    accessInfoMenu() {
        cy.get(this.selectorList().infoMenu).click();
    }
    
}

export default MenuPages;