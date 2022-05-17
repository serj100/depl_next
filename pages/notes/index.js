import axios from 'axios'

import { Scene3d } from '../../Components/Scene3d.js'
import { Hello } from '../../Components/Hello'

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const Notes = props => {
	const language = useSelector(state => state.language.status)

	const [notes, setNotes] = useState([])

	useEffect(() => {
		setNotes(props.data)
	}, [])

	return (
		<>
			<Scene3d variant='notes' />
			<Hello
				text={
					language == 'en'
						? `${!notes ? 'No notes yet :(' : 'Notes.'}`
						: `${!notes ? 'Пока заметок нет :(' : 'Заметки.'}`
				}
			/>
			{props.data.data.map(note => (
				<h1>{note.title}</h1>
			))}
		</>
	)
}

export async function getServerSideProps() {
	const res = await axios.get('http://localhost:3000/api/note/getAll')

	const data = res.data

	return { props: { data } }
}

export default Notes
