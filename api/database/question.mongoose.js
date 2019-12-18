var Question = require('../models/questions.model');
mongoose = require('mongoose');
message = require('../helpers/message');

const URL = 'mongodb://localhost:27017/lyncas-proof-db';
const options = {
	autoIndex: false,
	poolSize: 10,
	bufferMaxEntries: 0,
	useNewUrlParser: true,
	useUnifiedTopology: true
};

mongoose.connect(URL, options).catch((err) => {
	console.error('ERE002' + err.stack);
});

exports.all = async function() {
	return await Question.find();
};
exports.get = async function(id) {
	return await Question.findById(id);
};

exports.save = async function(data) {
	try {
		return await Question.create(data);
	} catch (err) {
		return new Error(err);
	}
};

exports.update = async function(id, data) {
	var result = await Question.findOneAndUpdate({ _id: id }, data, { new: true }, function(err, data) {
		if (err) new Error(err);
		return data;
	});
	return result;
};
exports.delete = async function(id, data) {
	data.active = false;
	var result = await Question.findOneAndUpdate({ _id: id }, data, { new: true }, function(err, data) {
		if (err) new Error(err);
		return data;
	});
	return result;
};
