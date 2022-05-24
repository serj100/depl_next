import { useSelector } from 'react-redux'
import Image from 'next/image'

export const AboutMe = () => {
	const language = useSelector(state => state.language.status)

	return (
		<section className='about_me'>
			<div className='photo__img'>
				<Image width={960} height={1280} src='/img/photo.jpg' alt='' />
			</div>
			<div className='about_me__description'>
				<h3>{language === 'ru' ? 'Сергей Козлов' : 'Sergey Kozlov'}</h3>
				<div className='subtitle'>
					<p>
						{' '}
						{language === 'ru' ? 'Немного обо мне:' : 'Something about me:'}
					</p>
				</div>
				<div className='subtitle'>
					<p>
						{language === 'ru'
							? `Занимаюсь версткой шаблонов сайтов. Пишу на JavaScript. Любимые технологии - NodeJS, React JS, React Native, Gulp❤️, webpack, SCSS.`
							: `I live and work in Russia. Freelancing in the field web templates sites. Favoritetechnologies - NodeJS, React JS, React Native, Gulp ❤️, webpack, SCSS.`}
					</p>
				</div>
			</div>
		</section>
	)
}
