import { Hello } from '../Components/Hello'
import { Partfolio } from '../Components/Partfolio'
import { ExampleLayouts } from '../Components/ExampleLayouts'
import { AboutMe } from '../Components/AboutMe'
import { ExampleTelegram } from '../Components/ExampleTelegram'
import { Scene3d } from '../Components/Scene3d'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { switchLanguage } from '../store/actions/switchLanguage'
import { useDispatch } from 'react-redux'

const Home = () => {
	const language = useSelector(state => state.language.status)

	const dispatch = useDispatch()

	useEffect(() => {
		if (localStorage.getItem('language') === 'ru') {
			dispatch(switchLanguage('ru'))
		} else {
			dispatch(switchLanguage('en'))
		}
	}, [])

	return (
		<>
			<Scene3d variant='user' />
			<Hello
				text={
					language == 'en'
						? `Hello! I am a JavaScript developer from Russia :)`
						: `Привет! Я JavaScript разработчик :)`
				}
			/>
			<AboutMe />
			<Partfolio />
			{/* <ExampleLayouts /> */}
			<ExampleTelegram />
		</>
	)
}
export default Home
