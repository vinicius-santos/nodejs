'use strict';
module.exports = function(app) {
	var proof = require('../controllers/proofController');
	var question = require('../controllers/questionController');
	var answer = require('../controllers/answerController');

	app.route('/proofs').get(proof.all).post(proof.create);
	app.route('/proofs/:id').get(proof.get).put(proof.update).delete(proof.delete);

	app.route('/questions').get(question.all).post(question.create);
	app.route('/questions/:id').get(question.get).put(question.update).delete(question.delete);

	app.route('/answers').get(answer.all).post(answer.create);
	app.route('/answers/:id').get(answer.get).put(answer.update).delete(answer.delete);
};
