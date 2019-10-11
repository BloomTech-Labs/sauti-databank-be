const supertest = require('supertest');
const server = require('../api/server');

describe('/top-cat', () => {
	it('return 200', async () => {
		await supertest(server)
			.get('/top-cat')
			.expect(300);
	});
	it('returns json content', async () => {
		await supertest(server)
			.get('/top-cat')
			.expect('Content-Type', /json/i);
	});
});
