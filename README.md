# Weather App

A simple and responsive weather application built with React, TypeScript, and Open-Meteo.

## Features

- 🌤️ Current weather conditions
- 📍 Starts with Manila weather
- 🔍 Search for different cities
- 🌡️ Toggle between Celsius and Fahrenheit
- 💧 Humidity information
- 💨 Wind speed
- 📊 Atmospheric pressure
- 👁️ Visibility
- ☀️ UV Index
- 🌧️ Chance of rain
- 🕐 Hourly forecast
- 📅 7-day forecast
- 🌤️ Weather-based icons and descriptions
- 📱 Responsive design

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Open-Meteo API

## API

Weather data is provided by [Open-Meteo](https://open-meteo.com/).

The application uses:

- Open-Meteo Forecast API for weather data
- Open-Meteo Geocoding API for city searches

No API key is required.

## Project Structure

```text
src/
├── components/
│   ├── Card.tsx
│   ├── Header.tsx
│   ├── HourlyCard.tsx
│   ├── HourlyForecast.tsx
│   ├── SearchBar.tsx
│   ├── Summary.tsx
│   ├── ToggleButton.tsx
│   └── WeekForecast.tsx
│
├── services/
│   └── weatherApi.ts
│
├── types/
│   └── weather.ts
│
├── utils/
│   ├── dateAndTime.ts
│   └── weather.ts
│
├── App.tsx
└── main.tsx
```

Getting Started
Prerequisites
Make sure you have Node.js installed on your computer.

1. Clone the repository
git clone <your-repository-url>

2. Navigate into the project
cd <project-folder>

3. Install dependencies
npm install

4. Start the development server
npm run dev

Open the local URL provided by Vite in your browser.


How It Works
The application starts with Manila as the default location.

When a user searches for a city, the Open-Meteo Geocoding API is used to find the city's coordinates. Those coordinates are then used with the Open-Meteo Forecast API to retrieve the weather data.

The application displays:

Current weather
Feels-like temperature
Today's high and low
Humidity
Wind speed
Atmospheric pressure
Visibility
UV index
Chance of rain
Hourly forecast
7-day forecast
The temperature toggle allows users to switch between Celsius and Fahrenheit.

Project Structure Overview
Components
The components directory contains the reusable UI components used throughout the application.

Services
The services directory contains functions responsible for communicating with external APIs.

Types
The types directory contains TypeScript interfaces used to describe the weather API data.

Utils
The utils directory contains reusable helper functions, such as weather-code descriptions, weather icons, temperature conversion, and date/time formatting.

API Documentation
Open-Meteo:

https://open-meteo.com/

Open-Meteo provides free weather APIs without requiring an API key.

Future Improvements
Possible improvements for the project include:

Weather forecast for more than 7 days
Multiple search results
Favorite cities
Dark mode
Better loading animations
More detailed weather information
Improved mobile experience
Geolocation support
License
This project is for learning and portfolio purposes.