describe('Pruebas Manejo ', ()=>{
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/');
    })
    it('Validaciones implicitas', ()=>{
        cy.contains('Inputs').click();
        cy.get('h3').should('have.text', 'Inputs').and('be.visible');
    })

    it('Validaciones explicitas', ()=>{
        cy.contains('Inputs').click();
        cy.get('h3')
        expect('Inpusts').to.equal('Inpusts');

    })

    it('Probando las promesas en cypress', ()=>{
        let waited = false;

        function waitOneSecond(){
            //Devuelve una promesa que se da 
            //por resuelta al pasar un segundo
            return new
            Cypress.Promise((resolve, reject)=>{
                setTimeout(()=>{
                    //ponemos en true la variable waited
                    waited = true;
                    //resolvemos con el string 'foo
                    resolve('foo');
                }, 1000);
            });
        }

        cy.wrap(null).then(()=>{
            //Devuelve una promesa a cy.then que
            // es esperada hasta que se resuelva
            return waitOneSecond().then((str)=>{
                expect(str).to.equal('foo');
                expect(waited).to.be.true;
            });
        });



    })

})