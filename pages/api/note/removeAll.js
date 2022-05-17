import connectMongo from '../../../utils/connectMongo'
import Note from '../../../models/Note'

export default async function create(req, res) {
	if (req.method === 'POST') {
		try {
			console.log('CONNECTING TO DB...')
			await connectMongo()
			console.log('REMOVING ALL NOTES.')
			await Note.remove({})
			console.log('SUCCESS. ALL NOTES REMOVED.')
			res.status(201).json({ message: 'SUCCESS. ALL NOTES REMOVED.' })
		} catch {
			res.status(500).json({ message: 'SOMETHING WENT WRONG.' })
			console.log('SOMETHING WENT WRONG.')
		}
	} else return
}
