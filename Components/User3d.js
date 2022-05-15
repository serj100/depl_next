import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {Bloom, EffectComposer, Noise} from "@react-three/postprocessing"

export default function Model({ ...props }) {
	const group = useRef()
	const { nodes, materials } = useGLTF('../model/user.glb')
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.I.geometry}
				material={materials.palette}
				position={[0.32, -1, -1.12]}
				rotation={[Math.PI / 2, 0, 0]}
				
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

useGLTF.preload('../model/user.glb')
