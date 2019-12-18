var valid = require('../../api/helpers/validation');
const USER = require('../dataUser');
var _id;
module.exports = {
	setUp: function(callback) {
		_id = '222355efggghhhhhhjjjxsdfrrfrg';
		callback();
	},

	/**test de criação  com usuário válido */
	shouldNotReturnError: function(test) {
		test.strictEqual(valid.validUser(USER.USER_VALID), true, 'Este teste deve retornar verdadeiro');
		test.done();
	},
	/**teste com usuário inválido */
	shouldReturnErrorQuantityTrueAnswers: function(test) {
		test.throws(
			function() {
				valid.validUser(USER.USER_INVALID);
			},
			Error,
			'Este teste deve retornar erro'
		);
		test.done();
	},

	/**test de atualização  com usuário válido */
	shouldNotReturnError: function(test) {
		test.strictEqual(valid.validUserUpdateDelete(_id, USER.USER_VALID_UPDATE), true, 'Este teste deve retornar verdadeiro');
		test.done();
	},

	/**teste de atualização usuário inválido */
	shouldReturnErrorQuantityTrueAnswers: function(test) {
		test.throws(
			function() {
				valid.validUserUpdateDelete(_id, USER.USER_INVALID_UPDATE);
			},
			Error,
			'Este teste deve retornar erro'
		);
		test.done();
	}
};
