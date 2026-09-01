// import { useState } from 'react'
import './css/App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ToggleButton from './components/ToggleButton'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header className='flex justify-between gap-3 md:gap-5'>
        <Header />
        <SearchBar />
        <ToggleButton />
      </header>
    </>
  )
}

export default App
