import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import Scene from "./components/Scene"
import Slider from "./components/Controls"

export default function App() {
  const cubeSpeedRef = useRef<number>(1)

  const handleSpeedChange = (newSpeed: number) => {
  cubeSpeedRef.current = newSpeed
}


  return (
    <div className="app">
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <Scene cubeSpeedRef={cubeSpeedRef}/>
      </Canvas>
      <Slider onSpeedChange={handleSpeedChange} /> 
    </div>
  )
  

}
