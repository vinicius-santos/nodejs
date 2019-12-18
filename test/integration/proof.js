const chaiHttp = require('chai-http');
const chai = require('chai');
var server = require('../../server');
const PROOF = require('../data');

chai.should();
chai.use(chaiHttp);
describe('Proof - Endpoints', () => {
	describe('POST /proofs', () => {
		it('deve retornar o objeto criado e o id não pode ser nulo', (done) => {
			chai.request(server).post('/proofs').send(PROOF.PROOF_VALID).end((err, res) => {
				chai.assert.isNotEmpty(res.body);
				chai.assert.isNotEmpty(res.body._id);
				res.should.be.json;
				done();
			});
		});
	});

	/* id deve ser o mesmo do objeto que será atualizado*/
	describe('PUT /proofs', () => {
		it('deve retornar o objeto atualizado e o id não pode ser nulo', (done) => {
			chai
				.request(server)
				.put('/proofs/' + '5df97141e4af0631c4781374')
				.send(PROOF.PROOF_VALID_INTEGRATION)
				.end((err, res) => {
					chai.assert.isNotEmpty(res.body);
					chai.assert.isNotEmpty(res.body._id);
					res.should.be.json;
					done();
				});
		});
	});

	/* id deve ser o mesmo do objeto que será removido, no caso desativado*/
	describe('Delete /proofs', () => {
		it('deve retornar o objeto atualizado e o id não pode ser nulo', (done) => {
			chai
				.request(server)
				.delete('/proofs/' + '5df97141e4af0631c4781374')
				.send(PROOF.PROOF_VALID_INTEGRATION)
				.end((err, res) => {
					chai.assert.isNotEmpty(res.body);
					chai.assert.isNotEmpty(res.body._id);
					res.should.be.json;
					done();
				});
		});
	});
});
