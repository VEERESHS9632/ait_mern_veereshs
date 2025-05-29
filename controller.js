const Person = require('../models/Person');

exports.createPerson = async (req, res) => {
    try {
        const person = new Person(req.body);
        const savedPerson = await person.save();
        res.status(201).json(savedPerson);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.readAllPersons = async (req, res) => {
    try {
        const persons = await Person.find();
        res.json(persons);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.readPersonById = async (req, res) => {
    try {
        const personId = req.params.id;
        const person = await Person.findById(personId);
        if (!person) return res.status(404).json({ message: `Person with id ${personId} not found` });
        res.json(person);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.updatePersonById = async (req, res) => {
    try {
        const personId = req.params.id;
        const updatedPerson = await Person.findByIdAndUpdate(personId, req.body, { new: true, runValidators: true });
        if (!updatedPerson) return res.status(404).json({ message: `Person with id ${personId} not found` });
        res.json(updatedPerson);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deletePersonById = async (req, res) => {
    try {
        const personId = req.params.id;
        const deletedPerson = await Person.findByIdAndDelete(personId);
        if (!deletedPerson) return res.status(404).json({ message: `Person with id ${personId} not found` });
        res.json({ message: `Person with id ${personId} deleted` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};