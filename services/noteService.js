import NoteModel from '../models/noteModel.js'

// Find all
export const getNotes = async () => {
  return NoteModel.find({})
}

// Find one by Id
export const findNote = async (noteId) => {
  return NoteModel.findById(noteId)
}

// Create
export const createNote = async (data) => {
  const note = new NoteModel(data)
  return note.save()
}

// Update
export const updateNote = async (noteId, data) => {
  return NoteModel.findByIdAndUpdate(noteId, data, { new: true })
}

// Delete
export const removeNote = async (noteId) => {
  return await NoteModel.findByIdAndRemove(noteId)
}
