// import { useState } from 'react'
import './css/App.css'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ToggleButton from './components/ToggleButton'
import Summary from './components/Summary'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header className='flex justify-between m-6 gap-3 md:gap-5'>
        <Header />
        <SearchBar />
        <ToggleButton />
      </header>
      <main><Summary /></main>
    </>
  )
}

export default App
