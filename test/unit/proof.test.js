var valid = require('../../api/helpers/validation');
const PROOF = require('../data');
var _id;
module.exports = {
	setUp: function(callback) {
		_id = '22wefggghhhhhhjjjxsdfrrfrg';
		callback();
	},

	/**teste com prova válida */
	shouldNotReturnError: function(test) {
		test.strictEqual(valid.validProof(PROOF.PROOF_VALID), true, 'Este teste deve retornar verdadeiro');
		test.done();
	},
	/**teste com  mais de uma opção verdadeira na questão */
	shouldReturnErrorQuantityTrueAnswers: function(test) {
		test.throws(
			valid.validProof(PROOF.PROOF_INVALID_QUANTITY_TRUE_ANSWERS),
			Error,
			'Este teste deve retornar erro'
		);
		test.done();
	},

	/**teste com  valor somado das questões acima do definido de 100 */
	shouldReturnErrorWeightNote: function(test) {
		test.throws(valid.validProof(PROOF.PROOF_INVALID_WEIGHT_NOTE), Error, 'Este teste deve retornar erro');
		test.done();
	},

	/**teste com  menos opções que o definido que é 4*/
	shouldReturnErrorQuantityOptions: function(test) {
		test.throws(valid.validProof(PROOF.PROOF_INVALID_QUANTITY_OPTIONS), Error, 'Este teste deve retornar erro');
		test.done();
	},

	/**teste com prova válida para atualização */
	shouldNotReturnErrorUpdate: function(test) {
		test.strictEqual(
			valid.validProofUpdateDelete(_id, PROOF.PROOF_VALID_UPDATE_AND_DELETE),
			true,
			'Este teste deve retornar verdadeiro'
		);
		test.done();
	},

	/**teste com prova válida para deletar */
	shouldNotReturnErrorDelete: function(test) {
		test.strictEqual(
			valid.validProofUpdateDelete(_id, PROOF.PROOF_VALID_UPDATE_AND_DELETE),
			true,
			'Este teste deve retornar verdadeiro'
		);
		test.done();
	},

	/**teste com prova válida e _id inválido para atualizar */
	shouldReturnErrorUpdate: function(test) {
		_id = '1234rrrt';
		test.throws(
			valid.validProofUpdateDelete(_id, PROOF.PROOF_VALID_UPDATE_AND_DELETE),
			Error,
			'Este teste deve retornar erro'
		);
		test.done();
	},

	/**teste com prova válida e _id inválido para deletar */
	shouldReturnErrorDelete: function(test) {
		_id = 'awdrrrrrr';
		test.throws(
			valid.validProofUpdateDelete(_id, PROOF.PROOF_VALID_UPDATE_AND_DELETE),
			Error,
			'Este teste deve retornar erro'
		);
		test.done();
	}
};
