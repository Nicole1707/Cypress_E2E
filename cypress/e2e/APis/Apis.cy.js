describe('Apis prueba', () => { 
    
    it('Post status 200', () => {
        // cy.visit('https://jsonplaceholder.typicode.com/')
        // cy.request('posts')
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts',

        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it('El endPoint "Posts" tiene 100 entradas', () => {

        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts',

        }).then((response) => {
            expect(response.body).to.have.length(100)
        })
    })
    it('Validar el titulo del primer posts', () => {
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts/1',
        }).then((response) =>{
            expect(response.body.title).to.eq('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        })
    })
    it('Post funciona jevi', ()=>{
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts/1', {
            userId: 1,
            id: 101,
            title: 'Pruebas',
            body: 'Estoy probando caer un post de manera correcta al endpoint'
        }).then ((response) =>{
            expect(response.status).to.eq(201)
        })
    })

    it('PUT funciona jevi', ()=>{
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/2', {
            title: 'Pruebas',
            body: 'Estoy probando caer un post de manera correcta al endpoint'
        }).then ((response) =>{
            expect(response.body).to.have.property('title', 'Pruebas')
        })
    })
    it.only('DELETE funciona jevi', ()=>{
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then ((response) =>{
            expect(response.status).to.eq(200)
        })

    })

 })