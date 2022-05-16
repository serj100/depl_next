import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, Environment } from '@react-three/drei'

import User3d from './User3d.js'
import Phone3d from './Phone3d.js'
import Model404 from './Model404.js'

export const Scene3d = props => {
	const [rotationSpeed, setRotationSpeed] = useState(1)
	const boxRef = useRef()

	const fastRotate = (speed = 500) => {
		;(async () => {
			await setRotationSpeed(speed)
			await setTimeout(() => {
				setRotationSpeed(1)
			}, 500)
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
			<Canvas
				dpr={[1, 1.5]}
				shadows
				camera={{ position: [-7, 2.8, 3], zoom: 2, fov: 58 }}
			>
				<directionalLight
					castShadow
					intensity={0.8}
					position={[10, 10, 6]}
					shadow-mapSize={[1024, 1024]}
				/>
				<mesh castShadow receiveShadow ref={boxRef}>
					<OrbitControls
						autoRotate={true}
						enableZoom={false}
						enableRotate={true}
						enablePan={false}
						autoRotateSpeed={rotationSpeed}
					/>
					<ambientLight intensity={0.25} />
					<Environment preset='dawn' />

					<Suspense fallback={null}>{model}</Suspense>
				</mesh>
			</Canvas>
		</div>
	)
}
