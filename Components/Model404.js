import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {Bloom, EffectComposer, Noise} from "@react-three/postprocessing"

export default function Model({ ...props }) {
	const group = useRef()
	const { nodes, materials } = useGLTF('../model/404.glb')
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes['404'].geometry}
				material={materials.palette}
				rotation={[Math.PI / 2, 0, 0]}
				scale={2}
				position={[0, -1, 0]}
			/>
			<EffectComposer>
				<Bloom
					luminanceThreshold={0}
					luminanceSmoothing={0.1}
					height={400}
					opacity={0.1}
				></Bloom>
				{/*<Noise opacity={0.02} />*/}
			</EffectComposer>
		</group>
	)
}

useGLTF.preload('../model/404.glb')
