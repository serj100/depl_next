import axios from 'axios'

import { Scene3d } from '../../Components/Scene3d.js'
import { Hello } from '../../Components/Hello'

import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const Notes = props => {
	const language = useSelector(state => state.language.status)

	return (
		<>
			<Scene3d variant='notes' />
			<Hello
				text={
					language == 'en'
						? `${!props.data.data ? 'No notes yet :(' : 'Notes.'}`
						: `${!props.data.data ? 'Пока заметок нет :(' : 'Заметки.'}`
				}
			/>
			{props.data.data.map(note => (
				<h1 key={toString(note.id)}>{note.title}</h1>
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
