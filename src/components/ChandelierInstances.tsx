import { useGLTF, Instances, Instance } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'

export function ChandelierInstances(anchorsProp) {

  const anchors = anchorsProp.anchorsArray
  console.log(anchors)

  const { nodes, materials } = useGLTF('/models/chandelierMini.glb')

  // console.log("nodes keys:", Object.keys(nodes))
  // console.log("materials keys:", Object.keys(materials))

  const goldPart = {
    key: "gold",
    geometry: nodes.gold.geometry,
    material: materials.goldTileMaterial,
  }
  const emissivePart = {
    key: "emissive",
    geometry: nodes.emissive.geometry,
    material: materials.emissiveMaterial,
  }
  const candlesPart = {
    key: "candles",
    geometry: nodes.candles.geometry,
    material: materials.plasterMaterial,
  }
  const dropsPart = {
    key: "drops",
    geometry: nodes.drops.geometry,
    material: materials.glassDropsMaterial,
  }

  const chandelierParts = [goldPart,emissivePart, candlesPart, dropsPart]

  useGLTF.preload('/chandelierMini.glb')

  return chandelierParts.map((part) => {
    return (
        <Instances
          key={part.key}
          geometry={part.geometry}
          material={part.material}
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
  })
}