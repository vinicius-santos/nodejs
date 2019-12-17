var model = [
	{
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
	}
];
