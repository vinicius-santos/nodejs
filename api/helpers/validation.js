exports.validProofAndAnswer = function(item, isProof) {
	if (!isProof) {
		if (!item.nameUser || item.finalGrade < 0 || item.finalGrade > 100) throw new Error();
	}
	if (!item.name && item.active !== true) throw new Error();
	if (!item.questions || item.questions.length <= 0) throw new Error();
	var numberWeighNote = 0;
	item.questions.forEach((question) => {
		if (!question.title || !question.weightNote || question.weightNote > 100) throw new Error();
		if (!question.options || question.options.length < 3) throw new Error();
		var numberCorrectAnswer = 0;
		var numberChosen = 0;
		question.options.forEach((option) => {
			if (!isProof) {
				if (option.chosen === true) {
					numberChosen++;
				}
			}
			if (!option.text) throw new Error();
			if (option.correctAnswer === true) {
				numberCorrectAnswer++;
			}
		});
		if (numberCorrectAnswer > 1 || numberCorrectAnswer <= 0) throw new Error();
		if (!isProof) {
			if (numberChosen > 1) throw new Error();
		}
		numberWeighNote += question.weightNote;
	});
	if (numberWeighNote !== 100) throw new Error();
	return true;
};

exports.validProofAndAnswerUpdateDelete = function(id, item, isProof) {
	this.validProofAndAnswer(item, isProof);
	if (!item._id) throw new Error();
	if (!id) throw new Error();
	if (id !== item._id) throw new Error();
	return true;
};

exports.validQuestion = function(question) {
	if (!question.title || !question.weightNote || question.weightNote !== 100) throw new Error();
	if (!question.options || question.options.length < 3) throw new Error();
	var numberCorrectAnswer = 0;
	question.options.forEach((option) => {
		if (!option.text) throw new Error();
		if (option.correctAnswer === true) {
			numberCorrectAnswer++;
		}
	});
	if (numberCorrectAnswer > 1 || numberCorrectAnswer <= 0) throw new Error();

	if (question.weightNote !== 100) throw new Error();
	return true;
};

exports.validQuestionUpdateDelete = function(id, question) {
	this.validQuestion(question);
	if (!question._id) throw new Error();
	if (!id) throw new Error();
	if (id !== question._id) throw new Error();
	return true;
};

exports.validUser = function(item) {
	if (!item.name || !item.email || !item.password) throw new Error();
	return true;
};

exports.validUserUpdateDelete = function(id, item) {
	this.validUser(item);
	if (!item._id) throw new Error();
	if (!id) throw new Error();
	if (id !== item._id) throw new Error();
	return true;
};
