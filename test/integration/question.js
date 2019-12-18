const chaiHttp = require('chai-http');
const chai = require('chai');
var server = require('../../server');
var QUESTION = require('../dataQuestion');

chai.should();
chai.use(chaiHttp);
describe('Question - Endpoints', () => {
	describe('POST /questions', () => {
		it('deve retornar o objeto criado e o id não pode ser nulo', (done) => {
			chai.request(server).post('/questions').send(QUESTION.QUESTION_VALID).end((err, res) => {
				chai.assert.isNotEmpty(res.body);
				chai.assert.isNotEmpty(res.body._id);
				QUESTION.QUESTION_VALID_INTEGRATION._id = res.body._id;
				res.should.be.json;
				done();
			});
		});
	});

	/* id deve ser o mesmo do objeto que será atualizado*/
	describe('PUT /questions', () => {
		it('deve retornar o objeto atualizado e o id não pode ser nulo', (done) => {
			chai
				.request(server)
				.put('/questions/' + QUESTION.QUESTION_VALID_INTEGRATION._id)
				.send(QUESTION.QUESTION_VALID_INTEGRATION)
				.end((err, res) => {
					chai.assert.isNotEmpty(res.body);
					chai.assert.isNotEmpty(res.body._id);
					res.should.be.json;
					done();
				});
		});
	});

	/* id deve ser o mesmo do objeto que será removido, no caso desativado*/
	describe('Delete /questions', () => {
		it('deve retornar o objeto atualizado e o id não pode ser nulo', (done) => {
			chai
				.request(server)
				.delete('/questions/' + QUESTION.QUESTION_VALID_INTEGRATION._id)
				.send(QUESTION.QUESTION_VALID_INTEGRATION)
				.end((err, res) => {
					chai.assert.isNotEmpty(res.body);
					chai.assert.isNotEmpty(res.body._id);
					res.should.be.json;
					done();
				});
		});
	});
});
