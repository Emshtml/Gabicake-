const request = require('supertest');
const app = require('../app'); // seu arquivo principal do Express

describe('Testes de Usuários', () => {
  it('Deve retornar 200 no login', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ email: 'teste@teste.com', password: '123456' });
    expect(res.statusCode).toEqual(200);
  });
});
