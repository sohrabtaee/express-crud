import mongoose from 'mongoose'

const NoteSchema = mongoose.Schema(
  {
    title: String,
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model('Note', NoteSchema)
