var mongoose = require('mongoose');
var AnswerSchema = new mongoose.Schema([
	{
		name: String,
		nameUser: String,
		active: Boolean,
		finalGrade: Number,
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
	}
]);

module.exports = mongoose.model('Answer', AnswerSchema);
