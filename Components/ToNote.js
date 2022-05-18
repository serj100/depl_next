import Link from 'next/link'

const ToNote = props => {
	return (
		<Link href={`/notes/${props.id}`}>
			<div className='toNote__wrapper'>
				<div className='title__wrapper'>
					<div className='title'>
						<p>{props.title}</p>
					</div>
				</div>
				<div className='body__wrapper'>
					<div
						className='body'
						dangerouslySetInnerHTML={{ __html: props.body }}
					/>
				</div>
			</div>
		</Link>
	)
}

export default ToNote
