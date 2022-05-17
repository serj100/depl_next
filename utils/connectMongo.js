import mongoose from 'mongoose'

const connectMongo = async () => {
	try {
		mongoose.connect(
			'mongodb+srv://serj100:serj2251@cluster0.pkyo0.azure.mongodb.net/ilovedev?retryWrites=true&w=majority'
		)
		console.log('CONNECTED TO DB.')
	} catch (e) {
		console.log(e)
	}
}

export default connectMongo
