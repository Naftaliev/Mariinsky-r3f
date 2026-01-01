import { useGLTF } from '@react-three/drei'

export function Orca() {
  const { scene } = useGLTF('/models/orca.glb')

  return (
    <primitive
      object={scene}
      position={[0, 1, 0]}
    />
  )
}