const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
	id: String,
	prefix: { 'type': String, 'default': '!' },
	logChannel: { 'type': String, 'default': '838490075011874837' },
	testChannel: { 'type': String, 'default': '981280378725761084' },
});

module.exports = mongoose.model('Guild', guildSchema);