'use strict';
module.exports = function(app) {
	var proof = require('../controllers/proofController');

	app.route('/proofs').get(proof.all).post(proof.create);
	app.route('/proofs/:id').get(proof.get).put(proof.update).delete(proof.delete);
};
