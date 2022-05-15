import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
	const group = useRef()
	const { nodes, materials } = useGLTF('../model/window.glb')
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.window.geometry}
				material={materials.palette}
				position={[0.32, -2.19, -2.12]}
				rotation={[Math.PI / 2, 0, 0]}
				receiveShadow={false}
				castShadow={false}
			/>
		</group>
	)
}

useGLTF.preload('../model/window.glb')
