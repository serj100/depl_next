import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'

const Layout = ({ children }) => {
	return (
		<div className='container'>
			<Header />
			<div className='container__content'>
				{children}
				<Footer />
			</div>
		</div>
	)
}

export default Layout
