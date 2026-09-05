export interface WeatherData {
    current: {
        time: string;
        temperature_2m: number;
        relative_humidity_2m: number;
        apparent_temperature: number;
        weather_code: number;
        wind_speed_10m: number;
        pressure_msl: number;
    };

    hourly: {
        time: string[];
        temperature_2m: number[];
        uv_index: number[];
        apparent_temperature: number[];
        relative_humidity_2m: number[];
        precipitation_probability: number[];
        weather_code: number[];
        visibility: number[];
        wind_speed_10m: number[];
    };

    daily: {
        time: string[];
        weather_code: number[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        precipitation_probability_max: number[];
        uv_index_max: number[];
    };
}