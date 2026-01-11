import { Stats, OrbitControls, GizmoHelper, GizmoViewport,  Grid } from "@react-three/drei"
import { Perf } from 'r3f-perf'
import Seats from "../models/Theater"
import { Fish } from "../models/Fish"
import { Orca } from "../models/Orca"

type SceneProps = {
  cubeSpeedRef: React.MutableRefObject<number>
}

export default function Scene({cubeSpeedRef}: SceneProps) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />
      <Seats cubeSpeedRef={cubeSpeedRef}/>
      <Fish />
      <Orca />
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
