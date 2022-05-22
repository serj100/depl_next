import { useSelector } from 'react-redux'
import Image from 'next/image'

export const ExampleLayouts = () => {
	const language = useSelector(state => state.language.status)

	return (
		<>
			<div className='subtitle_out_block'>
				<p>
					{language == 'en'
						? `Examples of the quality of my layout:`
						: `Примеры верстки макетов:`}
				</p>
			</div>

			<div className='layouts_ex'>
				<div className='layouts__exexamples_wrapper'>
					<div className='layouts__example'>
						<div className='layouts__ex_img'>
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
					<div className='layouts__example'>
						<div className='layouts__ex_img'>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='http://f0673816.xsph.ru/project2/'
							>
								<Image
									width={290}
									height={160}
									src='/img/project1/project2.png'
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
