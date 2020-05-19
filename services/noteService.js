import NoteModel from '../models/noteModel.js'

// Read
export const getNotes = async () => {
  return NoteModel.find({})
}

export const findNote = async (noteId) => {
  return NoteModel.findOne({ _id: noteId })
}

// Create
export const createNote = async (date) => {
  const note = new NoteModel(date)
  return note.save()
}

// Update
export const updateNote = async (noteId, data) => {
  return NoteModel.findByIdAndUpdate(noteId, data)
}

// Delete
export const removeNote = async (noteId) => {
  return await NoteModel.findByIdAndRemove(noteId)
}
