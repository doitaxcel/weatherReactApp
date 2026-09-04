import { Clock, Star, CloudSun } from 'lucide-react'

const Summary = () => {
    return (
        <section className='flex flex-col justify-center rounded-2xl m-6 p-7 bg-linear-to-br from-blue-500 to-sky-400 text-white shadow-md'>
            <header className='flex justify-between items-center gap-5'>
                <div>
                    <h2 className='text-3xl font-bold'>Manila, Philippines</h2>
                </div>

                <button type='button' aria-label='Add Manila to favorites'>
                    <Star />
                </button>
            </header>

            <div className='text-white/80 mt-1'>
                <p>Tuesday, September 1</p>
            </div>

            <div className='flex text-center mt-5 items-center'>
                <div>
                    <CloudSun size={100} aria-hidden='true' />
                </div>

                <div className='ml-5'>
                    <p className='text-5xl font-semibold'>30°</p>
                    <p className='font-semibold mt-1'>Partly Cloudy</p>
                </div>
            </div>

            <footer className='flex justify-between mt-4 gap-3'>
                <div className='flex gap-4'>
                    <span>Feels Like : 32°C</span>
                    <span>H : 31°</span>
                    <span>L : 26°</span>
                </div>

                <div className='flex justify-center'>
                    <Clock aria-hidden='true' />
                    <span className='ml-2'>Updated: 10:25 AM</span>
                </div>
            </footer>
        </section>
    )
}

export default Summary