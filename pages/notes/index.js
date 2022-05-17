import { Scene3d } from '../../Components/Scene3d.js'
import { Hello } from '../../Components/Hello'

import { useSelector } from 'react-redux'

const Notes = () => {
	const language = useSelector(state => state.language.status)

	return (
		<>
			<Scene3d variant='notes' />
			<Hello
				text={language == 'en' ? `No notes yet :(` : `Пока заметок нет :(`}
			/>
		</>
	)
}
export default Notes
