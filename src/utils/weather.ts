import type { LucideIcon } from "lucide-react";
import { Sun, CloudSun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudFog } from "lucide-react";

export function getWeatherIcon(code: number): LucideIcon {
    if (code === 0) return Sun

    if ([1, 2].includes(code)) return CloudSun

    if (code === 3) return Cloud

    if ([45, 48].includes(code)) return CloudFog

    if ([51, 53, 55, 56, 57].includes(code)) {
        return CloudRain
    }

    if ([61, 63, 65, 66, 67].includes(code)) {
        return CloudRain
    }

    if ([71, 73, 75, 77].includes(code)) {
        return CloudSnow
    }

    if ([80, 81, 82].includes(code)) {
        return CloudRain
    }

    if ([85, 86].includes(code)) {
        return CloudSnow
    }

    if ([95, 96, 99].includes(code)) {
        return CloudLightning
    }

    return Cloud
}

export function getWeatherDescription(code: number) {
    if (code === 0) return "Clear Sky"

    if (code === 1) return "Mainly Clear"

    if (code === 2) return "Partly Cloudy"

    if (code === 3) return "Overcast"

    if ([45, 48].includes(code)) {
        return "Fog"
    }

    if ([51, 53, 55].includes(code)) {
        return "Drizzle"
    }

    if ([56, 57].includes(code)) {
        return "Freezing Drizzle"
    }

    if ([61, 63, 65].includes(code)) {
        return "Rain"
    }

    if ([66, 67].includes(code)) {
        return "Freezing Rain"
    }

    if ([71, 73, 75, 77].includes(code)) {
        return "Snow"
    }

    if ([80, 81, 82].includes(code)) {
        return "Rain Showers"
    }

    if ([85, 86].includes(code)) {
        return "Snow Showers"
    }

    if ([95].includes(code)) {
        return "Thunderstorm"
    }

    if ([96, 99].includes(code)) {
        return "Thunderstorm with Hail"
    }

    return "Unknown"
}

export function convertTemperature(
    temperature: number,
    unit: "C" | "F"
) {
    if (unit === "F") {
        return Math.round((temperature * 9) / 5 + 32);
    }

    return Math.round(temperature);
}
