describe('posts', () => {
    it('should return 10 posts', () => {
        cy.request('https://jsonplaceholder.typicode.com/users').then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.length).to.equal(10);
        })
    });

    it('it should create new user', () => {
        const userData = {
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          };
        cy.request('POST', 'https://jsonplaceholder.typicode.com/users', userData).then(response => {
            expect(response.status).to.equal(201);
            expect(response.body).to.eql({
                id: 11,
                ...userData
            });
        })
    });
})