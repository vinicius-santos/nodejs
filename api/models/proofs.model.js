var mongoose = require('mongoose');
var ProofSchema = new mongoose.Schema({
	name: String,
	active: Boolean,
	questions: [
		{
			title: String,
			weightNote: Number,
			options: [
				{
					text: String,
					correctAnswer: Boolean,
					chosen: Boolean
				}
			]
		}
	]
});

module.exports = mongoose.model('Proof', ProofSchema);
