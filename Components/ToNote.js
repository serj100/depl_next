import Link from 'next/link'

const ToNote = props => {
	return (
		<Link href={`/notes/${props.id}`}>
			<div className='toNote'>
				<div className='window_title'>
					<div className='title'>
						<p>{props.title}</p>
					</div>
				</div>
				<div
					className='window_body'
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>
			</div>
		</Link>
	)
}

export default ToNote
