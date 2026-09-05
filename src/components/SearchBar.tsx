import { Search } from "lucide-react";

interface Props {
    onSearch: (city: string) => void;
    error: string | null;
}

const SearchBar = ({ onSearch, error }: Props) => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();

                const form = e.currentTarget;
                const input = form.elements.namedItem("city") as HTMLInputElement;

                if (!input.value.trim()) return;

                onSearch(input.value.trim());
                input.value = "";
            }}
            className="flex items-center w-full max-w-md"
        >
            <div className="flex relative items-center w-full bg-white rounded-2xl border border-gray-200 shadow-sm px-4 py-2 transition-all duration-200 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100">

                <Search
                    size={20}
                    className="text-gray-400 mr-2 shrink-0"
                />

                <input
                    name="city"
                    type="text"
                    placeholder="Search city..."
                    className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
                />
                {error && (
                    <p className="absolute top-full mt-1 text-sm text-red-500">
                        {error}
                    </p>
                )}

                <button
                    type="submit"
                    className="ml-2 rounded-2xl bg-blue-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBar;