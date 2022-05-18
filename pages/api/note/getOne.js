import connectMongo from '../../../utils/connectMongo'
import Note from '../../../models/Note'

export default async function getOne(req, res) {
	if (req.method === 'GET') {
		try {
			console.log('CONNECTING TO DB...')
			await connectMongo()

			console.log('WE RECEIVE NOTE...')
			const note = await Note.findById(req.query._id)
			// console.log(req.query._id)
			res.status(200).json({ message: 'SUCCESS', data: note })
			console.log(`SUCCESS.`)
		} catch {
			res.status(500).json({ message: 'SOMETHING WENT WRONG.' })
			console.log('SOMETHING WENT WRONG.')
		}
	} else return
}
