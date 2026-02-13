import { useGLTF, Instances, Instance } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'

export function ChairInstances(anchorsProp) {

  const anchors = anchorsProp.anchorsArray
  console.log(anchors)

  const { nodes, materials } = useGLTF('/models/chair.glb')

  // console.log("nodes keys:", Object.keys(nodes))
  // console.log("materials keys:", Object.keys(materials))

  const chairContent = {
    key: "chair",
    geometry: nodes.chair.geometry,
    material: materials.colorPalette,
  }

  useGLTF.preload('models/chair.glb')

  return (
        <Instances
          key={chairContent.key}
          geometry={chairContent.geometry}
          material={chairContent.material}
        >
          {anchors.map((anchor) => {
              return (
                <Instance
                  key={anchor.name}
                  position={anchor.position}
                  quaternion={anchor.quaternion}
                  scale={anchor.scale}
                />
              )
          })}
        </Instances>
        
    )
  }
