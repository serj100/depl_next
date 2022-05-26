import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/actions/setUser'

const Layout = ({ children }) => {
	const dispatch = useDispatch()

	const logIn = (token, login) => {
		dispatch(setUser({ token: token, login: login }))
		localStorage.setItem('token', token)
		localStorage.setItem('login', login)
	}
	const logOut = () => {
		dispatch(setUser({ token: null, login: null }))
		localStorage.removeItem('token')
		localStorage.removeItem('login')
	}
	const auth = async () => {
		await axios
			.get('http://localhost:3000/api/auth/authorization', {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			.then(res => {
				if (res.status === 200) {
					logIn(res.data.token, res.data.login)
				}
			})
			.catch(e => {
				logOut()
			})
	}

	useEffect(() => {
		auth()
	}, [])

	return (
		<div className='container'>
			<Header />
			{children}
			<Footer />
		</div>
	)
}

export default Layout
