export const resLog = (obj, res, code) => {
	if (code) {
		res.status(code).json(obj)
		console.log(obj)
	} else {
		console.log(obj)
	}
}
