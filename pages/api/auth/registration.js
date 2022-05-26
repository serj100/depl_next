import { resLog } from '../../../utils/resLog'
import StormDB from 'stormdb'
import bcrypt from 'bcryptjs'

export default async function registration(req, res) {
	if (req.method === 'POST') {
		try {
			const engine = new StormDB.localFileEngine('./db.stormdb')
			const db = new StormDB(engine)

			const { login, password } = JSON.parse(req.body)

			if (db.get('admins').value().length > 0) {
				resLog('USER_ALREADY_EXISTS', res, 400)
				return
			}
			db.default({ admins: [] })
			const hashPassword = await bcrypt.hash(password, 8)
			const id = await bcrypt.hash(
				`${login}-${password}-${new Date().toString()}`,
				1
			)

			db.get('admins').push({ id: id, login, password: hashPassword })
			db.save()
			resLog('USER_CREATED', res, 201)
		} catch {
			resLog('ERROR', res, 500)
		}
	} else return
}
