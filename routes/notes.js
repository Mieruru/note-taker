const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');

// import fs and path
const fs = require('fs')
const path = require('path')

// function to compile notes from db.json
const returnNotes = () => {
  // read db.json
  const data = fs.readFileSync(path.join(__dirname, '../db/db.json'), 'utf8')

  // parse data to get array
  const notes = JSON.parse(data)

  // return notes
  return notes
}

// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
  // read db.json and return notes
  const notes = returnNotes()
  res.status(200).send(notes)
});

// POST Route for a new note
notes.post('/', (req, res) => {
  // create new note from request
  let newNote = req.body
  newNote.id = uuidv4()

  // read db.json and return notes
  const notes = returnNotes()

  // add new note to notes array
  notes.push(newNote)

  // write notes back to db.json
  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes, null, 2))
});

// DELETE Route for a specific note
notes.delete('/:id', (req, res) => {
  // TODO IF TIME PERMITTING SINCE OPTIONAL
});

module.exports = notes;
