exports.calcProof = function(item) {
	try {
		item.questions.forEach((question) => {
			question.options.forEach((option) => {
				if (option.chosen === true && option.correctAnswer === true) {
					item.finalGrade += question.weightNote;
				}
			});
		});
		if (item.finalGrade < 0 || item.finalGrade > 100) throw new Error();
		return true;
	} catch (err) {
		throw new Error();
	}
};
