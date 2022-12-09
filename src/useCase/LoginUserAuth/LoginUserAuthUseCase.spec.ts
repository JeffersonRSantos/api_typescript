import { describe, expect, test } from '@jest/globals';
import request from 'supertest';
import { app } from '../../app';

describe('Autentication login', () => {
    test('testing login', async () => {
        await request(app)
            .post('/login')
            .send({ nome: 'john santos', email: "teste@teste.com", password: "teste1234" })
            .then(response => {
                console.log(response.text)
                expect(response.text);
            })
    })
})