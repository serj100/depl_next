import { useSelector } from 'react-redux'

export const ContactsComponent = () => {
	const language = useSelector(state => state.language.status)

	return (
		<div className='about_me__wrapper'>
			<h3>{language == 'en' ? `Sergey Kozlov` : `Сергей Козлов`}</h3>
			<div className='secont_subtitle__wrapper'>
				<p>{language == 'en' ? `Contacts:` : `Контакты:`}</p>
			</div>
			<div className='last_subtitle__wrapper'>
				<p>Telegram: @Avanturist100</p>
				<p>Email: avanturist.mailbox@gmail.com</p>
			</div>
		</div>
	)
}
