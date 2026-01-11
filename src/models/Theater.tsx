import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { useRef } from "react"
import { Group } from "three"
import { useFrame } from "@react-three/fiber"
import { useChandelierAnchors } from '../components/chandelierAnchors'
import * as THREE from "three"
import { useLayoutEffect } from 'react'

export default function Seats() {

    const theaterGroup = useRef<Group>(null!) 

    const theater = useLoader(GLTFLoader, './models/balcony-test.glb')

     const anchors = useChandelierAnchors(theater)

    theater.scene.updateMatrixWorld(true)

    useFrame((_ , delta) => {
        const mesh = theaterGroup.current
        if (!mesh) return

        }
    )

    return (
    <primitive ref={theaterGroup} object={theater.scene}  position={[0, 0, 5]} scale={1}/>
    )

}