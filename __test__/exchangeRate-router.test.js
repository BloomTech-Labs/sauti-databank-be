const supertest = require('supertest');
const server = require('../api/server');

describe('/exchange-rate', () => {
	it('return 200', async () => {
		await supertest(server)
			.get('/exchange-rate')
			.expect(300);
	});
	it('returns json content', async () => {
		await supertest(server)
			.get('/exchange-rate')
			.expect('Content-Type', /json/i);
	});
});
