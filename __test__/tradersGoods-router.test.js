const supertest = require('supertest');
const server = require('../api/server');

describe('/traders-goods', () => {
	it('return 200', async () => {
		await supertest(server)
			.get('/traders-goods')
			.expect(200);
	});
	it('returns json content', async () => {
		await supertest(server)
			.get('/traders-goods')
			.expect('Content-Type', /json/i);
	});
});
