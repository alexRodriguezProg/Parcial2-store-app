interface SearchBarProps {
    value: string;
    onChange: (val: string) => void;
    placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "Buscar..." }: SearchBarProps) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full md:w-1/2 px-4 py-2 border border-gray-200 rounded-lg bg-white focus:outline-none focus:border-orange-600 shadow-sm"
        />
    );
}