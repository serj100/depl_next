import axios from 'axios'
import { useRouter } from 'next/router'

import { Scene3d } from '../../Components/Scene3d.js'
import { Hello } from '../../Components/Hello'
import { Note as Notec } from '../../Components/Note.js'

import { useSelector } from 'react-redux'

const Note = props => {
	const language = useSelector(state => state.language.status)

	return (
		<>
			<Scene3d variant='notes' />
			{/* <Hello text={language == 'en' ? data[0].title : data[0].title} /> */}
			<Hello
				text={language == 'en' ? `${props.data.title}` : `${props.data.title}`}
			/>
			<Notec body={props.data.body} />
		</>
	)
}

export async function getServerSideProps(ctx) {
	const res = await axios.get(
		`https://depl-next.vercel.app:3000/api/note/getOne?id=${ctx.params.note}`
	)

	const data = res.data.data[0]

	return { props: { data } }
}

export default Note
