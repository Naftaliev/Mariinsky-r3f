import { useGLTF } from '@react-three/drei'

export function Fish() {
  const { scene } = useGLTF('/models/fish.glb')

  return (
    <primitive
      object={scene}
      position={[0, 1, 0]}
       scale={6}
    />
  )
}