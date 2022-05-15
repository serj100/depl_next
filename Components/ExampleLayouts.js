import { useSelector } from 'react-redux'

export const ExampleLayouts = () => {
	const language = useSelector(state => state.language.status)

	return (
		<>
			<div className='subtitle__wrapper'>
				<p>
					{language == 'en'
						? `Examples of the quality of my layout:`
						: `Примеры качества верстки макетов:`}
				</p>
			</div>
			<div className='layouts__wrapper'>
				<div className='examples__wrapper _anim-items _start'>
					<div className='example'></div>
					<div className='example'></div>
					<div className='example'></div>
				</div>
			</div>
		</>
	)
}
