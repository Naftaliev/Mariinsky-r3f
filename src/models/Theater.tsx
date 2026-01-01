import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { useRef } from "react"
import { Group } from "three"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useLayoutEffect } from 'react'

export default function Seats() {

    const seatsGroup = useRef<Group>(null!) 

    const gltf = useLoader(GLTFLoader, './models/seats.glb')

    useFrame((_ , delta) => {
        const mesh = seatsGroup.current
        if (!mesh) return

        }
    )

    return (
    <primitive ref={seatsGroup} object={gltf.scene}  position={[0, 0, 0]} scale={1}/>
    )

}