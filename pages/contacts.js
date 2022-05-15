import { Scene3d } from '../Components/Scene3d'
import { Hello } from '../Components/Hello'
import { ContactsComponent } from '../Components/ContactsComponent'
import { useSelector } from 'react-redux'

const Сontacts = () => {
	const language = useSelector(state => state.language.status)

	return (
		<>
			<Scene3d variant='phone' />
			<Hello text={language == 'en' ? `Contact me.` : `Связаться со мной.`} />
			<ContactsComponent />
		</>
	)
}
export default Сontacts
