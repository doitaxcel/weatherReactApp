import { getWeatherIcon, getWeatherDescription, convertTemperature } from "../utils/weather"
import { type WeatherData } from "../types/weather";
import { formatDay } from "../utils/dateAndTime"

interface Props {
    daily: WeatherData["daily"];
    unit: "C" | "F";
}

const WeekForecast = ({ daily, unit }: Props) => {
    return (
        <>
            <section className="border border-gray-300 m-6 rounded-2xl bg-white/30 backdrop-blur-md">
                <header className="px-6 py-2 text-base text-gray-500">
                    7-DAY FORECAST
                </header>

                <main className="border-b rounded-b-2xl border-gray-500/60 ">
                    {daily.time.map((date, index) => {
                        const Icon = getWeatherIcon(daily.weather_code[index])
                        const description = getWeatherDescription(daily.weather_code[index])

                        return (
                            <div key={date} className="border-b border-gray-500/60 last:border-b-0">
                                <div className="flex px-6 py-1 items-center w-full">
                                    <h3 className=" mr-[5%] text-base ">{formatDay(date, index)}</h3>

                                    <div className="flex items-center  gap-6 flex-1">
                                        <Icon size={45} className="text-blue-500" />
                                        <p className="font-thin text-gray-500">{description}</p>
                                    </div>
                                    <p className="text-blue-400 ml-auto">{daily.precipitation_probability_max[index]}%</p>
                                </div>
                                <p className="px-6 py-1 font-semibold">
                                    {convertTemperature(daily.temperature_2m_max[index], unit)}°{unit}

                                    <span className="text-gray-500 font-semibold ml-3">
                                        {convertTemperature(daily.temperature_2m_min[index], unit)}°{unit}
                                    </span>
                                </p>
                            </div>
                        )
                    })}
                </main>
            </section>
        </>
    )
}

export default WeekForecast