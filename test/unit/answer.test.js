var valid = require('../../api/helpers/validation');
var calc = require('../../api/helpers/Proof.util');
const ANSWER = require('../dataAnswer');
var _id;
module.exports = {
	setUp: function(callback) {
		_id = '22wefggghhhhhhjjjxsdfrrfrg';
		callback();
	},

	/**teste com resposta válida */
	shouldNotReturnError: function(test) {
		test.strictEqual(calc.calcProof(ANSWER.ANSWER_VALID), true, 'Este teste deve retornar verdadeiro');
		test.done();
	},
	/**teste com  valor final fora do aceitalvel que é dentro de 0 a 100 */
	shouldReturnErrorQuantityTrueAnswers: function(test) {
		test.throws(
			function() {
				calc.calcProof(ANSWER.ANSWER_INVALID);
			},
			Error,
			'Este teste deve retornar erro'
		);
		test.done();
	}
};
