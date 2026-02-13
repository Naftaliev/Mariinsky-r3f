import { Stats, OrbitControls, GizmoHelper, GizmoViewport,  Grid, useGLTF } from "@react-three/drei"
import { Perf } from 'r3f-perf'
import Seats from "../models/Theater"
import { Fish } from "../models/Fish"
import { Orca } from "../models/Orca"
import { ChandelierInstances } from "./ChandelierInstances.tsx"
import { useChandelierAnchors } from "./useChandelierAnchors.tsx"
import { ChairInstances } from "./ChairInstances.tsx"
import { useChairAnchors } from "./useChairAnchors.tsx"





export default function Scene() {

  const theaterGltf = useGLTF('/models/balcony-test.glb')

  const chandelierAnchorsArray = useChandelierAnchors(theaterGltf)
  const chairAnchorsArray = useChairAnchors(theaterGltf)

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />
      <Seats theaterModel={theaterGltf}/>
      <ChandelierInstances anchorsArray={chandelierAnchorsArray} />
      <ChairInstances anchorsArray={chairAnchorsArray} />
      {/* <Fish />
      <Orca /> */}
      <OrbitControls />
      <Stats />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport />
      </GizmoHelper>
      <axesHelper args={[1.5]} />
      <Grid
        args={[10, 10]}
        position={[0, 0, 0]}
        infiniteGrid={false}
      />
      <Perf position="top-right" />
    </>
  )
}
