import { getWeatherIcon, convertTemperature } from "../utils/weather"
import { formatTime } from "../utils/dateAndTime"
import { type WeatherData } from "../types/weather";
import HourlyCard from "./HourlyCard"

interface Props {
    hourly: WeatherData["hourly"];
    currentHourIndex: number;
    unit: "C" | "F";
}

const HourlyForecast = ({ hourly, currentHourIndex, unit }: Props) => {
    return (
        <>
            <section className='border border-gray-300 rounded-2xl m-6'>
                <header className='p-3 py-2'>
                    <h2 className='font-medium text-gray-500'>Hourly Forecast</h2>
                </header>

                <div className="flex items-center gap-2 overflow-x-auto p-3">
                    {hourly.time
                        .slice(currentHourIndex, currentHourIndex + 23)
                        .map((time, index) => {
                            const actualIndex = currentHourIndex + index;

                            const Icon = getWeatherIcon(
                                hourly.weather_code[actualIndex]
                            );

                            const temperature = convertTemperature(
                                hourly.temperature_2m[actualIndex],
                                unit
                            );

                            return (
                                <HourlyCard
                                    key={time}
                                    time={formatTime(time)}
                                    temperature={temperature.toString()}
                                    Icon={Icon}
                                />
                            );
                        })}
                </div>
            </section>
        </>
    )
}

export default HourlyForecast