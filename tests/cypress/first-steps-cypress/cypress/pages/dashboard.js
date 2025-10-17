class DashboardPage {
    selectorList() {
        const selectors = {
            dashboardGrid: '.orangehrm-dashboard-grid',
            pathDashboard: '/web/index.php/dashboard/index',
        };
        return selectors;
    }

    verifyDashboardIsVisible() {
        cy.location('pathname').should('eq', this.selectorList().pathDashboard);
        cy.get(this.selectorList().dashboardGrid).should('be.visible');
    }
}

export default DashboardPage;