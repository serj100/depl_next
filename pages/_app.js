import Layout from '../Components/Layout'
import { Provider } from 'react-redux'
import { store } from '../store'
import '../scss/style.scss'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}

export default MyApp
