

describe('Loguear', () => {
    beforeEach(() => {
        cy.task('resetDb');
        cy.task('db:seed');
    })
    it('Sin loguearse', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth');
        cy.get('p').should('include.text', 'Congratulations');
    })

    it('Basic Login usando auth de cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
            
        });

        cy.get('p').should('include.text', 'Congratulations');
    })

    it.only('Login form ',()=>{

        cy.visit('https://the-internet.herokuapp.com');
        cy.request({
            method: 'POST',
            url: '/authenticate',
            form: true,
            body:{
                username:'tomsmith',
                password:'SuperSecretPassword!'
            }            
        })
        cy.getCookie('rack.session').should('exist');
        cy.visit('https://the-internet.herokuapp.com/secure');
        cy.get('.subheader').should('include.text', 'Welcome');

    })

} )