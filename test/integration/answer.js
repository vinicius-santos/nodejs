const chaiHttp = require('chai-http');
const chai = require('chai');
var server = require('../../server');
var ANSWER = require('../dataAnswer');

chai.should();
chai.use(chaiHttp);
describe('Answer - Endpoints', () => {
	describe('POST /answers', () => {
		it('deve retornar o objeto criado e o id não pode ser nulo', (done) => {
			chai.request(server).post('/answers').send(ANSWER.ANSWER_VALID).end((err, res) => {
				chai.assert.isNotEmpty(res.body);
				chai.assert.isNotEmpty(res.body._id);
				ANSWER.ANSWER_VALID._id = res.body._id;
				res.should.be.json;
				done();
			});
		}).timeout(5000);
	});
});
