describe('Sesiones y cookies', ()=>{

    it('Sin sesion guardada', ()=>{
        cy.visit('https://the-internet.herokuapp.com/login');
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('form').contains('Login').click();
        cy.url().should('include', '/secure');
    })

    it('Sesion guardada', ()=>{
        cy.session('Tom', ()=>{
            it('Sin sesion guardada', ()=>{
                cy.visit('https://the-internet.herokuapp.com/login');
                cy.get('#username').type('tomsmith');
                cy.get('#password').type('SuperSecretPassword!');
                cy.get('form').contains('Login').click();
                cy.url().should('include', '/secure'); 
                cy.getCookies().should('have.length', 5).then((cookies)=>{
                expect(cookies[0]).to.have.property('name', 'rack.session');
                });
            })
        })
    })
    it('Una sola Cookie', ()=>{
        cy.session('Tom', ()=>{
            it('Sin sesion guardada', ()=>{
                cy.visit('https://the-internet.herokuapp.com/login');
                cy.get('#username').type('tomsmith');
                cy.get('#password').type('SuperSecretPassword!');
                cy.get('form').contains('Login').click();
                cy.url().should('include', '/secure'); 
                cy.getCookie('optimizelyPendingLogEvents').should('exist');
            })
        })
    })
    it('Sesion guardada', ()=>{
        cy.session('Tom', ()=>{
            it('Sin sesion guardada', ()=>{
                cy.visit('https://the-internet.herokuapp.com/login');
                cy.get('#username').type('tomsmith');
                cy.get('#password').type('SuperSecretPassword!');
                cy.get('form').contains('Login').click();
                cy.url().should('include', '/secure'); 
                cy.getCookies().should('have.length', 5).then((cookies)=>{
                expect(cookies[0]).to.have.property('name', 'rack.session');
                });
            })
        })
        cy.clearCookies();
        cy.getCookies().should('have.length', 5)
        
    })
    it.only('Setear Cookie', ()=>{
        cy.session('Tom', ()=>{
            it('Sin sesion guardada', ()=>{
                cy.visit('https://the-internet.herokuapp.com/login');
                cy.get('#username').type('tomsmith');
                cy.get('#password').type('SuperSecretPassword!');
                cy.get('form').contains('Login').click();
                cy.url().should('include', '/secure'); 
                cy.getCookie('optimizelyEndUserId').should('not.exist');
                cy.setCookie('optimizelyEndUserId', 'oeu1610000000000r0.123456789');
                cy.getCookie('optimizelyEndUserId').should('have.property', 'value', 'oeu1610000000000r0.123456789');
            })
        })
    })
})