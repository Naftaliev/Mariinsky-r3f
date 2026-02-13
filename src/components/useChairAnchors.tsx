import * as THREE from 'three'
import { useMemo } from 'react'

export function useChairAnchors(gltfObject) {
  return useMemo(() => {
    if (!gltfObject) return []
  
    gltfObject.scene.updateMatrixWorld(true)
    
    return Object.values(gltfObject.nodes)

      .filter(
        (n) =>
          n.type === 'Object3D' &&
          n.name.startsWith('seatAnchor')
      )
      .map((n) => {
        //console.log(n)
        const position = new THREE.Vector3()
        const quaternion = new THREE.Quaternion()
        const scale = new THREE.Vector3()

        n.matrixWorld.decompose(position, quaternion, scale)

        return {
          name: n.name,
          position: position.toArray(),
          quaternion: quaternion.toArray(),
        }
      })
  }, [gltfObject])
}
