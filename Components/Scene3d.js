import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

import User3d from './User3d.js'
import Phone3d from './Phone3d.js'
import Model404 from './Model404.js'

export const Scene3d = props => {
	const [rotationSpeed, setRotationSpeed] = useState(1)

	const fastRotate = (speed = 500) => {
		;(async () => {
			await setRotationSpeed(speed)
			await setTimeout(() => {
				setRotationSpeed(1)
			}, 1000)
		})()
	}

	useEffect(() => {
		fastRotate()
	}, [])

	let model = <Phone3d />

	switch (props.variant) {
		case 'phone': {
			model = <Phone3d />
			break
		}
		case 'user': {
			model = (
				<>
					<User3d />
				</>
			)
			break
		}
		case '404': {
			model = <Model404 />
			break
		}
		default:
			model = (
				<>
					<User3d />
				</>
			)
			break
	}

	return (
		<div className='scene3d__wrapper'>
			<Canvas shadowMap camera={{ position: [-7, 2.8, 3], zoom: 2, fov: 58 }}>
				<mesh
					onClick={() => {
						fastRotate(1000)
					}}
				>
					<OrbitControls
						autoRotate={true}
						enableZoom={false}
						enableRotate={false}
						enablePan={false}
						autoRotateSpeed={rotationSpeed}
					/>
					<ambientLight intensity={1} />
					<Environment preset='warehouse' />
					<directionalLight position={[10, 10, 5]} intensity={1} />
					<pointLight position={[2, 3, 5]} intensity={0.03} />

					<Suspense fallback={null}>{model}</Suspense>
				</mesh>
				{/* <mesh
						position={[0, -1, 0]}
						rotation={[-Math.PI / 2, 0, 0]}
						receiveShadow
					>
						<planeBufferGeometry attach='geometry' args={[1000, 1000]} />
						<meshPhongMaterial attach='material' color='#2c2c2c' />
					</mesh> */}
			</Canvas>
		</div>
	)
}
