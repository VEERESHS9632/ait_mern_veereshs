const express = require('express');
const mongoose = require('mongoose');
const personController = require('./controllers/personController');

const mongoURI = 'mongodb://127.0.0.1:27017/nithin_db';
const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.post('/persons', personController.createPerson);
app.get('/persons', personController.readAllPersons);
app.get('/persons/:id', personController.readPersonById);
app.put('/persons/:id', personController.updatePersonById);
app.delete('/persons/:id', personController.deletePersonById);

// Start Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});