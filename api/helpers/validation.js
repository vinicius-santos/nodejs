exports.validProof = function(proof) {
	if (!proof.name && proof.active !== true) return new Error();
	if (!proof.questions || proof.questions.length <= 0) return new Error();
	var numberWeighNote = 0;
	proof.questions.forEach((question) => {
		if (!question.title || !question.weightNote || question.weightNote > 100) return new Error();
		if (!question.options || question.options.length < 3) return new Error();
		var numberCorrectAnswer = 0;
		question.options.forEach((option) => {
			if (!option.text || !option.correctAnswer) return new Error();
			if (option.correctAnswer) {
				numberCorrectAnswer++;
			}
		});
		if (numberCorrectAnswer > 1 || numberCorrectAnswer <= 0) return new Error();
		numberWeighNote += question.weightNote;
	});
	if (numberWeighNote !== 100) return new Error();
	return true;
};

exports.validProofUpdateDelete = function(id, proof) {
	this.validProof(proof);
	if (!proof._id) return new Error();
	if (!id) return new Error();
	if (id !== proof._id) return new Error();
	return true;
};

function validCorrectWeightNote(question, number) {
	return (number += question.weightNote);
}
