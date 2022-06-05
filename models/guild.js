const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
	id: String,
	prefix: { 'type': String, 'default': '!' },
	logChannel: { 'type': String, 'default': '981280378725761084' },
	testChannel: { 'type': String, 'default': '981281951837204550' },
});

module.exports = mongoose.model('Guild', guildSchema);