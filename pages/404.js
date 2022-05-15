import { Scene3d } from '../Components/Scene3d'
import { Hello } from '../Components/Hello'

const page404 = () => {
	return (
		<>
			<Scene3d variant='404' />
			<Hello text='404' />
		</>
	)
}

export default page404
