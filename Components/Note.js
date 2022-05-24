export const Note = props => {
	return (
		<div className='note__wrapper'>
			<div
				className='note__text_wrapper'
				dangerouslySetInnerHTML={{ __html: props.body }}
			/>
		</div>
	)
}
