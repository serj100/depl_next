import Image from 'next/image'
import { useSelector } from 'react-redux'

export const Portfolio = () => {
	const language = useSelector(state => state.language.status)

	return (
		<>
			<div className='subtitle_out_block'>
				<p>{language === 'en' ? 'Some portfolio:' : 'Немного портфолио:'}</p>
			</div>
			<section>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://play.google.com/store/apps/details?id=com.phonebookwithoutexpo&hl=ru&gl=US'
				>
					<div className='portfolio__app'>
						<div className='icon_app'>
							<div className='image'>
								<Image
									width={180}
									height={180}
									src='/img/partfolio/first_app.webp'
									alt=''
								/>
							</div>
						</div>
						<div className='portfolio__title_wrapper'>
							<div className='title'>
								<p>
									{language === 'en'
										? `Directory of the agro-industrial complex of the Voronezh region
								(Russia)`
										: `Справочник АПК Воронежской области`}
								</p>
							</div>
							<div className='subtitle'>
								<p>
									{language === 'en'
										? `More than 1000 contacts of agricultural enterprises of the
								Voronezh areas.`
										: `Более 1000 контактов сельскохозяйственных предприятий Воронежской области.`}
								</p>
							</div>
							<div className='gp_icon'>
								<div className='img'>
									<Image
										width={153}
										height={46}
										src='/img/partfolio/gp.png'
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</a>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href='https://play.google.com/store/apps/details?id=com.AvanturDev.Chmishenko_V_A&hl=ru&gl=US'
				>
					<div className='portfolio__app'>
						<div className='icon_app'>
							<div className='image'>
								<Image
									width={180}
									height={180}
									src='/img/partfolio/second_app.webp'
									alt=''
								/>
							</div>
						</div>
						<div className='portfolio__title_wrapper'>
							<div className='title'>
								<p>
									{language === 'en'
										? `Chat with Zhmyshenko V.A.`
										: `Чат с Жмышенко В. А.`}
								</p>
							</div>
							<div className='subtitle'>
								<p>
									{language === 'en'
										? `A well-known blogger now lives in an android application.`
										: `Жмышенко В. А., Жмых, Пожилой паточник, ЖМА... Узнали персонажа?)`}
								</p>
							</div>
							<div className='gp_icon'>
								<div className='img'>
									<Image
										width={153}
										height={46}
										src='/img/partfolio/gp.png'
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</a>
			</section>
		</>
	)
}
