import axios from 'axios'
import { Scene3d } from '../../Components/Scene3d.js'
import { Hello } from '../../Components/Hello'
import { useSelector } from 'react-redux'
import ToNote from '../../Components/ToNote.js'

const Notes = props => {
	const language = useSelector(state => state.language.status)

	return (
		<>
			<Scene3d variant='notes' />
			<Hello
				text={
					language == 'en'
						? `${props.data.data.length === 0 ? 'No notes yet :(' : 'Notes.'}`
						: `${
								props.data.data.length === 0
									? 'Пока заметок нет :('
									: 'Заметки.'
						  }`
				}
			/>
			{props.data.data.map(note => (
				<ToNote
					key={note._id}
					id={note._id}
					title={note.title}
					body={note.body}
				/>
			))}
		</>
	)
}

export async function getServerSideProps() {
	const res = await axios.get('https://depl-next.vercel.app/api/note/getAll')
	// const res = await axios.get('http://localhost:3000/api/note/getAll')
	const data = res.data
	return { props: { data } }
}

export default Notes
