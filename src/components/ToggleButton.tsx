import { useState } from 'react'
import "../css/ToggleButton.css"

const ToggleButton = () => {
    const [unit, setUnit] = useState("C");


    return (
        <div className="controls mt-4">
            <div className="temp-toggle">
                <button
                    className={unit === "C" ? "active" : ""}
                    onClick={() => setUnit("C")}
                >
                    °C
                </button>

                <button
                    className={unit === "F" ? "active" : ""}
                    onClick={() => setUnit("F")}
                >
                    °F
                </button>
            </div>
        </div>
    );
}

export default ToggleButton