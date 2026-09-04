import type { LucideIcon } from "lucide-react";



interface Props {
    time: string;
    Temperature: string;
    Icon: LucideIcon;
}

const HourlyCard = ({ time, Icon, Temperature }: Props) => {
    return (
        <div className="flex flex-col justify-center items-center bg-gray-100 hover:bg-gray-300 rounded-2xl mx-3 my-1 p-2 text-center transition-all duration-300">
            <header className="text-sm text-gray-500">{time}</header>
            <main>
                <Icon className="text-blue-500 my-2" />
            </main>
            <footer>{Temperature}</footer>
        </div>
    )
}

export default HourlyCard