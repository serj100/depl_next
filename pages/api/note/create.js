import connectMongo from '../../../utils/connectMongo'
import Note from '../../../models/Note'

export default async function create(req, res) {
	if (req.method === 'POST') {
		try {
			const { title, body, image } = req.body

			console.log('CONNECTING TO DB...')
			await connectMongo()
			await Note.remove({})
			console.log('success')

			console.log('CREATING NOTE...')
			const note = await Note.create({ title, body, image })
			note.save()

			res.status(201).json({ message: 'NOTE HAS CREATED.' })
			console.log(`NOTE HAS CREATED.`)
		} catch {
			res.status(500).json({ message: 'NOTE WAS NOT CREATED.' })
			console.log('SOMETHING WENT WRONG.')
		}
	} else return
}
