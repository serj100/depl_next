import Layout from '../Components/Layout'
import { Provider } from 'react-redux'
import { store } from '../store'
import '../scss/style.scss'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Layout>
				<NextNProgress
					color='#29D'
					startPosition={0.3}
					stopDelayMs={200}
					height={3}
					showOnShallow={true}
				/>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}

export default MyApp
