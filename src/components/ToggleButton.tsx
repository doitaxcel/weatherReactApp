import "../css/ToggleButton.css"

interface Props {
    unit: "C" | "F";
    setUnit: React.Dispatch<React.SetStateAction<"C" | "F">>;
}

const ToggleButton = ({ unit, setUnit }: Props) => {
    return (
        <div className="controls">
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

export default ToggleButton;
