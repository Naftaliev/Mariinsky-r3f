import { useRef } from "react"
import { Group } from "three"
import { useFrame } from "@react-three/fiber"
import { useChandelierAnchors } from '../components/useChandelierAnchors'
import * as THREE from "three"

type Props = {
  gltf: GLTF;
};

export default function Seats( {theaterModel}: Props ) {

    const theaterGroup = useRef<Group>(null!) 

    useFrame((_ , delta) => {
        const mesh = theaterGroup.current
        if (!mesh) return

        }
    )

    return (
    <primitive ref={theaterGroup} object={theaterModel.scene}  position={[0, 0, 5]} scale={1}/>
    )

}