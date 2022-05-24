import { useSelector } from 'react-redux'

export const ContactsComponent = () => {
	const language = useSelector(state => state.language.status)

	return (
		<section className='contacts'>
			<div className='contacts__description'>
				<h3>{language == 'en' ? `Sergey Kozlov` : `Сергей Козлов`}</h3>
				<div className='subtitle'>
					<p>{language == 'en' ? `Contacts:` : `Контакты:`}</p>
				</div>
				<div className='subtitle'>
					<p>Telegram: @Avanturist100</p>
					<p>Email: avanturist.mailbox@gmail.com</p>
					<p>
						Резюме на HeadHunter:{' '}
						<a
							target='_blank'
							rel='noopener noreferrer'
							href='https://voronezh.hh.ru/resume/f206598cff07a043020039ed1f7444345a6844'
						>
							JavaScript разработчик
						</a>
					</p>
				</div>
			</div>
		</section>
	)
}
