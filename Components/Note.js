import { useSelector } from 'react-redux'

export const Note = props => {
	const language = useSelector(state => state.language.status)

	return (
		<div className='note__wrapper'>
			<div
				className='note__text__wrapper'
				dangerouslySetInnerHTML={{ __html: props.body }}
			/>
		</div>
	)
}
