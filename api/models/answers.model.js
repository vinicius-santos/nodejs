var model = [
	{
		name: String,
		nameUser: String,
		active: Boolean,
		finalGrade: Number,
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
	}
];
