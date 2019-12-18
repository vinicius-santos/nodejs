var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema([
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
]);

module.exports = mongoose.model('Question', QuestionSchema);
