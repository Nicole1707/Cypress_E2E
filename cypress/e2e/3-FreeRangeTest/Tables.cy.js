describe('Tablas estaticas y dinamicas', ()=>{ 
    it('Tabla estatica', ()=>{
        cy.visit('https://sqengineer.com/practice-sites/practice-tables-selenium/');
        //Ubicra la primeracolumna de la tabla
        cy.get('#table1 > tbody > tr > td:nth-child(1)').each(($el, index, $list)=>{
            //Texto de cada item de la columna1 
            const t = $el.text();
            //si incluye ...
            if(t.includes('Selenium')){
                //el elemento que le sigue
                cy.get('#table1 > tbody > tr > td:nth-child(1)').eq(index).next().then(function(p){
                  //se toma el texto del elemto proximo
                    const r = p.text();
                    // se valida que tenga ...
                    expect(r).to.equal('Open Source');
                })
            }
        })
    })
    it('Tabla dinamica', ()=>{
        cy.visit('https://chercher.tech/practice/dynamic-table');
        cy.contains('td', 'facebook.com	')
        .prev()
        .find('input')
        .check();
    })
    it.only('Tabla estatia 2', ()=>{
        cy.visit('https://sqengineer.com/practice-sites/practice-tables-selenium/');
        cy.contains('td', 'Selenium')
        .next()
        .should('have.text', 'Open Source');
    })
})