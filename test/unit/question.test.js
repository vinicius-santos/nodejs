var valid = require('../../api/helpers/validation');
const QUESTION = require('../dataQuestion');
var _id;
module.exports = {
	setUp: function(callback) {
		_id = '22wefggghhhhhhjjjxsdfrrfrg';
		callback();
	},

	/**teste com questão */
	shouldNotReturnError: function(test) {
		test.strictEqual(valid.validQuestion(QUESTION.QUESTION_VALID), true, 'Este teste deve retornar verdadeiro');
		test.done();
	},
	/**teste com  mais de uma opção verdadeira na questão */
	shouldReturnErrorQuantityTrueAnswers: function(test) {
		test.throws(
			function() {
				valid.validQuestion(QUESTION.QUESTION_INVALID_QUANTITY_TRUE_ANSWERS);
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
				valid.validQuestion(QUESTION.QUESTION_INVALID_WEIGHT_NOTE);
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
				valid.validQuestion(QUESTION.QUESTION_INVALID_QUANTITY_OPTIONS);
			},
			Error,
			'Este teste deve retornar erro'
		);
		test.done();
	},

	/**teste com questão válida para atualização */
	shouldNotReturnErrorUpdate: function(test) {
		test.strictEqual(
			valid.validQuestionUpdateDelete(_id, QUESTION.QUESTION_VALID_UPDATE_AND_DELETE),
			true,
			'Este teste deve retornar verdadeiro'
		);
		test.done();
	},

	/**teste com questão válida para deletar */
	shouldNotReturnErrorDelete: function(test) {
		test.strictEqual(
			valid.validQuestionUpdateDelete(_id, QUESTION.QUESTION_VALID_UPDATE_AND_DELETE),
			true,
			'Este teste deve retornar verdadeiro'
		);
		test.done();
	},

	/**teste com questão válida e _id inválido para atualizar */
	shouldReturnErrorUpdate: function(test) {
		_id = '1234rrrt';
		test.throws(
			function() {
				valid.validQuestionUpdateDelete(_id, QUESTION.QUESTION_VALID_UPDATE_AND_DELETE);
			},
			Error,
			'Este teste deve retornar erro'
		);
		test.done();
	},

	/**teste com questão válida e _id inválido para deletar */
	shouldReturnErrorDelete: function(test) {
		_id = 'awdrrrrrr';
		test.throws(
			function() {
				valid.validQuestionUpdateDelete(_id, QUESTION.QUESTION_VALID_UPDATE_AND_DELETE);
			},
			Error,
			'Este teste deve retornar erro'
		);

		test.done();
	}
};
