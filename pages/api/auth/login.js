import StormDB from 'stormdb'
import { resLog } from '../../../utils/resLog'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'
import Cors from 'cors'

const cors = Cors({
	methods: ['POST'],
	origin: [
		'https://depl-next.vercel.app',
		'https://www.ilovedev.ru',
		'https://ilovedev.ru',
		'http://depl-next.vercel.app',
		'http://www.ilovedev.ru',
		'http://ilovedev.ru',
	],
	// allowedHeaders: ['Authorization'],
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

export default async function login(req, res) {
	await runMiddleware(req, res, cors)
	if (req.method === 'POST') {
		try {
			const { login, password } = JSON.parse(req.body)

			const engine = new StormDB.localFileEngine('./db.stormdb')
			const db = new StormDB(engine)

			let id

			if (db.get('admins').value()[0].login) {
				if (db.get('admins').value()[0].login !== login) {
					resLog({ message: 'USER_NOT_FOUND_OR_NOT_EXISTS' }, res, 400)
					return
				}
				id = db.get('admins').value()[0].id
			}
			const isPasswordValid = bcrypt.compareSync(
				password,
				db.get('admins').value()[0].password
			)
			if (!isPasswordValid) {
				resLog({ message: 'INCORRECT_PASSWORD_OR_LOGIN' }, res, 400)
				return
			}

			const token = jwt.sign({ id: id }, config.get('secretKey'), {
				expiresIn: '30d',
			})

			resLog(
				{
					message: 'SUCCESS',
					token: token,
					login: db.get('admins').value()[0].login,
				},
				res,
				200
			)
		} catch (e) {
			resLog({ message: e }, res, 500)
		}
	} else return
}
