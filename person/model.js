const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true, enum: ['male', 'female'] },
    location: { type: String },
    age: { type: Number }
});

module.exports = mongoose.model('Person', personSchema);