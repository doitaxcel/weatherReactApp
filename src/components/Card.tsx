import type { LucideIcon } from "lucide-react";

interface Props {
    Title: string;
    Data: string;
    Logo: LucideIcon;

}

const Card = ({ Title, Data, Logo }: Props) => {
    return (
        <div className="group flex items-center gap-3 border border-gray-300 rounded-2xl p-5 w-full hover:shadow-md transition-all duration-300">
            <div className="">
                <Logo className="text-gray-400 group-hover:text-blue-500 transition-all duration-300" />
            </div>
            <div>
                <h3 className="text-gray-400 font-semibold group-hover:text-blue-500 transition-all duration-300">{Title}</h3>
                <p className="font-semibold group-hover:text-blue-500 transition-all duration-300">{Data}</p>
            </div>
        </div>
    )
}

export default Card