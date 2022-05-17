import connectMongo from '../../../utils/connectMongo'
import Note from '../../../models/Note'

export default async function getAll(req, res) {
	if (req.method === 'GET') {
		try {
			console.log('CONNECTING TO DB...')
			await connectMongo()

			console.log('WE RECEIVE NOTES...')
			const notes = await Note.find({})

			res.status(200).json({ message: 'SUCCESS', data: notes })
			console.log(`SUCCESS.`)
		} catch {
			res.status(500).json({ message: 'SOMETHING WENT WRONG.' })
			console.log('SOMETHING WENT WRONG.')
		}
	} else return
}
