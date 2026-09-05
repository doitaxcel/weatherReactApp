import type { WeatherData } from "../types/weather";

export interface Location {
    name: string;
    latitude: number;
    longitude: number;
}

export async function searchCity(city: string): Promise<Location> {
    const url =
        `https://geocoding-api.open-meteo.com/v1/search` +
        `?name=${encodeURIComponent(city)}` +
        `&count=1` +
        `&language=en` +
        `&format=json`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to search for city");
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
        throw new Error("City not found");
    }

    const result = data.results[0];

    return {
        name: result.name,
        latitude: result.latitude,
        longitude: result.longitude,
    };
}

export async function fetchWeather(
    latitude: number,
    longitude: number
): Promise<WeatherData> {
    const url =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${latitude}` +
        `&longitude=${longitude}` +
        `&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max` +
        `&hourly=temperature_2m,uv_index,apparent_temperature,relative_humidity_2m,precipitation_probability,weather_code,visibility,wind_speed_10m` +
        `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,pressure_msl` +
        `&timezone=auto`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }

    const data: WeatherData = await response.json();

    if (!data.current || !data.hourly || !data.daily) {
        throw new Error("Invalid weather data");
    }

    return data;
}