import Link from 'next/link'

export const Hello = props => {
	return (
		<div className={!props.back ? 'hello center' : 'hello'}>
			<div className={!props.back ? 'text__wrapper center' : 'text__wrapper'}>
				<p>{props.text}</p>
			</div>
			<Link href='/notes'>
				<div className={!props.back ? 'exitButton center' : 'exitButton'}>
					<span></span>
				</div>
			</Link>
		</div>
	)
}
