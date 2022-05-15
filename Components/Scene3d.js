import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { animated, useSpring } from '@react-spring/web'

import User3d from './User3d.js'
import Phone3d from './Phone3d.js'
import Model404 from './Model404.js'
import Window from './Window3d.js'

const FadeIn = ({ children }) => {
	const styles = useSpring({
		from: {
			opacity: 0,
			height: '100%',
			widows: '100%',
			transition: 'all 1.4s ease 0s',
		},
		to: {
			opacity: 1,
			height: '100%',
			widows: '100%',
			transition: 'all 1.4s ease 0s',
		},
	})

	return <animated.div style={styles}>{children}</animated.div>
}

export const Scene3d = props => {
	const [rotationSpeed, setRotationSpeed] = useState(500)

	useEffect(() => {
		const lowSpeed = () => {
			setRotationSpeed(3)
		}
		setTimeout(lowSpeed, 1500)
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
					{/* <Window /> */}
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
					{/* <Window /> */}
				</>
			)
			break
	}

	return (
		<div className='scene3d__wrapper'>
			<FadeIn>
				<Canvas camera={{ position: [-6, 4, 4], zoom: 2, castShadow: true }}>
					<mesh>
						<OrbitControls
							autoRotate={true}
							enableZoom={false}
							enableRotate={true}
							enablePan={false}
							autoRotateSpeed={rotationSpeed}
						/>
						<hemisphereLight intensity={0.35} />

						<spotLight
							position={[1.5, 2, 2]}
							angle={0.9}
							penumbra={1}
							intensity={2}
							castShadow={true}
						/>

						<Suspense fallback={null}>{model}</Suspense>
					</mesh>
				</Canvas>
			</FadeIn>
		</div>
	)
}
