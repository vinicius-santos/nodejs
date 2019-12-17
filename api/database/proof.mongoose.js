var Proof = require('../models/proofs.model');
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
	return await Proof.find();
};
exports.get = async function(id) {
	return await Proof.findById(id);
};

exports.save = async function(data) {
	try {
		return await Proof.create(data);
	} catch (err) {
		return new Error(err);
	}
};

exports.update = async function(id, data) {
	Proof.update({ _id: id }, data, { upsert: false }, function(err, data) {
		if (err) new Error(err);
		return data;
	});
};
exports.delete = async function(id, data) {
	data.active = false;
	Proof.update({ _id: id }, data, { upsert: false }, function(err, data) {
		if (err) new Error(err);
		return data;
	});
};
