const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({}, { strict: false, versionKey: false });

const EmailModel = mongoose.model('emaildata', parkingSchema);

module.exports = EmailModel;
