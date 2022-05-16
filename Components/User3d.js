import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {
	OrbitControls,
	Environment,
	MeshReflectorMaterial,
	Reflector,
} from '@react-three/drei'

export default function Model({ ...props }) {
	const group = useRef()
	const { nodes, materials } = useGLTF('../model/user.glb')
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.I.geometry}
				material={materials.palette}
				position={[0.32, -1, -1.12]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
		</group>
	)
}

useGLTF.preload('../model/user.glb')
