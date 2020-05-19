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
    await updateNote(req.params.noteId, req.body)
    res.send()
  } catch (error) {
    next(error)
  }
})

router.delete('/notes/:noteId', async (req, res, next) => {
  try {
    await removeNote(req.params.noteId)
    res.send()
  } catch (error) {
    next(error)
  }
})

export default router
