import { Cloud } from "lucide-react"

const Header = () => {

    return (
        <>
            <div className="flex items-center gap-3">
                <div className="flex h-15 w-15 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-sky-400 text-white shadow-md">
                    <Cloud size={25} />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-xl font-bold">Weathering with You</h1>
                    <p className="text-xs text-gray-500">Your Daily Forecast</p>
                </div>
            </div>
        </>
    )
}

export default Header