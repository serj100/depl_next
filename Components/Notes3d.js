import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
	const group = useRef()
	const { nodes, materials } = useGLTF('../model/notes.glb')
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				position={[0, -1.7, 0]}
				geometry={nodes.notes.geometry}
				material={materials.palette}
				rotation={[Math.PI / 2, 0, 0]}
			/>
		</group>
	)
}

useGLTF.preload('../model/notes.glb')
