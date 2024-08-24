describe('Login Form', () => {
    beforeEach(() => {
        // Visit the home page before each test
        cy.visit('/');
    });

    it('should display an error when submitting the form without a password', () => {
        // Test Case 1: Verify that submitting the form without entering a password displays an error message "Email and password fields are required".
        cy.get('input#email').type('test@example.com');
        cy.get('button[type="submit"]').click();
        cy.contains('Email and password fields are required').should('be.visible');
    });

    it('should display an error when submitting the form without an email', () => {
        // Test Case 2: Verify that submitting the form without entering an email displays an error message "Email and password fields are required"
        cy.get('input#password').type('password');
        cy.get('button[type="submit"]').click();
        cy.contains('Email and password fields are required').should('be.visible');
    });

    it('should display a success message when both email and password are filled', () => {
        // Test Case 3: Verify that submitting the form with both email and password fields filled displays a success message "Successfully logged in".
        cy.get('input#email').type('test@example.com');
        cy.get('input#password').type('password');
        cy.get('button[type="submit"]').click();
        cy.contains('Successfully logged in').should('be.visible');
    });
});
