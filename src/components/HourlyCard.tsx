import type { LucideIcon } from "lucide-react";

interface Props {
    time: string;
    temperature: string;
    Icon: LucideIcon;
}

const HourlyCard = ({ time, Icon, temperature }: Props) => {
    return (
        <div className="flex shrink-0 w-24 h-32 flex-col justify-between items-center bg-gray-100 hover:bg-gray-300 rounded-2xl p-4 text-center transition-all duration-300">
            <header className="text-sm text-gray-500">{time}</header>
            <main>
                <Icon className="text-blue-500 my-2" />
            </main>
            <footer>{temperature}°</footer>
        </div>
    )
}

export default HourlyCard