const supertest = require('supertest');
const server = require('../api/server');

describe('/top-com', () => {
	it('return 200', async () => {
		await supertest(server)
			.get('/top-com')
			.expect(200);
	});
	it('returns json content', async () => {
		await supertest(server)
			.get('/top-com')
			.expect('Content-Type', /json/i);
	});
});
