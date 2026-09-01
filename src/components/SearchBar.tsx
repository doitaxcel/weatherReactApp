import { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
    const [search, setSearch] = useState('');

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log("gumana ka");
        console.log('Searching for:', search);
    };

    return (
        <form
            onSubmit={handleSearchSubmit}
            className="flex justify-between items-center gap-5 border rounded-lg border-gray-500 w-[50%]"
        >
            <div className="ml-5">
                <Search size={25} />
            </div>
            <div className="w-full">
                <input
                    type="text"
                    placeholder="Search City..."
                    className="border-0 border-gray-400 rounded-lg p-1 focus:outline-none w-full"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
            </div>
            <button
                type="submit"
                className="ml-2 bg-linear-to-br from-blue-500 to-sky-400 text-white rounded-xl p-2 m-2 whitespace-nowrap"
            >
                Search
            </button>
        </form>
    );
};

export default SearchBar;
