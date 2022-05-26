import { Scene3d } from '../../Components/Scene3d'
import { Hello } from '../../Components/Hello'
import { useInput } from '../../hooks/input.hook'
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setUser } from '../../store/actions/setUser'

const admin = () => {
	const language = useSelector(state => state.language.status)
	const user = useSelector(state => state.userInfo)
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

	const input = {
		login: useInput('', {
			isEmpty: false,
		}),
		password: useInput('', {
			isEmpty: false,
			isEmail: false,
		}),
	}

	const loginHandler = async () => {
		let data = {
			login: input.login.value,
			password: input.password.value,
		}
		const headers = {
			headers: {
				'Content-Type': 'text/plain',
			},
		}
		await axios
			.post(`https://depl-next.vercel.app/api/auth/login`, data, headers)
			.then(res => {
				if (res.status === 200) {
					logIn(res.data.token, res.data.login)
				} else {
					logOut()
				}
			})
			.catch(() => {
				logOut()
			})
	}

	return (
		<>
			<Scene3d variant='404' />

			<Hello
				onClick={user.token ? logOut : null}
				back={user.token ? true : null}
				text={
					user.login
						? language === 'en'
							? `Hello, ${user.login}`
							: `Привет, ${user.login}`
						: language == 'en'
						? 'Admin'
						: 'Админ'
				}
			/>
			<div className='login_window'>
				<Input
					type='text'
					setValue={input.login.value}
					placeholder={language === 'en' ? 'Login' : 'Логин'}
					onChange={e => input.login.onChange(e)}
				/>
				<Input
					type='password'
					setValue={input.password.value}
					placeholder={language === 'en' ? 'Password' : 'Пароль'}
					onChange={e => input.password.onChange(e)}
				/>
				<Button
					onClick={loginHandler}
					text={language == 'en' ? 'Enter' : 'Войти'}
				/>
			</div>
		</>
	)
}

export default admin
