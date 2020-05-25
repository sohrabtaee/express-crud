import express from 'express'
import {
  getNotes,
  createNote,
  updateNote,
  removeNote,
} from '../services/noteService.js'

const router = express.Router()

router.get('/notes', async (req, res, next) => {
  try {
    const notes = await getNotes()
    res.json(notes)
  } catch (error) {
    next(error)
  }
})

router.post('/notes', async (req, res, next) => {
  try {
    const result = await createNote(req.body)
    res.status(201).json(result)
  } catch (error) {
    next(error)
  }
})

router.put('/notes/:noteId', async (req, res, next) => {
  try {
    const result = await updateNote(req.params.noteId, req.body)
    if (result) {
      res.json(result)
    } else {
      next(new Error('Note not found.'))
    }
  } catch (error) {
    next(error)
  }
})

router.delete('/notes/:noteId', async (req, res, next) => {
  try {
    const result = await removeNote(req.params.noteId)
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
})

export default router
