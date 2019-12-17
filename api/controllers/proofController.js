message = require('../helpers/message');
const database = require('../database/proof.mongoose');

exports.all = async function() {
	try {
		res.json(await database.all());
	} catch (err) {
		var response = `${message('ERROR', 'ERE001')}`;
		res.json(response);
	}
};
exports.get = async function(id) {
	try {
		res.json(await database.get(req.params.id));
	} catch (err) {
		var response = `${message('ERROR', 'ERE001')}`;
		res.json(response);
	}
};
exports.create = async function(data) {
	try {
		var result = await database.save(req.body);
		res.json(result);
	} catch (error) {
		var response = `${message('ERROR', 'ERE003')}`;
		res.json(response);
	}
};
exports.update = async function(id, data) {
	try {
		var result = await database.update(req.params.id, req.body);
		res.json(result);
	} catch (err) {
		var response = `${message('ERROR', 'ERE004')}`;
		res.json(response);
	}
};
exports.delete = async function(id) {
	try {
		await database.delete(req.params.id);
		var response = `${message('SUCCESS', 'SRE003')}`;
		res.json(response);
	} catch (err) {
		var response = `${message('ERROR', 'ERE005')}`;
		res.json(response);
	}
};
