interface Ingredient {
    id: number;
    nombre: string;
    es_alergeno: boolean;
}

interface IngredientBadgeProps {
    ingredient: Ingredient;
}

export default function IngredientBadge({ingredient}: IngredientBadgeProps) {
    return (
        <span
            className={`px-3 py-1 rounded-md text-sm font-medium ${
                ingredient.es_alergeno ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-slate-100 text-gray-600'
            }`}
            title={ingredient.es_alergeno ? 'Precaución: Alérgeno' : ''}
        >
            {ingredient.nombre}
        </span>
    );
}