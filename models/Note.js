import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema({
	id: { type: Number },
	title: { type: String },
	body: { type: String },
	image: { type: String },
})

const Note = mongoose.models.Note || mongoose.model('Note', NoteSchema)
export default Note
