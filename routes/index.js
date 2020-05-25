import express from 'express'
import {
  getNotes,
  findNote,
  createNote,
  updateNote,
  removeNote,
} from '../services/noteService.js'

const router = express.Router()

router.get('/notes', getNotes)

router.get('/notes/:noteId', findNote)

router.post('/notes', createNote)

router.put('/notes/:noteId', updateNote)

router.delete('/notes/:noteId', removeNote)

export default router
