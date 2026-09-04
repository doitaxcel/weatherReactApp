import { Star } from "lucide-react"
import HourlyCard from "./HourlyCard"

const HourlyForecast = () => {
    return (
        <>
            <section className='border border-gray-300 rounded-2xl m-6'>
                <header className='p-3 py-2'>
                    <h2 className='font-medium text-gray-500'>Hourly Forecast</h2>
                </header>

                <div className="flex justify-start items-center overflow-x-auto">
                    <HourlyCard time="10:00 AM" Temperature="30°" Icon={Star} />
                    <HourlyCard time="11:00 AM" Temperature="31°" Icon={Star} />
                    <HourlyCard time="12:00 PM" Temperature="32°" Icon={Star} />
                </div>
            </section>
        </>
    )
}

export default HourlyForecast