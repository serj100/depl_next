import { useSelector } from 'react-redux'
import Image from 'next/image'

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
				<div className='examples__wrapper'>
					<div className='example'>
						<div className='img'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='http://f0673816.xsph.ru/project1/'
							>
								<Image
									width={290}
									height={160}
									src='/img/project1/project1.png'
									alt=''
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
