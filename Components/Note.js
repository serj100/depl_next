import { useSelector } from 'react-redux'

export const Note = props => {
	const language = useSelector(state => state.language.status)

	return (
		<div className='about_me__wrapper'>
			<div className='last_subtitle__wrapper'>
				<p>{language === 'ru' ? props.body : props.body}</p>
			</div>
		</div>
	)
}
