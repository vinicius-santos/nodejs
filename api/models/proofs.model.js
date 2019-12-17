var mongoose = require('mongoose');
var Proofchema = new mongoose.Schema({
	name: String,
	active: Boolean,
	questions: [
		{
			title: String,
			options: [
				{
					text: String,
					correctAnswer: Boolean,
					weightNote: Number,
					chosen: Boolean
				}
			]
		}
	]
});

module.exports = mongoose.model('Proof', Proofchema);
