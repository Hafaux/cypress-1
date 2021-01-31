context('template3', () => {
  it('should have a visible login form', () => {
    cy.visit('');

    cy.get('[data-cy=login-form]').should('be.visible');
  });

  it('should have a login form title which is "Account Login"', () => {
    const formTitle = '[data-cy=login-form] > .form-box-title';

    cy.get(formTitle).then(title => {
      expect(title).to.have.text('Account Login');
    })
  });

  it('should have a login form that contains two input fields', () => {
    const inputFields = '[data-cy=login-form] input';

    cy.get(inputFields).then(elements => {
      expect(elements.length).to.be.at.least(2);
    });
  });

  it('should have a register button', () => {
    cy.contains('Register');
  });

  it('should have a visible register form after the register button is clicked', () => {
    const registerForm = '[data-cy=register-form]';
    
    cy.contains('Register').click();

    cy.get(registerForm).should('be.visible');
  });
});