import { useSelector } from 'react-redux'
import Link from 'next/link'

export const Footer = () => {
	const language = useSelector(state => state.language.status)

	return (
		<>
			<div className='footer__wrapper'>
				<div className='year'>
					<p>2022.</p>
				</div>
				<div className='rights'>
					<p>
						{language == 'en' ? `All rights reserved.` : `Все права защищены.`}
					</p>
				</div>
			</div>
		</>
	)
}
