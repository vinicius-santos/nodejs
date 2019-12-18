const chaiHttp = require('chai-http');
const chai = require('chai');
var server = require('../../server');
var USER = require('../dataUser');

chai.should();
chai.use(chaiHttp);
describe('User - Endpoints', () => {
	describe('POST /users', () => {
		it('deve retornar o objeto criado e o id não pode ser nulo', (done) => {
			chai.request(server).post('/users').send(USER.USER_VALID).end((err, res) => {
				chai.assert.isNotEmpty(res.body);
				chai.assert.isNotEmpty(res.body._id);
				USER.USER_VALID_INTEGRATION._id = res.body._id;
				res.should.be.json;
				done();
			});
		}).timeout(5000);
	});

	/* id deve ser o mesmo do objeto que será atualizado*/
	describe('PUT /users', () => {
		it('deve retornar o objeto atualizado e o id não pode ser nulo', (done) => {
			chai
				.request(server)
				.put('/users/' + USER.USER_VALID_INTEGRATION._id)
				.send(USER.USER_VALID_INTEGRATION)
				.end((err, res) => {
					chai.assert.isNotEmpty(res.body);
					chai.assert.isNotEmpty(res.body._id);
					res.should.be.json;
					done();
				});
		}).timeout(5000);
	});
});
