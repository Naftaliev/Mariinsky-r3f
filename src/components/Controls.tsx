import { useState } from "react"

type SliderProps = {
        onSpeedChange: (value: number) => void
    }


export default function Slider ({onSpeedChange}: SliderProps) {

    const [speed, setSpeed] = useState(1)

    
    const handleClick = () => {
        const newSpeed = speed + 1
        setSpeed(newSpeed)
        onSpeedChange(newSpeed)
    }

    return (
        <div className="slider-wrap">
            <div className="slider">
                <span>Current speed: {speed}</span>
                <button className="speedButton" onClick={handleClick}>+</button>
            </div>
            
        </div>
    )
} 