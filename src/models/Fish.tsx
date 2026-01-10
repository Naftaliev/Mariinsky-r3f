import { useGLTF } from '@react-three/drei'

export function Fish() {
  const { scene } = useGLTF('/models/fish.glb')

  return (
    <primitive
      object={scene}
      position={[0, 2, 8]}
      scale={6}
      rotation={[0, Math.PI / -2, 0]}
    />
  )
}