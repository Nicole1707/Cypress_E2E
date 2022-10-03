const login = (name) => {
    cy.session(name, () => {
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type(name);
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('form').contains('Login').click();
        cy.url().should('include', '/secure');   
    })
    
  }
  
  beforeEach(() => {
    login('tomsmith');
    cy.visit('https://the-internet.herokuapp.com/secure');
  })
  
  it('should test something on the /home page', () => {
    cy.contains('Secure Area').should1('be.visible');

  })
  
  it('should test something else on the /home page', () => {
    // assertions
  })