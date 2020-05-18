import express from 'express'

const router = express.Router()

router.get('/notes', (req, res) => {
  res.json('notes')
})

router.post('/notes', (req, res) => {
  res.status(201)
  res.send('note created')
})

router.put('/notes/:noteId', (req, res) => {
  res.send(`note ${req.params.noteId} edited`)
})

router.delete('/notes/:noteId', (req, res) => {
  res.send(`note ${req.params.noteId} deleted`)
})

export default router
