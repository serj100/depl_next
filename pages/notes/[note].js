import axios from 'axios'
import { Scene3d } from '../../Components/Scene3d.js'
import { Hello } from '../../Components/Hello'
import { Note as Notec } from '../../Components/Note.js'

import { useSelector } from 'react-redux'

const Note = props => {
	const language = useSelector(state => state.language.status)

	return (
		<>
			<Scene3d variant='notes' />

			<Hello
				back={true}
				text={language == 'en' ? `${props.data.title}` : `${props.data.title}`}
			/>
			<Notec body={props.data.body} />
		</>
	)
}

export async function getServerSideProps(ctx) {
	const res = await axios.get(
		`https://depl-next.vercel.app/api/note/getOne?_id=${ctx.params.note}`
		// `http://localhost:3000/api/note/getOne?_id=${ctx.params.note}`
	)

	const data = res.data.data

	return { props: { data } }
}

export default Note
