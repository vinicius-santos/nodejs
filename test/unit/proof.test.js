var valid = require('../../api/helpers/validation');
const PROOF = require('../dataProof');
var _id;
module.exports = {
	setUp: function(callback) {
		_id = '22wefggghhhhhhjjjxsdfrrfrg';
		callback();
	},

	/**teste com prova válida */
	shouldNotReturnError: function(test) {
		test.strictEqual(valid.validProofAndAnswer(PROOF.PROOF_VALID, true), true, 'Este teste deve retornar verdadeiro');
		test.done();
	},
	/**teste com  mais de uma opção verdadeira na questão */
	shouldReturnErrorQuantityTrueAnswers: function(test) {
		test.throws(
			function() {
				valid.validProofAndAnswer(PROOF.PROOF_INVALID_QUANTITY_TRUE_ANSWERS, true);
			},
			Error,
			'Este teste deve retornar erro'
		);
		test.done();
	},

	/**teste com  valor somado das questões acima do definido de 100 */
	shouldReturnErrorWeightNote: function(test) {
		test.throws(
			function() {
				valid.validProofAndAnswer(PROOF.PROOF_INVALID_WEIGHT_NOTE, true);
			},
			Error,
			'Este teste deve retornar erro'
		);
		test.done();
	},

	/**teste com  menos opções que o definido que é 4*/
	shouldReturnErrorQuantityOptions: function(test) {
		test.throws(
			function() {
				valid.validProofAndAnswer(PROOF.PROOF_INVALID_QUANTITY_OPTIONS, true);
			},
			Error,
			'Este teste deve retornar erro'
		);
		test.done();
	},

	/**teste com prova válida para atualização */
	shouldNotReturnErrorUpdate: function(test) {
		test.strictEqual(
			valid.validProofAndAnswerUpdateDelete(_id, PROOF.PROOF_VALID_UPDATE_AND_DELETE, true),
			true,
			'Este teste deve retornar verdadeiro'
		);
		test.done();
	},

	/**teste com prova válida para deletar */
	shouldNotReturnErrorDelete: function(test) {
		test.strictEqual(
			valid.validProofAndAnswerUpdateDelete(_id, PROOF.PROOF_VALID_UPDATE_AND_DELETE, true),
			true,
			'Este teste deve retornar verdadeiro'
		);
		test.done();
	},

	/**teste com prova válida e _id inválido para atualizar */
	shouldReturnErrorUpdate: function(test) {
		_id = '1234rrrt';
		test.throws(
			function() {
				valid.validProofAndAnswerUpdateDelete(_id, PROOF.PROOF_VALID_UPDATE_AND_DELETE, true);
			},
			Error,
			'Este teste deve retornar erro'
		);
		test.done();
	},

	/**teste com prova válida e _id inválido para deletar */
	shouldReturnErrorDelete: function(test) {
		_id = 'awdrrrrrr';
		test.throws(
			function() {
				valid.validProofAndAnswerUpdateDelete(_id, PROOF.PROOF_VALID_UPDATE_AND_DELETE, true);
			},
			Error,
			'Este teste deve retornar erro'
		);
		test.done();
	}
};
