import { Cloud } from "lucide-react"

const Header = () => {
    const clickAlert = () => {
        alert("Hello World");
    }

    return (
        <>
            <div className="flex items-center gap-3" onClick={clickAlert}>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-sky-400 text-white shadow-md">
                    <Cloud size={25} />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold">Weatherly</h3>
                    <p className="text-xs text-gray-500">Your Daily Forecast</p>
                </div>
            </div>
        </>
    )
}

export default Header