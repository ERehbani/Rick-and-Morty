const app = require('../App');
const session = require('supertest');
const agent = session(app);

describe ('Test de RUTAS', () => {
    describe("GET /rickandmorty/character/:id", () => {
        it("Responde con status 200", async () => {
            const response = await request.get('/rickandmorty/character/1')
            expect(response.statusCode).toBe(200)
        });
        
        it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin' e 'image'", async () => {
            const response = await request.get('/rickandmorty/character/1');
            for (const prop in response.body) {
                expect(response.body).toHaveProperty(prop)
            }
        })

        it("Si hay un error responde con un status: 500", async () => {
            const response = await request.get('/rickandmorty/character/19283j');
            expect(response.statusCode).toBe(500)
        })
    })

    describe("GET /rickandmorty/login", () => {
        it("Responde con un objeto con la propiedad access en true si la informacion del usuario es valida", async () => {
            const response = await request.get('/rickandmorty/login?email=elian@gmail.com&password=123asd')
        })
    })
})