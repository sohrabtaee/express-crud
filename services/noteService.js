import NoteModel from '../models/noteModel.js'

// Find all
export const getNotes = async (req, res, next) => {
  try {
    const notes = await NoteModel.find({})
    res.json(notes)
  } catch (error) {
    next(error)
  }
}

// Find one by Id
export const findNote = async (req, res, next) => {
  try {
    const notes = await NoteModel.findById(req.params.noteId)
    res.json(notes)
  } catch (error) {
    next(error)
  }
}

// Create
export const createNote = async (req, res, next) => {
  try {
    const note = new NoteModel(req.body)
    const result = await note.save()
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
}

// Update
export const updateNote = async (req, res, next) => {
  try {
    const result = await NoteModel.findByIdAndUpdate(
      req.params.noteId,
      req.body,
      { new: true }
    )
    if (result) {
      res.json(result)
    } else {
      next(new Error('Note not found.'))
    }
  } catch (error) {
    next(error)
  }
}

// Delete
export const removeNote = async (req, res, next) => {
  try {
    const result = await NoteModel.findByIdAndRemove(req.params.noteId)
    if (result) {
      res.json({
        message: 'Note deleted successfully.',
      })
    } else {
      next(new Error('Note not found.'))
    }
  } catch (error) {
    next(error)
  }
}
