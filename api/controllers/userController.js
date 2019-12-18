message = require('../helpers/message');
const database = require('../database/user.mongoose');
var valid = require('../helpers/validation');

exports.all = async function(req, res) {
	try {
		res.json(await database.all());
	} catch (err) {
		var response = `${message('ERROR', 'ERE001')}`;
		return new  Error(response);
	}
};
exports.get = async function(req, res) {
	try {
		res.json(await database.get(req.params.id));
	} catch (err) {
		var response = `${message('ERROR', 'ERE001')}`;
		return new  Error(response);
	}
};
exports.create = async function(req, res) {
	try {
		valid.validUser(req.body);
		var result = await database.save(req.body);
		res.json(result);
	} catch (err) {
		console.log(err);
		var response = `${message('ERROR', 'ERE003')}`;
		return new  Error(response);
	}
};
exports.update = async function(req, res) {
	try {
		valid.validUserUpdateDelete(req.params.id, req.body);
		var result = await database.update(req.params.id, req.body);
		res.json(result);
	} catch (err) {
		var response = `${message('ERROR', 'ERE004')}`;
		return new  Error(response);
	}
};

