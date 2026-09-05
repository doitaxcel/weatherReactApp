import { useState, useEffect } from 'react'
import './css/App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ToggleButton from './components/ToggleButton'
import Summary from './components/Summary'
import Card from './components/Card'
import HourlyForecast from './components/HourlyForecast'
import WeekForecast from './components/WeekForecast'
import { Droplets, Wind, Gauge, Sun, Eye, CloudHail } from 'lucide-react'
import { getWeatherDescription, getWeatherIcon, convertTemperature } from './utils/weather'
import { formatTime, formatDate, getCurrentHourIndex } from './utils/dateAndTime'
import { type WeatherData } from './types/weather'
import { fetchWeather, searchCity, type Location } from './services/weatherApi'

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [location, setLocation] = useState<Location>({
    name: "Manila",
    latitude: 14.5995,
    longitude: 120.9842
  });
  const [unit, setUnit] = useState<"C" | "F">("C");

  const handleSearch = async (city: string) => {
    try {
      setSearchError(null);

      if (!city.trim()) {
        setSearchError("Please enter a city.");
        return;
      }

      const result = await searchCity(city);

      setLocation({
        name: result.name,
        latitude: result.latitude,
        longitude: result.longitude,
      });

    } catch (error) {
      console.error(error);

      if (error instanceof Error && error.message === "City not found") {
        setSearchError("City not found.");
      } else {
        setSearchError("Unable to search for city.");
      }
    }
  };

  useEffect(() => {
    async function getWeather() {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchWeather(
          location.latitude,
          location.longitude
        );

        setWeather(data);

      } catch (error) {
        console.error(error);
        setError("Unable to load weather data.");
      } finally {
        setLoading(false);
      }
    }

    getWeather();
  }, [location]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">Loading weather...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!weather) {
    return null;
  }

  const CurrentIcon = getWeatherIcon(weather.current.weather_code);
  const currentHourIndex = getCurrentHourIndex(
    weather.hourly.time,
    weather.current.time
  );

  return (
    <>
      <div className='max-w-5xl mx-auto'>
        <header className='flex flex-col md:flex-row justify-between m-6 gap-3'>
          <Header />

          <div className='flex justify-center items-center md:justify-between gap-3 w-full'>
            <SearchBar
              onSearch={handleSearch}
              error={searchError}
            />
            <ToggleButton unit={unit} setUnit={setUnit} />
          </div>
        </header>
        <main>
          <section>
            <Summary
              cityName={location.name}
              date={formatDate(weather.daily.time[0])}
              description={getWeatherDescription(weather.current.weather_code)}
              temperature={convertTemperature(weather.current.temperature_2m, unit)}
              feelsLike={convertTemperature(weather.current.apparent_temperature, unit)}
              maxTemp={convertTemperature(weather.daily.temperature_2m_max[0], unit)}
              minTemp={convertTemperature(weather.daily.temperature_2m_min[0], unit)}
              updatedTime={formatTime(weather.current.time)}
              Icon={CurrentIcon}
              unit={unit}
            />
          </section>

          <section className='grid grid-cols-2 lg:grid-cols-3 m-6 gap-4'>
            <Card Title="Humidity" Data={`${weather.current.relative_humidity_2m}%`} Logo={Droplets} />
            <Card Title="Wind" Data={`${Math.round(weather.current.wind_speed_10m)} km/h`} Logo={Wind} />
            <Card Title="Pressure" Data={`${weather.current.pressure_msl} hPa`} Logo={Gauge} />
            <Card Title="Visibility" Data={`${(weather.hourly.visibility[currentHourIndex] / 1000).toFixed(1)} km`} Logo={Eye} />
            <Card Title="UV Index" Data={`${weather.hourly.uv_index[currentHourIndex]}`} Logo={Sun} />
            <Card Title="Chance of Rain" Data={`${weather.hourly.precipitation_probability[currentHourIndex]}%`} Logo={CloudHail} />
          </section>

          <section>
            <HourlyForecast
              hourly={weather.hourly}
              currentHourIndex={currentHourIndex}
              unit={unit}
            />
          </section>

          <section>
            <WeekForecast
              daily={weather.daily}
              unit={unit}
            />
          </section>
        </main>
      </div>
    </>
  )
}

export default App
