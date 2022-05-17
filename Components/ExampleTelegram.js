import Image from 'next/image'
import { useSelector } from 'react-redux'

export const ExampleTelegram = () => {
	const language = useSelector(state => state.language.status)
	return (
		<>
			<div className='subtitle__wrapper'>
				<p>
					{language == 'en'
						? `Developments in Telegram:`
						: `Мои Телеграм боты:`}
				</p>
			</div>

			<div className='telegram_examples__wrapper'>
				<div className='tm_example__wrapper'>
					<div className='icon'>
						<Image
							width={40}
							height={40}
							src='/img/tm_examples/telegram.svg'
							alt=''
						/>
					</div>
					<div className='title'>
						<p>@KindAssistantBot</p>
					</div>
				</div>
				<div className='im_example__wrapper'>
					<div className='icon'>
						<Image
							width={40}
							height={40}
							src='/img/tm_examples/github.svg'
							alt=''
						/>
					</div>
					<div className='title'>
						<a
							target='_blank'
							href='https://github.com/serj100/Telegram-Switch-Bot'
						>
							<p>https://github.com/serj100/Telegram-Switch-Bot</p>
						</a>
					</div>
				</div>
				<div className='title'>
					<p>
						{language == 'en'
							? `Telegram bot, which greatly simplified my work in Yandex. I'll leave this here to demonstrate how to write Telegram
bots. The bot replaces the text in the link like [Link
description](link) to ((Link to description link)) and vice versa.`
							: `Телеграм-бот, который значительно упростил мне работу в Яндексе. Оставлю это здесь для демонстрации написания Telegram
ботов. Бот заменяет в ссылке текст вида [Ссылка
описание](ссылка) на ((Ссылка на описание ссылка)) и наоборот.`}
					</p>
				</div>
			</div>
		</>
	)
}
