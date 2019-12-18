exports.validProof = function(proof) {
	if (!proof.name && proof.active !== true)  throw new Error();
	if (!proof.questions || proof.questions.length <= 0)  throw new Error();
	var numberWeighNote = 0;
	proof.questions.forEach((question) => {
		if (!question.title || !question.weightNote || question.weightNote > 100)  throw new Error();
		if (!question.options || question.options.length < 3)  throw new Error();
		var numberCorrectAnswer = 0;
		question.options.forEach((option) => {
			if (!option.text)  throw new Error();
			if (option.correctAnswer === true) {
				numberCorrectAnswer++;
			}
		});
		if (numberCorrectAnswer > 1 || numberCorrectAnswer <= 0)  throw new Error();
		numberWeighNote += question.weightNote;
	});
	if (numberWeighNote !== 100)  throw new Error();
	return true;
};

exports.validProofUpdateDelete = function(id, proof) {
	this.validProof(proof);
	if (!proof._id)  throw new Error();
	if (!id)  throw new Error();
	if (id !== proof._id)   throw new Error();
	return true;
};

exports.validQuestion = function(question) {
	if (!question.title || !question.weightNote || question.weightNote !== 100)  throw new Error();
	if (!question.options || question.options.length < 3)  throw new Error();
	var numberCorrectAnswer = 0;
	question.options.forEach((option) => {
		if (!option.text)  throw new Error();
		if (option.correctAnswer === true) {
			numberCorrectAnswer++;
		}
	});
	if (numberCorrectAnswer > 1 || numberCorrectAnswer <= 0)  throw new Error();

	if (question.weightNote !== 100)  throw new Error();
	return true;
};

exports.validQuestionUpdateDelete = function(id, question) {
	this.validQuestion(question);
	if (!question._id)  throw new Error();
	if (!id)  throw new Error();
	if (id !== question._id)  throw new Error();
	return true;
};

