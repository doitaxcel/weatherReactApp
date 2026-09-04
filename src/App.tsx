// import { useState } from 'react'
import './css/App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ToggleButton from './components/ToggleButton'
import Summary from './components/Summary'
import Card from './components/Card'
import HourlyForecast from './components/HourlyForecast'
import { Droplets, Wind, Gauge, Sun, Eye, CloudHail } from 'lucide-react'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='max-w-5xl mx-auto'>
        <header className='flex flex-col md:flex-row justify-between m-6 gap-3'>
          <Header />
          <div className='flex justify-center md:justify-between items-center gap-3 w-full'>
            <SearchBar />
            <ToggleButton />
          </div>
        </header>
        <main>
          <section>
            <Summary />
          </section>

          <section className='grid grid-cols-2 lg:grid-cols-3 m-6 gap-4'>
            <Card Title="Humidity" Data="65%" Logo={Droplets} />
            <Card Title="Wind" Data="65%" Logo={Wind} />
            <Card Title="Pressure" Data="65%" Logo={Gauge} />
            <Card Title="Visibility" Data="65%" Logo={Eye} />
            <Card Title="UV Index" Data="HIGH" Logo={Sun} />
            <Card Title="Chance of Rain" Data="65%" Logo={CloudHail} />
          </section>

          <section>
            <HourlyForecast />
          </section>

        </main>
      </div>
    </>
  )
}

export default App
