import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
	const group = useRef()
	const { nodes, materials } = useGLTF('../model/phone.glb')
	return (
		<group ref={group} {...props} dispose={null}>
			<mesh
				geometry={nodes.phone.geometry}
				material={materials.palette}
				position={[0, -0.91, 0]}
				rotation={[Math.PI / 2, 0, 0]}
			/>
		</group>
	)
}

useGLTF.preload('../model/phone.glb')
