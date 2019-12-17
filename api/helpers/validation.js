exports.validProof = function(proof) {
	if (!proof.name && proof.active !== true) return new Error();
	if (!proof.questions || proof.questions.length <= 0) return new Error();
	var numberWeighNote = 0;
	proof.questions.forEach((question) => {
		if (!question.title) return new Error(0);
		if (!question.options || question.options.length < 3) return new Error();
		var numberCorrectAnswer = 0;
		question.options.forEach((option) => {
			if (
				!option.text ||
				!option.correctAnswer ||
				!option.weightNote ||
				option.weightNote > 100 ||
				option.weightNote < 0
			)
				return new Error();
			validCorrectAnswer(option, numberCorrectAnswer);
			validCorrectWeightNote(option, numberWeighNote);
		});
		if (numberCorrectAnswer === 0 || numberCorrectAnswer > 1) return new Error();
	});
	if (numberWeighNote !== 100) return new Error();
};

exports.validProofUpdateDelete = function(id, proof) {
	validProof(proof);
	if (!proof.id) return new Error();
	if (!id) return new Error();
};

function validCorrectAnswer(option, number) {
	if (option.correctAnswer) {
		number++;
	}
}
function validCorrectWeightNote(option, number) {
	number += option.weightNote;
}
