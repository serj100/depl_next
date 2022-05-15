import Image from 'next/image'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { switchBurger } from '../store/actions/switchBurger'
import { switchLanguage } from '../store/actions/switchLanguage'

export const Header = () => {
	const dispatch = useDispatch()
	const burgerStatus = useSelector(state => state.burgerStatus.status)
	const language = useSelector(state => state.language.status)

	const burgerHandler = () => {
		if (!burgerStatus) {
			dispatch(switchBurger(true))
		} else {
			dispatch(switchBurger(false))
		}
	}

	const languageHandler = () => {
		if (language === 'en') {
			dispatch(switchLanguage('ru'))
			localStorage.setItem('language', 'ru')
		} else {
			dispatch(switchLanguage('en'))
			localStorage.setItem('language', 'en')
		}
	}

	return (
		<header className='header'>
			<div className='container__header'>
				<div className='header__body'>
					<Link href='/'>
						<a href='#' className='header__logo'>
							<h2>
								{language === 'ru'
									? 'Козлов Сергей (JS dev)'
									: 'Kozlov Sergey (JS dev)'}
							</h2>
						</a>
					</Link>

					<div
						onClick={() => {
							burgerHandler()
						}}
						className={`header__burger ${burgerStatus && 'active'}`}
					>
						<span className={`${burgerStatus && 'active'}`}></span>
					</div>

					<nav className={`header__menu ${burgerStatus && 'active'}`}>
						<ul className='header__list'>
							<Link href='https://github.com/serj100'>
								<li>
									<Image
										width={20}
										height={20}
										src='/img/header/GitHub.svg'
										alt=''
									/>
									<a target='_self'>GitHub</a>
								</li>
							</Link>
							<Link href='/contacts'>
								<li>
									<a>{language === 'ru' ? 'Контакты' : 'Contacts'}</a>
								</li>
							</Link>
							<Link href='/'>
								<li>
									<a>{language === 'ru' ? 'Главная страница' : 'Main page'}</a>
								</li>
							</Link>
							<li>
								<a
									onClick={() => {
										languageHandler()
									}}
								>
									{language === 'ru' ? '🇺🇸' : '🇷🇺'}
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	)
}
