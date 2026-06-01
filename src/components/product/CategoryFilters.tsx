interface Category {
    id: number;
    nombre: string;
}

interface CategoryFiltersProps {
    categories: Category[];
    selectedCategory: number | null;
    onSelectCategory: (id: number | null) => void;
}

export default function CategoryFilters({ categories, selectedCategory, onSelectCategory }: CategoryFiltersProps) {
    return (
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            <button
                onClick={() => onSelectCategory(null)}
                className={`rounded-full border px-6 py-2 font-medium transition-colors whitespace-nowrap ${
                    selectedCategory === null
                        ? 'bg-orange-600 text-white border-orange-600'
                        : 'border-gray-300 text-gray-600 bg-white hover:bg-gray-50'
                }`}
            >
                Todo
            </button>
            {categories.map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`rounded-full border px-6 py-2 font-medium transition-colors whitespace-nowrap ${
                        selectedCategory === cat.id
                            ? 'bg-orange-600 text-white border-orange-600'
                            : 'border-gray-300 text-gray-600 bg-white hover:bg-gray-50'
                    }`}
                >
                    {cat.nombre}
                </button>
            ))}
        </div>
    );
}