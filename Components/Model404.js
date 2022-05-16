import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
	const group = useRef()
	const { nodes, materials } = useGLTF('../model/404.glb')
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes['404'].geometry}
				material={materials.palette}
				rotation={[Math.PI / 2, 0, 0]}
				scale={2}
				position={[0, -1, 0]}
			/>
		</group>
	)
}

useGLTF.preload('../model/404.glb')
