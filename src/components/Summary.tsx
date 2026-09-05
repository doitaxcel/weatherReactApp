import { Clock, Star, type LucideIcon } from 'lucide-react'

interface Props {
    cityName: string;
    date: string;
    description: string;
    temperature: number;
    feelsLike: number;
    maxTemp: number;
    minTemp: number;
    updatedTime: string;
    Icon: LucideIcon;
    unit: "C" | "F";
}

function handleAddToFavorites() {
    console.log("Add to favorites");
}

const Summary = ({ cityName, date, description, temperature, feelsLike, maxTemp, minTemp, Icon, updatedTime, unit }: Props) => {
    return (
        <section className='flex flex-col justify-center rounded-2xl m-6 p-7 bg-linear-to-br from-blue-500 to-sky-400 text-white shadow-md'>
            <header className='flex justify-between items-center gap-5'>
                <div>
                    <h2 className='text-3xl font-bold'>{cityName}</h2>
                </div>

                <button type='button' aria-label='Add to favorites' onClick={handleAddToFavorites}>
                    <Star />
                </button>
            </header>

            <div className='text-white/80 mt-1'>
                <p>{date}</p>
            </div>

            <div className='flex text-center mt-5 items-center'>
                <div>
                    <Icon size={100} aria-hidden='true' />
                </div>

                <div className='ml-5'>
                    <p className='text-5xl font-semibold'>{temperature}°{unit}</p>
                    <p className='font-semibold mt-1'>{description}</p>
                </div>
            </div>

            <footer className='flex justify-between mt-4 gap-3'>
                <div className='flex gap-4'>
                    <span>Feels Like : {feelsLike}°{unit}</span>
                    <span>H : {maxTemp}°</span>
                    <span>L : {minTemp}°</span>
                </div>

                <div className='flex justify-center'>
                    <Clock aria-hidden='true' />
                    <span className='ml-2'>Updated: {updatedTime}</span>
                </div>
            </footer>
        </section>
    )
}

export default Summary