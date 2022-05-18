import Link from 'next/link'

export const Hello = props => {
	return (
		<div className={!props.back ? 'hello__wrapper center' : 'hello__wrapper'}>
			<div className={!props.back ? 'text__wrapper center' : 'text__wrapper'}>
				<p>{props.text}</p>
			</div>
			<Link href='/notes'>
				<div
					className={
						!props.back ? 'exitButton__wrapper center' : 'exitButton__wrapper'
					}
				>
					<span></span>
				</div>
			</Link>
		</div>
	)
}
