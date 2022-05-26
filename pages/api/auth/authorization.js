import StormDB from 'stormdb'
import { resLog } from '../../../utils/resLog'
import jwt from 'jsonwebtoken'
import config from 'config'
import Cors from 'cors'

const cors = Cors({
	methods: ['GET'],
	origin: ['https://depl-next.vercel.app'],
	allowedHeaders: ['Authorization'],
})

function runMiddleware(req, res, fn) {
	return new Promise((resolve, reject) => {
		fn(req, res, result => {
			if (result instanceof Error) {
				return reject(result)
			}

			return resolve(result)
		})
	})
}

export default async function authorization(req, res) {
	await runMiddleware(req, res, cors)

	if (req.method === 'GET') {
		try {
			const engine = new StormDB.localFileEngine('./db.stormdb')
			const db = new StormDB(engine)
			let id
			let token
			let newToken
			if (db.get('admins').value().length > 0) {
				token = req.headers.authorization.split(' ')[1] // забираем только токен из req.headers.authorization

				if (!token) return res.status(401).json({ message: 'AUTH_ERROR' })

				id = jwt.verify(token, config.get('secretKey')).id

				if (db.get('admins').value()[0].id !== id) {
					resLog({ message: 'THERE IS NO SUCH_USER' }, res, 400)
					return
				}
			}

			newToken = jwt.sign({ id: id }, config.get('secretKey'), {
				expiresIn: '30d',
			})

			resLog(
				{
					message: 'SUCCESS',
					token: newToken,
					login: db.get('admins').value()[0].login,
				},
				res,
				200
			)
		} catch {
			return res.status(401).json({ message: 'AUTH_ERROR' })
		}
	} else return
}
