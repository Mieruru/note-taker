const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// import fs and path
const fs = require('fs')
const path = require('path')

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {

});

// POST Route for a new note
notes.post('/', (req, res) => {

});

// DELETE Route for a specific note
notes.delete('/:id', (req, res) => {

});

module.exports = notes;
